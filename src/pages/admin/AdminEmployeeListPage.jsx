import React from "react";
import ListEmployeesComponent from "../../components/admin/ListEmployeesComponent";
import { isAdminUser } from "../../services/AuthService";

const AdminEmployeeListPage = () => {
  const isAdmin = isAdminUser();
  return (
    <div>
      {!isAdmin && <h2>Confidential Information, please log in as ADMIN to view</h2>}
      {isAdmin && <ListEmployeesComponent />}
    </div>
  );
};

export default AdminEmployeeListPage;
