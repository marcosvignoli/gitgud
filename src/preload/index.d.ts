import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    stats: {
      getStats: () => void
      setStats: () => void
    }
  }
}
