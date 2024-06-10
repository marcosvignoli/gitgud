import Button from '@renderer/components/button'
import { useMoodStore } from '@renderer/store'
import { useNavigate } from 'react-router-dom'

const Mood = (): JSX.Element => {
  const { sumMood, discountMood } = useMoodStore((state) => state)
  const navigate = useNavigate()
  return (
    <div>
      <h1>Mood Tracker</h1>
      <h2>Rate your mood after the game</h2>
      {/* visual score */}
      <div className="flex gap-20 justify-center mt-4">
        <Button
          onClick={(): void => {
            sumMood(2)
            navigate('/session')
          }}
          text={'Happy'}
          type={'primary'}
        />
        <Button
          onClick={(): void => {
            sumMood(1)
            navigate('/session')
          }}
          text={'Normal'}
          type={'primary'}
        />
        <Button
          onClick={(): void => {
            discountMood(1)
            navigate('/session')
          }}
          text={'Stressed'}
          type={'primary'}
        />
        <Button
          onClick={(): void => {
            discountMood(2)
            navigate('/session')
          }}
          text={'Tilt'}
          type={'primary'}
        />
      </div>
    </div>
  )
}

export default Mood
