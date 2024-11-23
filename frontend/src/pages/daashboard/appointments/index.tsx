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
import {
  Calendar1,
  CircleUser,
  Clock9,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import useCitaStore from "@/store/data/citas";
import { useConfig } from "@/store/config";
import SheetAccess from "@/components/dashboard/AccessPanel";
import { Calendar } from "@/components/ui/calendar";
import useMedicoStore from "@/store/data/medicos";
import type { Medico } from "@/store/data/medicos";
import { useToast } from "@/hooks/use-toast";
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
      className={`flex min-h-screen ${
        config.altoContraste
          ? "bg-black text-white border border-gray-300"
          : "bg-blue-400"
      }`}
    >
      {/* Menú Lateral */}

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
        <Card
          className={`mb-8 h-fit ${config.altoContraste ? "" : ""} rounded-lg shadow-lg`}
        >
          <CardHeader className="py-4">
            <CardTitle className="flex justify-between">
              <h2
                className={`text-center content-center ${
                  config.fontSize === "Normal"
                    ? "text-lg"
                    : config.fontSize === "Grande"
                      ? "text-3xl"
                      : "text-4xl"
                }`}
                onMouseEnter={() =>
                  speak("Bienvenido al panel de reserva de citas médicas")
                }
              >
                Panel de Reserva de Citas Médicas
              </h2>
              <div className="flex">
                <SheetAccess />
                <CircleUser className="size-8" />
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="mb-8 bg-gray-100 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle
              className={`text-gray-800 ${
                config.fontSize === "Normal"
                  ? "text-xl"
                  : config.fontSize === "Grande"
                    ? "text-3xl"
                    : "text-4xl"
              }`}
            >
              Programación Médica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`mb-4 text-gray-800 ${
                config.fontSize === "Normal"
                  ? "text-base"
                  : config.fontSize === "Grande"
                    ? "text-2xl"
                    : "text-xl"
              }`}
            >
              Con el objetivo de brindar una mejor atención en consulta externa,
              el sistema solo permitirá reservar una cita por día.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="especialidad"
                  className={`flex justify-center space-x-2 mb-2 font-medium text-gray-900 ${
                    config.fontSize === "Normal"
                      ? "text-base"
                      : config.fontSize === "Grande"
                        ? "text-2xl"
                        : "text-xl"
                  }`}
                >
                  <span>Especialidad</span> <GraduationCap />
                </label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-blue-700 hover:bg-blue-800 text-white"
                    >
                      {especialidad || "Seleccionar una opción"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={`max-w-[40rem] ${config.altoContraste ? "bg-gray-800" : "bg-gray-200"} `}
                  >
                    <DialogHeader>
                      <DialogTitle
                        className={`${config.altoContraste ? "text-gray-200" : "text-gray-600"} `}
                      >
                        Seleccionar Especialidad
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-wrap justify-around mt-2 space-y-2">
                      <Button
                        className="size-fit p-0 bg-white hover:bg-gray-100"
                        onClick={() => setEspecialidad("Gastroenterología")}
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg flex-1 bg-red-500 hover:bg-red-600"
                          onMouseEnter={() => speak("Gastroenterología")}
                        >
                          <CardHeader className="mb-4 text-center">
                            <CardTitle className="text-2xl font-bold text-white">
                              Gastroenterología
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Button>
                      <Button
                        className="size-fit p-0 bg-white hover:bg-gray-100"
                        onClick={() => setEspecialidad("Cardiología")}
                        aria-label="Cardiología"
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 flex-1"
                          onMouseEnter={() => speak("Cardiología")}
                        >
                          <CardHeader className="mb-4 text-center">
                            <CardTitle className="text-2xl font-bold text-white">
                              Cardiología
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Button>
                      <Button
                        className="size-fit p-0 bg-white"
                        onClick={() => setEspecialidad("Pediatría")}
                        aria-label="Pediatría"
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-gray-500 hover:bg-gray-600 flex-1"
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
                        aria-label="Traumatismo"
                      >
                        <Card
                          className="w-60 max-w-md p-2 shadow-lg rounded-lg bg-green-400 hover:bg-green-600 flex-1"
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
                  className="flex space-x-2 justify-center mb-2 font-medium text-gray-900"
                >
                  <span>Médicos</span> <Stethoscope />
                </label>
                <Select onValueChange={HandleMedicoChange}>
                  <SelectTrigger
                    className="w-fit self-center bg-gray-100 border border-gray-400 focus:outline-blue-500 hover:bg-gray-200"
                    onMouseEnter={() => speak("Seleccione un doctor")}
                    aria-label="Seleccione un doctor"
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
        <Card className="bg-gray-100 rounded-lg shadow-md">
          <CardContent className="flex justify-around">
            <div className="mt-4">
              <p className="flex space-x-2 justify-center text-gray-800 font-medium">
                <span>Horarios Disponibles</span> <Calendar1 />
              </p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                fromDate={new Date()}
                className={`fit-content w-fit border border-gray-300 mt-4 rounded-xl ${config.altoContraste ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}
                classNames={
                  config.altoContraste
                    ? {
                        day: "h-10 w-10 p-0 font-normal",
                        day_selected: "bg-gray-300 text-white",
                        day_today: "border border-blue-500 text-white",
                        day_outside: "text-gray-700",
                        day_disabled: "text-gray-500 cursor-not-allowed",
                        nav_button:
                          "text-gray-300 hover:bg-gray-200 focus:outline-blue-500",
                        nav_icon: "h-5 w-5",

                        month: "mt-2",
                        weeknumber: "text-gray-900",
                        head_cell:
                          "flex text-blue-800 text-md justify-center m-auto",
                        day_range_middle: "bg-blue-100",
                      }
                    : {}
                }
                disabled={(date) => {
                  return !medico?.diasLaborales.includes(date.getDay());
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="hora"
                className="block mb-2 font-medium text-gray-800 text-left text-xl"
              >
                <Clock9 /> {hora} : 00
              </label>
              <Slider
                value={hora}
                onValueChange={setHora}
                min={medico?.horaInicio || 8}
                max={medico?.horaFin || 18}
                step={1}
                disabled={!medico}
                className="mt-4 w-64"
              />
              <label
                htmlFor="hora"
                className="block mt-2 font-medium text-left text-red-700 text-sm"
              >
                *Llegar 15 minutos antes de preferencia
              </label>
            </div>
          </CardContent>
        </Card>
        <Button
          className="bg-blue-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-700"
          onClick={() => {
            handleReservar();
            toast({
              title: "Cita reservada",
              description: "Consulta programada correctamente.",
            });
          }}
          aria-label="Reservar"
        >
          Reservar
        </Button>
      </main>
    </div>
  );
};

export default Appointments;
