import { useConfig } from "@/store/config";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { config } = useConfig();
  return (
    <aside
      className={`w-64 p-6 shadow-lg rounded-md ${
        config.altoContraste
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Título del Navbar */}
      <div className="text-center mb-14">
        <h1
          className={`text-3xl font-extrabold tracking-tight ${
            config.altoContraste ? "text-white" : "text-gray-800"
          }`}
        >
          SeniorCareMed
        </h1>
      </div>

      {/* Navegación */}
      <nav className="space-y-4">
        <Link
          to={"/dashboard"}
          className={`block px-4 py-2 rounded-md transition-all ${
            config.altoContraste
              ? "text-white bg-gray-800 hover:bg-gray-700"
              : "text-gray-800 hover:bg-blue-100"
          } ${
            config.fontSize === "Normal"
              ? "text-base"
              : config.fontSize === "Grande"
                ? "text-lg"
                : "text-xl"
          }`}
        >
          Inicio
        </Link>
        <Link
          to={"/dashboard/appointments"}
          className={`block px-4 py-2 rounded-md transition-all ${
            config.altoContraste
              ? "text-white bg-gray-800 hover:bg-gray-700"
              : "text-gray-800 hover:bg-blue-100"
          } ${
            config.fontSize === "Normal"
              ? "text-base"
              : config.fontSize === "Grande"
                ? "text-lg"
                : "text-xl"
          }`}
        >
          Citas
        </Link>
        <Link
          to={"/dashboard/my-appointments"}
          className={`block px-4 py-2 rounded-md transition-all ${
            config.altoContraste
              ? "text-white bg-gray-800 hover:bg-gray-700"
              : "text-gray-800 hover:bg-blue-100"
          } ${
            config.fontSize === "Normal"
              ? "text-base"
              : config.fontSize === "Grande"
                ? "text-lg"
                : "text-xl"
          }`}
        >
          Mis Citas
        </Link>
      </nav>

      <Link
        to={"/auth/login"}
        className={`mt-80 block px-4 py-2 rounded-md transition-all ${
          config.altoContraste
            ? "text-white bg-gray-800 hover:bg-gray-700"
            : "text-gray-800 hover:bg-blue-100"
        } ${
          config.fontSize === "Normal"
            ? "text-base"
            : config.fontSize === "Grande"
              ? "text-lg"
              : "text-xl"
        }`}
      >
        LogOut
      </Link>
    </aside>
  );
}
