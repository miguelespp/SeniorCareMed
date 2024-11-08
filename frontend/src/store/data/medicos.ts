import { create } from "zustand";

type Medico = {
  id: number;
  name: string;
  especialidad: string;
  diasLaborales: number[];
  horaInicio: number;
  horaFin: number;
};

type MedicoStore = {
  medicos: Medico[];
  setMedicos: (data: Medico[]) => void;
  addMedicos: (medico: Medico) => void;
};

const useMedicoStore = create<MedicoStore>()((set) => ({
  medicos: [
    {
      id: 1,
      name: "Dra. Málaga",
      especialidad: "Anestesiología",
      diasLaborales: [1, 2, 3, 4, 5],
      horaInicio: 8,
      horaFin: 16,
    },
    {
      id: 2,
      name: "Dr. Fernández",
      especialidad: "Cardiología",
      diasLaborales: [1, 2, 4, 5],
      horaInicio: 8,
      horaFin: 16,
    },
    {
      id: 3,
      name: "Dr. Pérez",
      especialidad: "Pediatría",
      diasLaborales: [1, 2, 4, 5],
      horaInicio: 9,
      horaFin: 15,
    },
    {
      id: 4,
      name: "Dra. Sánchez",
      especialidad: "Traumatismo",
      diasLaborales: [2, 3, 5],
      horaInicio: 10,
      horaFin: 17,
    },
    {
      id: 5,
      name: "Dr. Rivera",
      especialidad: "Gastroenterología",
      diasLaborales: [1, 2, 3, 4],
      horaInicio: 8,
      horaFin: 14,
    },
    {
      id: 5,
      name: "Dra. Fernández",
      especialidad: "Pediatría",
      diasLaborales: [1, 2, 3, 4, 5],
      horaInicio: 9,
      horaFin: 16,
    },
    {
      id: 6,
      name: "Dr. Ramírez",
      especialidad: "Traumatismo",
      diasLaborales: [1, 3, 4, 5],
      horaInicio: 8,
      horaFin: 14,
    },
    {
      id: 7,
      name: "Dra. Gómez",
      especialidad: "Gastroenterología",
      diasLaborales: [2, 3, 4],
      horaInicio: 10,
      horaFin: 18,
    },
    {
      id: 8,
      name: "Dr. Castillo",
      especialidad: "Pediatría",
      diasLaborales: [1, 2, 4, 5],
      horaInicio: 8,
      horaFin: 15,
    },
    {
      id: 9,
      name: "Dra. Morales",
      especialidad: "Traumatismo",
      diasLaborales: [2, 3, 5],
      horaInicio: 11,
      horaFin: 19,
    },
    {
      id: 10,
      name: "Dr. Soto",
      especialidad: "Gastroenterología",
      diasLaborales: [1, 3, 4, 5],
      horaInicio: 7,
      horaFin: 13,
    },
    {
      id: 11,
      name: "Dra. Vargas",
      especialidad: "Pediatría",
      diasLaborales: [1, 2, 3, 4, 5],
      horaInicio: 9,
      horaFin: 17,
    },
    {
      id: 12,
      name: "Dr. López",
      especialidad: "Traumatismo",
      diasLaborales: [2, 4, 5],
      horaInicio: 8,
      horaFin: 15,
    },
    {
      id: 13,
      name: "Dra. Torres",
      especialidad: "Gastroenterología",
      diasLaborales: [1, 2, 3, 4],
      horaInicio: 10,
      horaFin: 14,
    },
    {
      id: 14,
      name: "Dr. Jiménez",
      especialidad: "Pediatría",
      diasLaborales: [1, 3, 5],
      horaInicio: 8,
      horaFin: 13,
    },
    {
      id: 15,
      name: "Dra. Rojas",
      especialidad: "Traumatismo",
      diasLaborales: [2, 3, 4, 5],
      horaInicio: 9,
      horaFin: 17,
    },
    {
      id: 16,
      name: "Dr. Méndez",
      especialidad: "Gastroenterología",
      diasLaborales: [1, 2, 4],
      horaInicio: 8,
      horaFin: 14,
    },
    {
      id: 17,
      name: "Dra. Martínez",
      especialidad: "Pediatría",
      diasLaborales: [1, 2, 3, 5],
      horaInicio: 10,
      horaFin: 18,
    },
    {
      id: 18,
      name: "Dr. Peña",
      especialidad: "Traumatismo",
      diasLaborales: [1, 3, 4],
      horaInicio: 7,
      horaFin: 12,
    },
    {
      id: 19,
      name: "Dra. Castillo",
      especialidad: "Gastroenterología",
      diasLaborales: [2, 3, 5],
      horaInicio: 9,
      horaFin: 16,
    },
  ],
  setMedicos: (data) => set({ medicos: data }),
  addMedicos: (medico) =>
    set((state) => ({ medicos: [...state.medicos, medico] })),
}));

export default useMedicoStore;
export type { Medico };
