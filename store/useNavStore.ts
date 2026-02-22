import {create} from 'zustand';


interface navStoreState {
  isOpen: boolean;
  isClose: () => void;
  toggle: () => void;
}

export const useNavStore = create<navStoreState>((set) => {
  return {
    isOpen: false,
    isClose: () => set({isOpen: false}),
    toggle: () => set((state) => ({isOpen: !state.isOpen }))
  }
})
