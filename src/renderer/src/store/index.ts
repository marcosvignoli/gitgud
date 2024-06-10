import { create } from 'zustand'

// Session related store
interface SessionStoreProps {
  session: number
  win: number
  loss: number
  wr: number
  addWin: () => void
  addLoss: () => void
  setWr: (value: number) => void
  resetValues: () => void
  setSession: (value: number) => void
}

export const useSessionStore = create<SessionStoreProps>()((set) => ({
  session: 3,
  win: 0,
  loss: 0,
  wr: 0,
  setSession: (value: number): void => set(() => ({ session: value })),
  addWin: (): void => set((state) => ({ win: state.win + 1 })),
  addLoss: (): void => set((state) => ({ loss: state.loss + 1 })),
  setWr: (value: number): void => set(() => ({ wr: value })),
  resetValues: (): void => set(() => ({ win: 0, loss: 0, wr: 0 }))
}))

// Mood related store
interface MoodStoreProps {
  mood: number
  sumMood: (value: number) => void
  discountMood: (value: number) => void
}

export const useMoodStore = create<MoodStoreProps>()((set) => ({
  mood: 0,
  sumMood: (value: number): void => set((state) => ({ mood: state.mood + value })),
  discountMood: (value: number): void => set((state) => ({ mood: state.mood - value }))
}))
