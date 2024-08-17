import { create } from "zustand";

export const useStore = create((set) => ({
  files: [],
  filteredFiles: [],
  courseworkTypes: ["IA Example", "EE Example", "IO Example", "TOK Example"],

  addFile: (file) => set((state) => ({ files: [...state.files, file] })),

  removeFile: (file) => set((state) => ({
    files: state.files.filter((f) => f !== file),
  })),

  setFiles: (files) => set(() => ({ files })),

  filterFilesByType: (type) =>
    set((state) => ({
      filteredFiles:
        type === "All"
          ? state.files
          : state.files.filter((file) => file.courseworkDetails.courseworkType.toLowerCase() === type.toLowerCase()),
    })),
}));
