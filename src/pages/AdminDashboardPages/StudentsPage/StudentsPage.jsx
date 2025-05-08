import { useState, useEffect } from "react";
import StatsCard from "../../../components/AdminDashboardComponents/StatsCard/StatsCard";
import SearchFilterBar from "../../../components/AdminDashboardComponents/SearchFilterBar/SearchFilterBar";
import StudentTable from "../../../components/AdminDashboardComponents/StudentTable/StudentTable";
import ConfirmDeleteModal from "../../../components/AdminDashboardComponents/ConfirmDeleteModal/ConfirmDeleteModal";

import {
  useGetAllUsersQuery,
  useUpdateUserByAdminMutation,
} from "../../../services/apiSlice";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [deletingStudentId, setDeletingStudentId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updateUserByAdmin] = useUpdateUserByAdminMutation();

  const { data: users = [] } = useGetAllUsersQuery();

  useEffect(() => {
    const studentUsers = users.filter((user) => user.role === "student");
    setStudents(studentUsers);
  }, [users]);

  const updateStatus = async (id, newStatus) => {
    try {
      const existingStudent = students.find((s) => s._id === id);
      if (!existingStudent) return;

      const updatedStudent = { ...existingStudent, status: newStatus };
      await updateUserByAdmin({ id, data: { status: newStatus } }).unwrap();

      setStudents((prev) =>
        prev.map((s) => (s._id === id ? updatedStudent : s))
      );
    } catch (error) {
      console.error("Error updating student status:", error);
    }
  };

  const deleteStudentById = (id) => {
    setStudents((prev) => prev.filter((s) => s._id !== id));
    setShowDeleteModal(false);
    // You can add a real delete mutation here if needed
  };

  const filteredStudents = students
    .filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((s) => filterStatus === "all" || s.status === filterStatus);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard label="Total Students" count={students.length} />
            <StatsCard
              label="Active"
              count={students.filter((s) => s.status === "active").length}
              color="green"
            />
            <StatsCard
              label="Pending"
              count={students.filter((s) => s.status === "pending").length}
              color="yellow"
            />
            <StatsCard
              label="Deactivated"
              count={students.filter((s) => s.status === "deactivated").length}
              color="red"
            />
          </div>

          <SearchFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />

          <StudentTable
            students={filteredStudents}
            updateStatus={updateStatus}
            setDeletingStudentId={setDeletingStudentId}
            setShowDeleteModal={setShowDeleteModal}
          />

          <ConfirmDeleteModal
            show={showDeleteModal}
            setShow={setShowDeleteModal}
            deleteInstructor={deleteStudentById}
            deletingInstructorId={deletingStudentId}
          />
        </main>
      </div>
    </div>
  );
}
