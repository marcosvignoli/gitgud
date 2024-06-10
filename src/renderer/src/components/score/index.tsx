import { useSessionStore } from '@renderer/store'

const Score = (): JSX.Element => {
  const { win, loss, wr } = useSessionStore((state) => state)
  // all of this states should be in a context
  return (
    <div>
      <div className="flex gap-10">
        <span className="text-red-400 size-10">WIN</span>
        <span className="text-red-400 size-10">WR</span>
        <span className="text-red-400 size-10">LOSS</span>
      </div>
      {/* Current Results of the session */}
      <div className="flex gap-10">
        <span className="text-red-400 size-10">{win}</span>
        <span className="text-red-400 size-10">{wr}%</span>
        <span className="text-red-400 size-10">{loss}</span>
      </div>
    </div>
  )
}

export default Score
