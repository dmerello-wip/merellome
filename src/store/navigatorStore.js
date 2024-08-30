import { create } from 'zustand';

const useNavigatorStore = create(set => ({
    rotation: 0,
    increaseRotation: (val) => set((state) => {
        return ({ rotation: val });
    }),
}));

export { useNavigatorStore };

