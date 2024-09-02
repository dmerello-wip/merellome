import { create } from 'zustand';

const useNavigatorStore = create(set => ({
    rotation: Math.PI,
    increaseRotation: (val) => set((state) => {
        return ({ rotation: val });
    }),
}));

export { useNavigatorStore };

