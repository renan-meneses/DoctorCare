import { FC } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'
import { Popover } from '@headlessui/react'

export const Widget: FC = () => {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button>
        <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots size="24" color="#fff" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
            <span className="pl-2">Feedback</span>
          </span>
        </button>
      </Popover.Button>
    </Popover>
  )
}
