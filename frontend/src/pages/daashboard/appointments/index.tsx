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
import { Calendar } from "@/components/ui/calendar";
import useMedicoStore from "@/store/data/medicos";
import type { Medico } from "@/store/data/medicos";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Slider } from "@/components/ui/slider";
import { speakTextCustom } from "@/lib/queueVoice";

const Appointments = () => {
  const [especialidad, setEspecialidad] = useState<string>("");
  const [medico, setMedico] = useState<Medico | null>(null);

  const { citas, setCitas } = useCitaStore();
  const { medicos } = useMedicoStore();
  const { config } = useConfig();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const [hora, setHora] = useState<number[]>([0]);

  const speak = (text: string) => {
    if (config.auxVoz) {
      speakTextCustom(text);
    }
  };

  const handleReservar = () => {
    console.log(citas.length);
    if (especialidad === "" || medico === null || date === undefined) {
      alert("Debe seleccionar una especialidad y un médico");
      return;
    }
    setCitas([
      ...citas,
      {
        id: citas.length + 1,
        fecha: date,
        especialidad: especialidad,
        medico: medico.id,
        hora: hora[0],
      },
    ]);

    // alert("Cita reservada correctamente");
  };

  const HandleMedicoChange = (medicoId: string) => {
    const selectedMedico = medicos.find(
      (m) => m.id === Number.parseInt(medicoId),
    );
    if (selectedMedico) {
      setMedico(selectedMedico);
    }
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
            <CardTitle className="flex justify-between">
              <p
                className={`text-center content-center ${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
                onMouseEnter={() =>
                  speak("Bienvenido al panel de reserva de citas médicas")
                }
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
                        onClick={() => setEspecialidad("Gastroenterología")}
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg flex-1 bg-red-400"
                          onMouseEnter={() => speak("Gastroenterología")}
                        >
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
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-blue-500 flex-1"
                          onMouseEnter={() => speak("Cardiología")}
                        >
                          <CardHeader className="mb-4 text-center">
                            <CardTitle className="text-2xl font-bold text-gray-800">
                              Cardiologia
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Button>
                      <Button
                        className="size-fit p-0 bg-white"
                        onClick={() => setEspecialidad("Pediatría")}
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-gray-500 flex-1"
                          onMouseEnter={() => speak("Pediatría")}
                        >
                          <CardHeader className="mb-4 text-center">
                            <CardTitle className="text-2xl font-bold text-gray-800">
                              Pediatría
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Button>
                      <Button
                        className="size-fit p-0 bg-white"
                        onClick={() => setEspecialidad("Traumatismo")}
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-green-400 flex-1"
                          onMouseEnter={() => speak("Traumatismo")}
                        >
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
                <Select onValueChange={HandleMedicoChange}>
                  <SelectTrigger
                    className="w-fit self-center"
                    onMouseEnter={() => speak("Seleccione un doctor")}
                  >
                    <SelectValue
                      placeholder={medico?.name || "Seleccionar una opción"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {medicos
                      .filter((medico) => medico.especialidad === especialidad)
                      .map((medico) => (
                        <SelectItem
                          key={medico.id}
                          value={medico.id.toString()}
                        >
                          {medico.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-around">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              fromDate={new Date()}
              className="fit-content w-60"
              disabled={(date) => {
                return !medico?.diasLaborales.includes(date.getDay());
              }}
            />
            <div className="flex flex-col justify-center">
              {/* poner un mensaje que indique que deben llegar 15 minutos antes de preferencia  */}

              <label
                htmlFor="hora"
                className="block mb-2 font-medium text-gray-700 text-left text-xl"
              >
                Hora: {hora} : 00
              </label>

              <Slider
                value={hora}
                onValueChange={setHora}
                min={medico?.horaInicio || 8}
                max={medico?.horaFin || 18}
                step={1}
                disabled={!medico}
                className="mt-4 w-32"
              />
              <label
                htmlFor="hora"
                className="block mt-2 font-medium text-left text-red-400 text-sm"
              >
                *LLegar 15 minutos antes de preferencia
              </label>
            </div>
          </CardContent>
        </Card>
        <Button
          className="bg-blue-600 text-white rounded-md px-4 py-2 mt-4"
          onClick={() => {
            handleReservar();
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          Reservar
        </Button>
      </main>
    </div>
  );
};

export default Appointments;
