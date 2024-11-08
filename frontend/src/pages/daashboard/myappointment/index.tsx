import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, PencilLine, Trash2 } from "lucide-react";
import useCitaStore from "@/store/data/citas";
import { useConfig } from "@/store/config";
import SheetAccess from "@/components/dashboard/AccessPanel";
import { speakTextCustom } from "@/lib/queueVoice";
import useMedicoStore from "@/store/data/medicos";

const MyAppointments = () => {
  // Datos simulados de citas reservadas por el usuario
  const { citas, setCitas } = useCitaStore();
  const { medicos } = useMedicoStore();
  const { config } = useConfig();

  const speakText = (text: string) => {
    if (config.auxVoz) {
      speakTextCustom(text);
    }
  };

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

        <Card className="mb-8">
          <CardHeader>
            <CardTitle
              className={`${config.fontSize === "Normal" ? "" : config.fontSize === "Grande" ? "text-3xl" : "text-4xl"}`}
            >
              Mis Citas Reservadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4">Fecha</th>
                  <th className="p-4">Especialidad</th>
                  <th className="p-4">Médico</th>
                  <th className="p-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {citas.length > 0 ? (
                  citas.map((cita) => (
                    <tr key={cita.id} className="border-b">
                      <td className="p-4">{cita.fecha.toDateString()}</td>
                      <td className="p-4">{cita.especialidad}</td>
                      <td className="p-4">
                        {medicos.find((medico) => medico.id === cita.medico)
                          ?.name || "no encontrado"}
                      </td>
                      <td className="p-4 space-x-2 flex justify-center">
                        <Button
                          onClick={() => handleEditar(cita.id)}
                          className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-2"
                        >
                          {/* <PencilIcon className="h-5 w-5 mr-1" /> */}
                          <PencilLine />
                          Editar
                        </Button>
                        <Button
                          onClick={() => handleCancelar(cita.id)}
                          className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2"
                        >
                          {/* <TrashIcon className="h-5 w-5 mr-1" /> */}
                          <Trash2 />
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

export default MyAppointments;
