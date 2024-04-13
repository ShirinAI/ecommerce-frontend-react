import React from "react";
import ListProductComponent from "../../components/admin/ListProductComponent";
import { isAdminUser } from "../../services/AuthService";

const AdminHome = () => {
  const isAdmin = isAdminUser();

  return (
    <div>
      {!isAdmin && <h2>Confidential Information, please log in as ADMIN to view</h2>}
      {isAdmin && <ListProductComponent />}
    </div>
  );
};

export default AdminHome;
