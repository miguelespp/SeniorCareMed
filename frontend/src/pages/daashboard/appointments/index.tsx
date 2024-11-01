import { useState } from "react";
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
import { CircleUser } from "lucide-react";

import useCitaStore from "@/store/data/citas";
import { useConfig } from "@/store/config";
import SheetAccess from "@/components/dashboard/AccessPanel";

const Appointments = () => {
  const [especialidad, setEspecialidad] = useState<string>("");
  const [medico, setMedico] = useState<string>("");

  const { citas, setCitas } = useCitaStore();
  const { config } = useConfig();

  let lastExecutionTime = 0;
  const throttleInterval = 2000;

  const speakText = (text: string) => {
    const now = Date.now();
    if (config.auxVoz && now - lastExecutionTime > throttleInterval) {
      lastExecutionTime = now;
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(text);
      const voices = synth.getVoices();

      utterThis.voice =
        voices.find((voice) => voice.lang === "es-PE") ||
        voices.find((voice) => voice.lang.startsWith("es")) ||
        voices[0];

      utterThis.rate = 1;
      utterThis.pitch = 1;
      utterThis.volume = 1;

      synth.speak(utterThis);
    }
  };

  const handleReservar = () => {
    console.log(citas.length);
    if (especialidad === "" || medico === "") {
      alert("Debe seleccionar una especialidad y un médico");
      return;
    }
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

  return (
    <div
      className={`flex min-h-screen ${config.altoContraste ? "bg-black text-white" : "bg-blue-400"}`}
    >
      {/* Menú Lateral */}

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
        <Card className="mb-8 h-fit">
          <CardHeader className="py-4">
            <CardTitle
              className="flex justify-between"
              onMouseEnter={() => speakText("hola causa")}
            >
              <p
                className={`text-center content-center ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
              >
                Panel de Reserva de Citas Médicas
              </p>
              <div className="flex">
                <SheetAccess />
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
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="medico"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Médicos:
                </label>
                <Select value={medico} onValueChange={(e) => setMedico(e)}>
                  <SelectTrigger className="w-fit self-center">
                    <SelectValue
                      placeholder={medico || "Seleccionar una opción"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dr. Juan Pérez">
                      Dr. Juan Pérez
                    </SelectItem>
                    <SelectItem value="Dra. Ana Gómez">
                      Dra. Ana Gómez
                    </SelectItem>
                    <SelectItem value="Dr. Carlos Sánchez">
                      Dr. Carlos Sánchez
                    </SelectItem>
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
                  <th className="border-b-2 p-3">Fecha</th>
                  <th className="border-b-2 p-3">Servicio</th>
                  <th className="border-b-2 p-3">Cupos</th>
                  <th className="border-b-2 p-3">Acciones</th>
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

export default Appointments;
