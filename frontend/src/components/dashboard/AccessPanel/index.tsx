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
              <Select
                value={config.fontSize}
                onValueChange={handleSelectChange}
              >
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
    </>
  );
};

export default SheetAccess;
