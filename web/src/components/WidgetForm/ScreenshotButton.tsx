import { FC, useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { Spinner } from '../Spinner'

interface IScreenshotButtonProps {
  onScreenshot: (value: string | null) => void
  screenshot: string | null
}

export const ScreenshotButton: FC<IScreenshotButtonProps> = ({
  onScreenshot: setScreenshot,
  screenshot
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Screenshot = canvas.toDataURL('image/png')

    setScreenshot(base64Screenshot)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-400 transition-colors"
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={() => setScreenshot(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors p-2"
      onClick={handleScreenshot}
      disabled={isTakingScreenshot}
    >
      {isTakingScreenshot ? <Spinner /> : <Camera size="24" />}
    </button>
  )
}
