import { create } from 'zustand';

interface DumbState {
  dumbText: string;
}

export const useDumbStore = create<DumbState>(() => ({
  dumbText: 'Hallo from Zustand',
}));
