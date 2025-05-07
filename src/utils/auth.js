export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");
export const isLoggedIn = () => !!getToken();
export const isInstructor = () => isLoggedIn() && getRole() === "instructor";
export const isStudent = () => isLoggedIn() && getRole() === "student";
