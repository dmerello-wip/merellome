import { create } from 'zustand'

const useNavigatorStore = create((set) => ({
    section: 0,
    tip: null,
    setSection: (id) => set((state) => {
        return { section: id }
    }),
    setTip: (id) => set((state) => {
        return { tip: id }
    })
}))

export default useNavigatorStore;
