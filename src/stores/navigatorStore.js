import { create } from 'zustand'

const useNavigatorStore = create((set) => ({
    section: 'slide-0',
    setSection: (id) => set((state) => {
        // console.log(id)
        return { section: id }
    })
}))

export default useNavigatorStore;
