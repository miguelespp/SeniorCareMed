"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, Settings2 } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useCitaStore from "@/hooks/data/citas";

const MisCitas = () => {
	const {citas, setCitas} = useCitaStore();
	const [altoContraste, setAltoContraste] = useState(false);

	const handleEditar = (id: number) => {
        console.log(citas.length);
		alert(`Editar la cita con ID: ${id}`);
	};

	const handleSwitchChange = () => {
		setAltoContraste(!altoContraste);
	}

	const handleCancelar = (id: number) => {
		if (
			confirm(`¿Estás seguro de que deseas cancelar la cita con ID: ${id}?`)
		) {
			setCitas(citas.filter((cita) => cita.id !== id));
		}
	};

	return (
		<div className={`flex min-h-screen ${altoContraste ? 'bg-black text-white' : 'bg-blue-400'}`}>
			<aside className={`w-64 p-4 shadow-md ${altoContraste ? 'bg-gray-800' : 'bg-gray-200'}`}>
				<div className="text-center mb-8">
					<h1 className={`text-2xl font-bold ${altoContraste ? 'text-white' : 'text-gray-700'}`}>HMC</h1>
				</div>
				<nav className="space-y-4">
					<a
						href="/dashboard"
						className={`block p-2 rounded-md ${altoContraste ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-100'}`}
					>
						Inicio
					</a>
					<a
						href="/dashboard/reservar"
						className={`block p-2 rounded-md ${altoContraste ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-100'}`}
					>
						Citas
					</a>
					<a
						href="/dashboard/citas"
						className={`block p-2 rounded-md ${altoContraste ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-100'}`}
					>
						Mis Citas
					</a>
				</nav>
			</aside>
			{/* Contenido Principal */}
			<main className="flex-1 p-8">
            <Card className="mb-8 h-fit">
					<CardHeader className="py-4">
						<CardTitle className="flex justify-between">
							<p className="text-center content-center">
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
												<Switch id="name" checked={altoContraste} onCheckedChange={handleSwitchChange} />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="username" className="text-right">
													Tamaño del Texto
												</Label>
												<Select>
													<SelectTrigger className="w-36">
														<SelectValue placeholder="Seleccionar una opción" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="normal">Normal</SelectItem>
														<SelectItem value="grande">Grande</SelectItem>
														<SelectItem value="muygrande">
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

				<Card className="mb-8">
					
				</Card>
			</main>
		</div>
	);
};

export default MisCitas;
