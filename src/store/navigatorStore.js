import { create } from 'zustand';

const useNavigatorStore = create(set => ({
    mainObjRotation: Math.PI,
    setMainObjRotation: (val) => set((state) => {
        return ({ mainObjRotation: val });
    }),
}));

export { useNavigatorStore };

