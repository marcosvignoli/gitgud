import { useState } from 'react'
import SessionPicker from '@renderer/components/sessionPicker'
import Stats from '@renderer/components/stats'
import ContentSelector from '@renderer/components/contentSelector'

const Home = (): JSX.Element => {
  const [show, setShow] = useState('session-picker')

  return (
    <div className="">
      <h1 className="text-center text-red-400 text-9xl font-bold pt-10">GitGud</h1>
      <h2 className="text-center text-red-400 text-xl ">Take it to the next level</h2>
      {/* Select Content */}
      <div className="flex justify-center ">
        <ContentSelector changeMode={(value) => setShow(value)} />
      </div>
      <main className="h-[50vh]">{show === 'session-picker' ? <SessionPicker /> : <Stats />}</main>
    </div>
  )
}

export default Home
