import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, Settings2 } from "lucide-react";
import useCitaStore from "@/store/data/citas";
import { useConfig } from "@/store/config";
import SheetAccess from "@/components/dashboard/AccessPanel";

const DashboardIndex = () => {
  const { citas } = useCitaStore();
  const { config } = useConfig();

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
          <CardContent>
            <Card className="w-80 m-4">
              <CardHeader>
                <CardTitle className="text-center">Citas Pendientes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-4xl">{citas.length}</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardIndex;
