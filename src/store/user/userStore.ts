import { create } from 'zustand'

export interface Store {
  user: string | null
  userLogged: boolean
  userLogOut: boolean

  setUserStore: (value: string) => void
  setUserAlert: (value: boolean) => void
  setUserLogOut: (value: boolean) => void
}

export const UserStore = create<Store>((set) => ({
  user: null,
  userLogged: false,
  userLogOut: false,
  setUserStore: (value) => set(() => ({ user: value })),
  setUserAlert: (value) => set(() => ({ userLogged: value })),
  setUserLogOut: (value) => set(() => ({ userLogOut: value })),
}))
