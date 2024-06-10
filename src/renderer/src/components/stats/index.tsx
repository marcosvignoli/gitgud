import { useEffect } from 'react'

const Stats = (): JSX.Element => {
  useEffect(() => {
    const getStats = async (): Promise<void> => {
      const result = await window.stats.getStats()
      console.log(result)
    }
    getStats()
  }, [])

  return (
    <div>
      <h3 className="text-center">No Stats Yet</h3>
      {/* {stats} */}
    </div>
  )
}

export default Stats
