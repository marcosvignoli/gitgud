import { useNavigate } from 'react-router-dom'
import Button from '../button'
import { useSessionStore } from '@renderer/store'

// TODO: Improve the rendering of the buttons, add them to a map function
const SessionPicker = (): JSX.Element => {
  const { setSession } = useSessionStore((state) => state)
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-20 justify-center mt-4">
      <Button
        onClick={() => {
          setSession(3)
          navigate('/session')
        }}
        text={'Three Games'}
        type={'primary'}
      />
      <Button
        onClick={() => {
          setSession(5)
          navigate('/session')
        }}
        text={'Five Games'}
        type={'primary'}
      />
      <Button
        onClick={() => {
          setSession(7)
          navigate('/session')
        }}
        text={'Seven Games'}
        type={'primary'}
      />
    </div>
  )
}

export default SessionPicker
