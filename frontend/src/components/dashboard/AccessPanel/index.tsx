import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useConfig } from "@/store/config";
import { speakTextCustom } from "@/lib/queueVoice";

const SheetAccess = () => {
  const { config, setFontSize, toggleAltoContraste, toggleAuxVoz } =
    useConfig();
  const handleSwitchChange = () => {
    toggleAltoContraste();
  };

  const handleSelectChange = (value: "Normal" | "Grande" | "Muy Grande") => {
    console.log(value);
    setFontSize(value);
  };

  const handleVozChange = () => {
    toggleAuxVoz();
  };

  const speakText = (text: string) => {
    if (config.auxVoz) {
      speakTextCustom(text);
    }
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="mr-2 bg-gray-200 hover:bg-gray-300 focus:outline-blue-500 border border-gray-400"
          >
            <Settings2 />
          </Button>
        </SheetTrigger>
        <SheetContent
          className={`p-6 rounded-lg shadow-lg ${
            config.altoContraste
              ? "bg-black text-white border border-gray-300"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <SheetTitle
            className={`text-lg font-bold mb-4 ${config.altoContraste ? "text-white" : "text-black"}`}
          >
            Configuración
          </SheetTitle>
          <div className="grid gap-6">
            {/* Alto Contraste */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="alto-contraste"
                className="text-right font-medium"
              >
                Alto contraste
              </Label>
              <Switch
                id="alto-contraste"
                checked={config.altoContraste}
                onCheckedChange={handleSwitchChange}
                className="focus:outline-blue-500"
              />
            </div>

            {/* Tamaño del Texto */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="font-size" className="text-right font-medium">
                Tamaño del Texto
              </Label>
              <Select
                value={config.fontSize}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-36 bg-gray-200 hover:bg-gray-300 focus:outline-blue-500 border border-gray-400 rounded-md">
                  <SelectValue placeholder="Seleccionar una opción" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-lg rounded-md">
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Grande">Grande</SelectItem>
                  <SelectItem value="Muy Grande">Muy Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Asistente de Voz */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="asistente-voz"
                className="text-right font-medium"
                onMouseEnter={() =>
                  speakText("Un asistente para navegar por la página")
                }
              >
                Asistente de Voz
              </Label>
              <Switch
                id="asistente-voz"
                checked={config.auxVoz}
                onCheckedChange={handleVozChange}
                className="focus:outline-blue-500"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SheetAccess;
