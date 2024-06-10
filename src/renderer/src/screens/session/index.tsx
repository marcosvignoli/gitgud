import Button from '@renderer/components/button'
import Score from '@renderer/components/score'
import { useSessionStore } from '@renderer/store'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// TODO: Make a navigation to the "Advice" screen inside of the "handleNavigation" function
// TODO: Improve the winrate, for some reason on each click it renders late
// TODO: When the user finish the session it should store the session somewhere
// TODO: Re do the styles here, currently they're awful
// TODO: Handle the subtitle conditional
// TODO: Handle the rendering of the check and X when the user press win or loss
// TODO: Add a "cancel session" button and make a new modal to ask if the user wants to cancel the session
// TODO: On session cancel don't store the session in the db

const Session = (): JSX.Element => {
  const { session, win, loss, addWin, addLoss, setWr, resetValues } = useSessionStore(
    (state) => state
  )
  const navigate = useNavigate()

  const handleWinrate = (): void => {
    // This divides the current wins by the total games that can be played
    const currentWr = (win / session) * 100
    if (win > 0 && loss === 0) {
      setWr(100)
    } else {
      // gets the current winrate without decimals and its converted to number to be displayed

      setWr(Number(currentWr.toFixed()))
    }
  }

  // This should be extended to navigate to the correspondent screen, probably it shpuld be the same
  // and set a param to handle the conditional
  const handleNavigation = (): void => {
    // TODO: add some delay to the navigation
    // TODO: after the end of the session it should be some animation and then navigate
    if (win + loss === session) {
      navigate('/advice')
    }
  }

  useEffect(() => {
    handleWinrate()
    handleNavigation()
  }, [win, loss])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-red-400 text-9xl font-bold pt-10">Session</h1>
      {/* Make this dynamic */}
      <h2 className="text-center text-red-400 text-xl ">Three Games</h2>
      {/* Visual state of the session */}
      <div className="flex gap-10">
        <span className="text-yellow-500 font-bold size-10">
          {'🚫'}
          {'-'}
          {'✅'}
        </span>
      </div>
      {/* Session Handlers */}
      <div className="flex gap-20">
        <Button
          onClick={() => {
            addWin()
            navigate('/mood')
          }}
          text={'WIN'}
          type={'primary'}
        />
        <Button
          onClick={() => {
            addLoss()
            navigate('/mood')
          }}
          text={'LOSS'}
          type={'primary'}
        />
      </div>
      {/* Sessions Labels */}
      <Score />
      <Link to={`/`} onClick={() => resetValues()}>
        Back
      </Link>
    </div>
  )
}

export default Session
