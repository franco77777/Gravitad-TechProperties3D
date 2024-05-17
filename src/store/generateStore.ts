import { create } from 'zustand'

export interface Store {
  category: string
  IAResponse: boolean
  selectCard: string
  roomImage: string
  loader: boolean
  setCategory: (value: string) => void
  setIAResponse: (value: boolean) => void
  setSelectCard: (value: string) => void
  setRoomImage: (value: string) => void
  setLoader: (value: boolean) => void
}

export const GenerateStore = create<Store>((set) => ({
  category: '',
  IAResponse: false,
  selectCard: '',
  roomImage: '',
  loader: false,
  setCategory: (value) => set(() => ({ category: value })),
  setIAResponse: (value) => set(() => ({ IAResponse: value })),
  setSelectCard: (value) => set(() => ({ selectCard: value })),
  setRoomImage: (value) => set(() => ({ roomImage: value })),
  setLoader: (value) => set(() => ({ loader: value })),
}))
