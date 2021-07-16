import React ,{ useState, VFC } from 'react'
import { Switch } from '@headlessui/react'

import "tailwindcss/tailwind.css";

export const ToggleSwitch: VFC = () => {
  const [enabled, setEnabled] = useState(false)

  return  (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4"></Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-gray-300' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:gray-500`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}