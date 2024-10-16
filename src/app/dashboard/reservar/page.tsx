"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUser, Settings2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useCitaStore from "@/hooks/data/citas";
import { useConfig } from "@/hooks/config";

const Dashboard: React.FC = () => {
	const [especialidad, setEspecialidad] = useState<string>("");
	const [medico, setMedico] = useState<string>("");

	const { citas, setCitas } = useCitaStore();
	const { config, setFontSize, toggleAltoContraste, toggleAuxVoz } =
		useConfig();

	const speakText = (text: string) => {
		if (config.auxVoz) {
			const synth = window.speechSynthesis;
			const utterThis = new SpeechSynthesisUtterance(text);
			synth.speak(utterThis);
		}
	}

	const handleReservar = () => {
		console.log(citas.length);
		setCitas([
			...citas,
			{
				id: citas.length + 1,
				fecha: "19/03/2024",
				especialidad: especialidad,
				medico: medico,
			},
		]);

		alert("Cita reservada correctamente");
	};

	const handleSwitchChange = () => {
		toggleAltoContraste();
	};

	const handleSelectChange = (value: "Normal" | "Grande" | "Muy Grande") => {
		console.log(value);
		setFontSize(value);
	};

	const handleVozChange = () => {
		toggleAuxVoz();
	}

	return (
		<div
			className={`flex min-h-screen ${config.altoContraste ? "bg-black text-white" : "bg-blue-400"}`}
		>
			{/* Menú Lateral */}

			{/* Contenido Principal */}
			<main className="flex-1 p-8">
				<Card className="mb-8 h-fit">
					<CardHeader className="py-4">
						<CardTitle className="flex justify-between">
							<p
								className={`text-center content-center ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
							>
								Panel de Reserva de Citas Médicas
							</p>
							<div className="flex">
							<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="mr-2">
					<Settings2 />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>Configuración</SheetTitle>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Alto contraste
						</Label>
						<Switch
							id="name"
							checked={config.altoContraste}
							onCheckedChange={handleSwitchChange}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Tamaño del Texto
						</Label>
						<Select onValueChange={handleSelectChange}>
							<SelectTrigger className="w-36">
								<SelectValue placeholder="Seleccionar una opción" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Normal">Normal</SelectItem>
								<SelectItem value="Grande">Grande</SelectItem>
								<SelectItem value="Muy Grande">Muy Grande</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label
							htmlFor="username"
							className="text-right"
							onMouseEnter={() =>
								speakText("Un asistente para navegar por la pagina")
							}
						>
							Asistente de Voz
						</Label>
						<Switch id="username" onCheckedChange={handleVozChange} />
					</div>
				</div>
			</SheetContent>
		</Sheet>
								<CircleUser className="size-8" />
							</div>
						</CardTitle>
					</CardHeader>
				</Card>
				<Card className="mb-8">
					<CardHeader>
						<CardTitle
							className={`${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
						>
							Programación Médica
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p
							className={`mb-4 text-gray-600 ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-2xl" : "text`xl"}`}
						>
							Con el objetivo de brindar una mejor atención en consulta externa,
							el sistema solo permitirá reservar una cita por día.
						</p>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label
									htmlFor="especialidad"
									className={`block mb-2 font-medium text-gray-700 ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-2xl" : "text`xl"}`}
								>
									Especialidad:
								</label>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline">
											{especialidad || "Seleccionar una opción"}
										</Button>
									</DialogTrigger>
									<DialogContent className="max-w-[40rem]">
										<DialogHeader>
											<DialogTitle>Seleccionar Especialidad</DialogTitle>
										</DialogHeader>
										<div className="flex flex-wrap justify-around mt-2 space-y-2">
											<Button
												className="size-fit p-0 bg-white"
												onClick={() => setEspecialidad("Gastroentorologia")}
											>
												<Card className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-white flex-1">
													<CardHeader className="mb-4 text-center">
														<CardTitle className="text-2xl font-bold text-gray-800">
															Gastroentorologia
														</CardTitle>
													</CardHeader>
												</Card>
											</Button>
											<Button
												className="size-fit p-0 bg-white"
												onClick={() => setEspecialidad("Cardiología")}
											>
												<Card className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-white flex-1">
													<CardHeader className="mb-4 text-center">
														<CardTitle className="text-2xl font-bold text-gray-800">
															Cardiologia
														</CardTitle>
													</CardHeader>
												</Card>
											</Button>
											<Button
												className="size-fit p-0 bg-white"
												onClick={() => setEspecialidad("Pediatria")}
											>
												<Card className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-white flex-1">
													<CardHeader className="mb-4 text-center">
														<CardTitle className="text-2xl font-bold text-gray-800">
															Pediatria
														</CardTitle>
													</CardHeader>
												</Card>
											</Button>
											<Button
												className="size-fit p-0 bg-white"
												onClick={() => setEspecialidad("Traumatismo")}
											>
												<Card className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-white flex-1">
													<CardHeader className="mb-4 text-center">
														<CardTitle className="text-2xl font-bold text-gray-800">
															Traumatismo
														</CardTitle>
													</CardHeader>
												</Card>
											</Button>
										</div>
									</DialogContent>
								</Dialog>
								{/* <Select
                  value={especialidad}
                  onValueChange={(e) => setEspecialidad(e)}
                >
                  <SelectTrigger className=''>
                    <SelectValue placeholder={especialidad || 'Seleccionar una opción'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anestesiologia">Anestesiología</SelectItem>
                    <SelectItem value="cardiologia">Cardiología</SelectItem>
                  </SelectContent>
                </Select> */}
							</div>
							<div>
								<label
									htmlFor="medico"
									className="block mb-2 font-medium text-gray-700"
								>
									Médicos:
								</label>
								<Select value={medico} onValueChange={(e) => setMedico(e)}>
									<SelectTrigger className="w-[180px] h-10">
										<SelectValue
											placeholder={medico || "Seleccionar una opción"}
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">Dr. Juan Pérez</SelectItem>
										<SelectItem value="2">Dra. Ana Gómez</SelectItem>
										<SelectItem value="3">Dr. Carlos Sánchez</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Tabla de Citas Disponibles */}
				<Card>
					<CardHeader>
						<CardTitle
							className={`${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
						>
							Fechas Disponibles
						</CardTitle>
					</CardHeader>
					<CardContent>
						<table className="min-w-full table-auto border-collapse">
							<thead>
								<tr>
									<th className="border-b-2 p-3 text-left">Fecha</th>
									<th className="border-b-2 p-3 text-left">Servicio</th>
									<th className="border-b-2 p-3 text-left">Cupos</th>
									<th className="border-b-2 p-3 text-left">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border-b p-3">19/03/2024</td>
									<td className="border-b p-3">Anestesiología</td>
									<td className="border-b p-3">13</td>
									<td className="border-b p-3">
										<Button
											className="bg-blue-600 text-white rounded-md px-4 py-2"
											onClick={() => {
												handleReservar();
											}}
										>
											Reservar
										</Button>
									</td>
								</tr>
								{/* Agregar más filas según sea necesario */}
							</tbody>
						</table>
					</CardContent>
				</Card>
			</main>
		</div>
	);
};

export default Dashboard;
