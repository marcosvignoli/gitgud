import Button from '../button'

interface ContentSelectorProps {
  changeMode: (value: string) => void
}

const ContentSelector = ({ changeMode }: ContentSelectorProps): JSX.Element => {
  // const setStats = window.stats.setStats()

  return (
    <div className="flex gap-20 justify-center mt-4  border-b border-b-red-400 pb-4 w-[80%]">
      <Button
        onClick={() => {
          changeMode('session-picker')
        }}
        text={'Play'}
        type={'secondary'}
      />
      <Button
        onClick={() => {
          // setStats
          changeMode('stats')
        }}
        text={'Stats'}
        type={'secondary'}
      />
    </div>
  )
}

export default ContentSelector
