import { FC } from 'react'
import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export const CloseButton: FC = () => (
  <Popover.Button
    className="absolute right-5 top-5 text-zync-400 hover:text-zinc-100"
    title="Fechar formulário de feedback"
  >
    <X size="16" weight="bold" />
  </Popover.Button>
)
