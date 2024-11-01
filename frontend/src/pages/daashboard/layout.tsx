import RequireAuth from "@/components/auth/LoginFirst";
import NavBar from "@/components/dashboard/NavBar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <>
      {/* <RequireAuth /> */}
      <div className="flex h-screen">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashLayout;
