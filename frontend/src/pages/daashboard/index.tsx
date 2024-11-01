import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, Settings2 } from "lucide-react";
import useCitaStore from "@/store/data/citas";
import { useConfig } from "@/store/config";
import SheetAccess from "@/components/dashboard/AccessPanel";

const DashboardIndex = () => {
	const { citas, setCitas } = useCitaStore();
	const { config } = useConfig();

	const handleEditar = (id: number) => {
		console.log(citas.length);
		alert(`Editar la cita con ID: ${id}`);
	};

	const speakText = (text: string) => {
		if (config.auxVoz) {
			const synth = window.speechSynthesis;
			const utterThis = new SpeechSynthesisUtterance(text);
			synth.speak(utterThis);
		}
	};

	const handleCancelar = (id: number) => {
		if (
			confirm(`¿Estás seguro de que deseas cancelar la cita con ID: ${id}?`)
		) {
			setCitas(citas.filter((cita) => cita.id !== id));
		}
	};

	return (
		<div
			className={`flex min-h-screen ${config.altoContraste ? "bg-black text-white" : "bg-blue-400"}`}
		>
			{/* Contenido Principal */}
			<main className="flex-1 p-8">
				<Card className="mb-8 h-fit">
					<CardHeader className="py-4">
						<CardTitle className="flex justify-between">
							<p
								className={`text-center content-center ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
							>
								Panel de Mis Citas Médicas
							</p>
							<div className="flex">
								<SheetAccess />
								<CircleUser className="size-8" />
							</div>
						</CardTitle>
					</CardHeader>
				</Card>

				<Card className="mb-8" />
			</main>
		</div>
	);
};

export default DashboardIndex;
