import { CircleNotch } from 'phosphor-react'
import { FC } from 'react'

export const Spinner: FC = () => (
  <div>
    <CircleNotch weight="bold" size="24" className="animate-spin" />
  </div>
)
