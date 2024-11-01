import { create } from "zustand";

type config = {
	fontSize: "Normal" | "Grande" | "Muy Grande";
	altoContraste: boolean;
	auxVoz: boolean;
};

type configActions = {
	config: config;
	setConfig: (config: config) => void;
	setFontSize: (fontSize: "Normal" | "Grande" | "Muy Grande") => void;
	toggleAltoContraste: () => void;
	toggleAuxVoz: () => void;
};

export const useConfig = create<configActions>()((set) => ({
	config: {
		fontSize: "Normal",
		altoContraste: false,
		auxVoz: false,
	},
	setConfig: (config) => set({ config }),
	setFontSize: (fontSize) =>
		set((state) => ({ config: { ...state.config, fontSize } })),
	toggleAltoContraste: () =>
		set((state) => ({
			config: { ...state.config, altoContraste: !state.config.altoContraste },
		})),
	toggleAuxVoz: () =>
		set((state) => ({
			config: { ...state.config, auxVoz: !state.config.auxVoz },
		})),
}));
