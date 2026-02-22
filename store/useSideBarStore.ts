import {create} from 'zustand';

interface sideBarProps {
  isActive: boolean;
  isClose: () => void;
  toggleSidebar: () => void;
}


export const useSideBarStore = create<sideBarProps>((set) => ({
  isActive: false,
  isClose: () => set({isActive: false}),
  toggleSidebar: () => set((state) => ({isActive: !state.isActive})),
}))

