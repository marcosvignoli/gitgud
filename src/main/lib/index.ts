import fs from 'node:fs/promises'

const stats = [
  {
    session: 3,
    win: 1,
    loss: 2,
    wr: 33,
    date: new Date()
  },
  {
    session: 5,
    win: 3,
    loss: 2,
    wr: 60,
    date: new Date()
  }
]

export const obtainStats = async (): Promise<void> => {
  const stats = await fs.readFile('./stats.json', 'utf-8')
  const parsedStats = JSON.parse(stats)
  return parsedStats
}

export const saveStats = async (): Promise<void> => {
  await fs.writeFile('./stats.json', JSON.stringify(stats))
}
