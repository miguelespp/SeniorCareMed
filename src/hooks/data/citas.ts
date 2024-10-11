import { create } from "zustand";
import { persist } from "zustand/middleware";

type Cita = {
    id: number;
    fecha: string;
    especialidad: string;
    medico: string;
};

type CitaStore = {
    citas: Cita[];
    setCitas: (data: Cita[]) => void;
    add: (cita: Cita) => void;
};

const useCitaStore = create<CitaStore>()(
  persist (
    (set) => ({
      citas: [
        {
            id: 1,
            fecha: "19/03/2024",
            especialidad: "Anestesiología",
            medico: "Dra. Málaga",
        },
        {
            id: 2,
            fecha: "04/04/2024",
            especialidad: "Cardiología",
            medico: "Dr. Fernández",
        },
      ],
      
      setCitas: (data) => set({ citas: data }),
      add: (cita) => set((state) => ({ citas: [...state.citas, cita] })),
    }), {
      name: "citas-store",
    }
  )
);

export default useCitaStore;
export type { Cita };