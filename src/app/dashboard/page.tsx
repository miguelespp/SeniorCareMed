"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
	const { citas, setCitas } = useCitaStore();
	const { config, setFontSize, toggleAltoContraste } = useConfig();

	const handleEditar = (id: number) => {
		console.log(citas.length);
		alert(`Editar la cita con ID: ${id}`);
	};

	const handleSwitchChange = () => {
		console.log("1", config.altoContraste);
		toggleAltoContraste();
		console.log("2", config.altoContraste);
	};
	const handleSelectChange = (value: "Normal" | "Grande" | "Muy Grande") => {
		console.log(config.fontSize);
		setFontSize(value);
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
										</div>
									</SheetContent>
								</Sheet>
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

export default MisCitas;
