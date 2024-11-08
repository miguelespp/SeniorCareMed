import { create } from "zustand";

enum Turnos {}

type Cita = {
  id: number;
  fecha: Date;
  especialidad: string;
  medico: number;
  hora: number;
};

type CitaStore = {
  citas: Cita[];
  setCitas: (data: Cita[]) => void;
  add: (cita: Cita) => void;
};

const useCitaStore = create<CitaStore>()((set) => ({
  citas: [],

  setCitas: (data) => set({ citas: data }),
  add: (cita) => set((state) => ({ citas: [...state.citas, cita] })),
}));

export default useCitaStore;
export type { Cita };
