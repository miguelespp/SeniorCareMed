"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CircleUser, Settings2 } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import useCitaStore from "@/hooks/data/citas";
import { useConfig } from "@/hooks/config";

const MisCitas = () => {
	// Datos simulados de citas reservadas por el usuario
	const { citas, setCitas } = useCitaStore();
	const {config, setFontSize, toggleAltoContraste, toggleAuxVoz} = useConfig();

	const handleEditar = (id: number) => {
		console.log(citas.length);
		alert(`Editar la cita con ID: ${id}`);
	};

	const handleCancelar = (id: number) => {
		if (
			confirm(`¿Estás seguro de que deseas cancelar la cita con ID: ${id}?`)
		) {
			setCitas(citas.filter((cita) => cita.id !== id));
		}
	};

	const handleSwitchChange = () => {
		toggleAltoContraste();
	};
	const handleSelectChange = (value: "Normal" | "Grande" | "Muy Grande") => {
		setFontSize(value);
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
							<p className={`text-center content-center ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}>
								Panel de Mis Citas Médicas
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
														<SelectItem value="Muy Grande">
															Muy Grande
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label htmlFor="username" className="text-right">
													Asistente de Voz
												</Label>
												<Switch id="username" />
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
						>Mis Citas Reservadas</CardTitle>
					</CardHeader>
					<CardContent>
						<table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
							<thead>
								<tr className="bg-blue-600 text-white">
									<th className="p-4 text-left">Fecha</th>
									<th className="p-4 text-left">Especialidad</th>
									<th className="p-4 text-left">Médico</th>
									<th className="p-4 text-left">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{citas.length > 0 ? (
									citas.map((cita) => (
										<tr key={cita.id} className="border-b">
											<td className="p-4">{cita.fecha}</td>
											<td className="p-4">{cita.especialidad}</td>
											<td className="p-4">{cita.medico}</td>
											<td className="p-4 space-x-2 flex">
												<Button
													onClick={() => handleEditar(cita.id)}
													className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-2"
												>
													<PencilIcon className="h-5 w-5 mr-1" />
													Editar
												</Button>
												<Button
													onClick={() => handleCancelar(cita.id)}
													className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2"
												>
													<TrashIcon className="h-5 w-5 mr-1" />
													Cancelar
												</Button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={4} className="p-4 text-center text-gray-600">
											No tienes citas reservadas.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</CardContent>
				</Card>
			</main>
		</div>
	);
};

export default MisCitas;
