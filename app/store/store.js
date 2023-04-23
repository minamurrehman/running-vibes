import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useUserStore = create(
    persist(
        (set,get) =>({
            user: {},
            loginUser: (data) =>set({user: data}),
            logoutUser: () => set({user: {}})
        }),{
            name: "user",
        }
    )
)

export default useUserStore