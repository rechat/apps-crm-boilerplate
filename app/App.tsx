import React from '@libs/react'
import ReactUse from '@libs/react-use'

import { NameEdit } from './NameEdit'

export function App({
  models: { user, contact },
  api: { updateContact, close },
  Components: { DatePicker: DayPicker, Wizard },
  utils: { notify },
  hooks
}: EntryProps) {
  ReactUse.useDebounce(() => {}, 1000, [])

  return (
    <div>
      <NameEdit
        user={user}
        contact={contact}
        notify={notify}
        onSave={updateContact}
      />

      {/* <Ui.Button variant="contained" color="primary" onClick={close}>
        Close App
      </Ui.Button> */}
    </div>
  )
}
