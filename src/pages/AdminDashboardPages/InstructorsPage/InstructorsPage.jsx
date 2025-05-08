import { useState, useEffect } from "react";
import ConfirmDeleteModal from "../../../components/AdminDashboardComponents/ConfirmDeleteModal/ConfirmDeleteModal";
import StatsCard from "../../../components/AdminDashboardComponents/StatsCard/StatsCard";
import SearchFilterBar from "../../../components/AdminDashboardComponents/SearchFilterBar/SearchFilterBar";
import InstructorTable from "../../../components/AdminDashboardComponents/InstructorTable/InstructorTable";
import InstructorModal from "../../../components/AdminDashboardComponents/InstructorModal/InstructorModal";

import {
  addInstructor,
  updateInstructor,
  deleteInstructor,
} from "../../../api/instructors"; // Make sure the path is correct
import { useGetAllUsersQuery, useUpdateUserByAdminMutation } from "../../../services/apiSlice";

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [editingInstructor, setEditingInstructor] = useState(null);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [deletingInstructorId, setDeletingInstructorId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updateUserByAdmin] = useUpdateUserByAdminMutation();
  const { data: users = [] } = useGetAllUsersQuery();
  useEffect(() => {
    
    if (users.length > 0) {
      const instructorUsers = users.filter(
        (user) => user.role === "instructor"
      );
      setInstructors(instructorUsers);
      console.log(instructorUsers)
    }
  }, [users]);

  // // Fetch instructors from the API when the page loads
  // useEffect(() => {
  //   const fetchInstructors = async () => {
  //     try {
  //       const response = await getAllInstructors();
  //       setInstructors(response.data); // Assuming response.data contains the array of instructors
  //     } catch (error) {
  //       console.error("Error fetching instructors:", error);
  //     }
  //   };

  //   fetchInstructors();
  // }, []); // Empty dependency array means this effect runs once on component mount

  const updateStatus = async (id, newStatus) => {
    try {
      const existingInstructor = instructors.find((inst) => inst._id === id);
      if (!existingInstructor) return;
  
      const updatedInstructor = { ...existingInstructor, status: newStatus };
  
      // ✅ Use RTK mutation
      // console.log(id,newStatus)
      await updateUserByAdmin({ id, data: { status: newStatus } }).unwrap(); // ✅ CORRECT

  
      // Update local state
      setInstructors((prev) =>
        prev.map((inst) => (inst._id === id ? updatedInstructor : inst))
      );
    } catch (error) {
      console.error("Error updating instructor status:", error);
    }
  };
  

  const addNewInstructor = async (newInstructor) => {
    try {
      // Add new instructor to the API
      const response = await addInstructor(newInstructor);
      setInstructors((prev) => [...prev, response.data]); // Add the new instructor to the state
    } catch (error) {
      console.error("Error adding instructor:", error);
    }
  };

  const editInstructor = async (updatedInstructor) => {
    try {
      // Update instructor details through the API
      await updateInstructor(updatedInstructor.id, updatedInstructor);
      setInstructors((prev) =>
        prev.map((inst) =>
          inst.id === updatedInstructor.id ? updatedInstructor : inst
        )
      );
      setEditingInstructor(null);
      setShowInstructorModal(false);
    } catch (error) {
      console.error("Error editing instructor:", error);
    }
  };

  const deleteInstructorById = async (id) => {
    try {
      // Delete instructor through the API
      await deleteInstructor(id);
      setInstructors((prev) => prev.filter((inst) => inst.id !== id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting instructor:", error);
    }
  };

  const filteredInstructors = instructors
    .filter(
      (instructor) =>
        instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (instructor) =>
        filterStatus === "all" || instructor.status === filterStatus
    );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard label="Total Instructors" count={instructors.length} />
            <StatsCard
              label="Active"
              count={instructors.filter((i) => i.status === "active").length}
              color="green"
            />
            <StatsCard
              label="Pending"
              count={instructors.filter((i) => i.status === "pending").length}
              color="yellow"
            />
            <StatsCard
              label="Deactivated"
              count={
                instructors.filter((i) => i.status === "deactivated").length
              }
              color="red"
            />
          </div>

          {/* Search and Filter Bar */}
          <SearchFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />

          {/* Instructors Table */}
          <InstructorTable
            instructors={filteredInstructors}
            updateStatus={updateStatus}
            setEditingInstructor={setEditingInstructor}
            setDeletingInstructorId={setDeletingInstructorId}
            setShowDeleteModal={setShowDeleteModal}
          />

          {/* Add Instructor Modal */}
          <InstructorModal
            show={showInstructorModal}
            setShow={setShowInstructorModal}
            addInstructor={addNewInstructor}
            editInstructor={editInstructor}
            instructor={editingInstructor}
          />

          {/* Delete Confirmation Modal */}
          <ConfirmDeleteModal
            show={showDeleteModal}
            setShow={setShowDeleteModal}
            deleteInstructor={deleteInstructorById}
            deletingInstructorId={deletingInstructorId}
          />
        </main>
      </div>
    </div>
  );
}
