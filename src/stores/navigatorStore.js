import { create } from 'zustand'

const useNavigatorStore = create((set) => ({
    section: 0,
    tip: null,
    setSection: (id) => set((state) => {
        /* reset tip to close it every section change (scroll update in navslide)*/
        state.tip = null
        return { section: id }
    }),
    setTip: (id) => set((state) => {
        return { tip: id }
    })
}))

export default useNavigatorStore;
