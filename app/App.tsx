import Ui from '@libs/material-ui'
import React from '@libs/react'
import ReactUse from '@libs/react-use'

import { NameEdit } from './NameEdit'

export function App({
  models: { user, contact },
  api: { updateContact, close },
  Components: { DatePicker: DayPicker, Wizard, SingleEmailComposeForm },
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

      <Ui.Box flex={1} overflow="auto">
        <SingleEmailComposeForm
          initialValues={{
            to: contact.email
              ? [
                  {
                    email: contact.email,
                    recipient_type: 'Email'
                  }
                ]
              : []
          }}
          disableAddNewRecipient={false}
        />
      </Ui.Box>

      {/* <Ui.Button variant="contained" color="primary" onClick={close}>
        Close App
      </Ui.Button> */}
    </div>
  )
}
