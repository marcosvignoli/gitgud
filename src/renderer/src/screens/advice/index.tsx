import Button from '@renderer/components/button'
import Score from '@renderer/components/score'
import { useMoodStore, useSessionStore } from '@renderer/store'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Advice = (): JSX.Element => {
  const { wr, resetValues } = useSessionStore((state) => state)
  const mood = useMoodStore((state) => state.mood)
  const [title, setTitle] = useState('Title')
  const [subtitle, setSubtitle] = useState('Subtitle')

  useEffect(() => {
    switch (true) {
      case wr > 61:
        setTitle(mood < 0 ? 'Warning' : 'Congrats')
        setSubtitle(
          mood < 0
            ? 'You have winned the session but you are in a bad mood'
            : 'You have winned the session'
        )
        break
      case wr > 35:
        setTitle('Warning')
        setSubtitle(
          mood < 0
            ? "You're in a bad mood, you should stop"
            : 'You can keep playing, but take care, you porcentaje wasnt really good'
        )
        break
      case wr <= 35:
        setTitle('Rest')
        setSubtitle('Consider taking a rest, you’ve lost this session')
        break
      default:
        break
    }
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {/* result visual images */}
      <Score />
      {/* action buttons */}
      <Link to="/">
        <Button onClick={() => resetValues()} text="Home" type="primary" />
      </Link>
    </div>
  )
}

export default Advice
