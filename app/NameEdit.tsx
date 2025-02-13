import Ui from '@libs/material-ui'
import React from '@libs/react'

interface Props {
  user: IUser
  contact: IContact
  notify: EntryProps['utils']['notify']
  onSave: (contact: IContact) => Promise<void>
}

export function NameEdit({ user, contact, notify, onSave }: Props) {
  const [isSaving, setIsSaving] = React.useState(false)
  const [firstName, setFirstName] = React.useState(contact.first_name)
  const [lastName, setLastName] = React.useState(contact.last_name)

  const handleSave = async () => {
    try {
      setIsSaving(true)

      await onSave({
        ...contact,
        first_name: firstName,
        last_name: lastName
      })

      notify({
        status: 'success',
        message: 'Contact saved.'
      })
    } catch (e) {
      console.log(e)
      notify({
        status: 'error',
        message: (e as Error).message || 'Something went wrong.'
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Ui.Box mt={4} mb={4} width="300px">
      <Ui.Box mb={2} display="flex" alignItems="center">
        <Ui.Typography variant="subtitle1">Active User</Ui.Typography>
        <Ui.Box ml={3}>
          <Ui.Typography variant="body2">{user.display_name}</Ui.Typography>
        </Ui.Box>
      </Ui.Box>

      <Ui.Box mb={2} display="flex" alignItems="center">
        <Ui.Typography variant="subtitle1">First Name</Ui.Typography>
        <Ui.Box ml={3}>
          <Ui.TextField
            variant="outlined"
            size="small"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Ui.Box>
      </Ui.Box>

      <Ui.Box mb={2} display="flex" alignItems="center">
        <Ui.Typography variant="subtitle1">Last Name</Ui.Typography>
        <Ui.Box ml={3}>
          <Ui.TextField
            variant="outlined"
            size="small"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Ui.Box>
      </Ui.Box>

      <Ui.Box mt={2} display="flex" justifyContent="flex-end">
        <Ui.Button
          color="primary"
          variant="contained"
          disabled={isSaving}
          onClick={handleSave}
        >
          Save Contact
        </Ui.Button>
      </Ui.Box>
    </Ui.Box>
  )
}
