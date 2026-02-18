import ReactUse from '@libs/react-use'

import { EmailComposer } from './EmailComposer'
import { NameEdit } from './NameEdit'

export function App({
  models: { user, contact },
  api: { updateContact, close },
  Components: { DatePicker: DayPicker, Wizard, SingleEmailComposeDrawer },
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

      <EmailComposer
        contact={contact}
        SingleEmailComposeDrawer={SingleEmailComposeDrawer}
      />

      {/* <Ui.Button variant="contained" color="primary" onClick={close}>
        Close App
      </Ui.Button> */}
    </div>
  )
}
