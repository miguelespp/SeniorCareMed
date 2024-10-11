// zustand for load configurations for the app
/**
 * Texto de Tamaño Ajustable: Muchos adultos mayores tienen dificultades para leer textos pequeños. Necesitan la opción de aumentar el tamaño del texto para poder leer la información de manera clara.
	Contraste Alto y Colores Adecuados: Las interfaces deben tener un alto contraste y utilizar colores que sean fácilmente distinguibles para personas con baja visión o con ciertas condiciones como el daltonismo.
	Iconografía Intuitiva y Visualmente Clara: Los iconos deben ser grandes y comprensibles a primera vista, con significados fácilmente reconocibles para evitar confusión.
    -Necesidades de Accesibilidad Motriz
	Elementos de Interfaz de Gran Tamaño: Los botones y elementos clicables deben ser lo suficientemente grandes para que puedan ser presionados sin dificultad por personas con problemas de motricidad fina o temblores.
	Interacciones Simplificadas: Minimizar el número de interacciones necesarias para completar una acción (por ejemplo, realizar menos pasos para agendar una cita) puede ayudar a aquellos con limitaciones físicas a navegar más fácilmente.

 */

import {create} from 'zustand';
import { persist } from 'zustand/middleware'

type config = {
    fontSize: "Normal" | "Grande" | "Muy Grande";
    altoContraste: boolean;
    auxVoz: boolean;
}

type configActions = {
    config: config;
    setConfig: (config: config) => void;
    setFontSize: (fontSize: "Normal" | "Grande" | "Muy Grande") => void;
    toggleAltoContraste: () => void;
    toggleAuxVoz: () => void;
}



export const useConfig = create<configActions>()(
    persist(
        (set) => ({
            config: {
                fontSize: "Normal",
                altoContraste: false,
                auxVoz: false
            },
            setConfig: (config) => set({config}),
            setFontSize: (fontSize) => set((state) => ({config: {...state.config, fontSize}})),
            toggleAltoContraste: () => set((state) => ({config: {...state.config, altoContraste: !state.config.altoContraste}})),
            toggleAuxVoz: () => set((state) => ({config: {...state.config, auxVoz: !state.config.auxVoz}}))
        }), {
            name: "config-storage"
        }
    )
)