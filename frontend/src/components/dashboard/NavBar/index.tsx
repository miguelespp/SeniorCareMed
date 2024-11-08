import { useConfig } from "@/store/config";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { config } = useConfig();
  return (
    <aside
      className={`w-64 p-4 shadow-md ${config.altoContraste ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <div className="text-center mb-8">
        <h1
          className={`text-2xl font-bold ${config.altoContraste ? "text-white" : "text-gray-700"}`}
        >
          CopSenior
        </h1>
      </div>
      <nav className="space-y-4">
        <Link
          to={"/dashboard"}
          className={`block p-2 rounded-md ${config.altoContraste ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-blue-100"} ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
        >
          Inicio
        </Link>
        <Link
          to={"/dashboard/appointments"}
          className={`block p-2 rounded-md ${config.altoContraste ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-blue-100"} ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
        >
          Citas
        </Link>
        <Link
          to={"/dashboard/my-appointments"}
          className={`block p-2 rounded-md ${config.altoContraste ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-blue-100"} ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
        >
          Mis Citas
        </Link>
      </nav>
    </aside>
  );
}
