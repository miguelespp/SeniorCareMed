import { useConfig } from "@/store/config";
import { CalendarPlus, CalendarX2, House } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const { config } = useConfig();
	return (
		<aside
			className={`w-64 p-6 shadow-lg rounded-md flex flex-col ${
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
			<nav className="flex-1 flex flex-col justify-between">
				<div className="space-y-4">
					<Link
						to={"/dashboard"}
						className={`flex justify-center space-x-2 px-4 py-2 rounded-md transition-all ${
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
						<House /><span>Home</span>
					</Link>
					<Link
						to={"/dashboard/appointments"}
						className={`flex justify-center space-x-2 px-4 py-2 rounded-md transition-all ${
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
						<CalendarPlus /><span>Citas</span>
					</Link>
					<Link
						to={"/dashboard/my-appointments"}
						className={`flex justify-center space-x-2 px-4 py-2 rounded-md transition-all ${
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
						<CalendarX2 /><span>Mis Citas</span>
					</Link>
				</div>
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
          onClick={() => localStorage.removeItem("token")}
				>
					LogOut
				</Link>
			</nav>
		</aside>
	);
}
