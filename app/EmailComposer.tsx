import Ui from '@libs/material-ui'
import React from '@libs/react'

interface Props {
  contact: IContact
  SingleEmailComposeDrawer: CoreComponents['SingleEmailComposeDrawer']
}

export function EmailComposer({ SingleEmailComposeDrawer, contact }: Props) {
  const [isEmailDrawerOpen, setIsEmailDrawerOpen] = React.useState(false)

  return (
    <Ui.Box mb={2} mt={2}>
      <Ui.Box mb={2} display="flex" alignItems="center">
        <Ui.Box>
          <Ui.Button
            variant="contained"
            color="primary"
            onClick={() => setIsEmailDrawerOpen(true)}
          >
            Open Email Composer
          </Ui.Button>
        </Ui.Box>
      </Ui.Box>

      {isEmailDrawerOpen && (
        <SingleEmailComposeDrawer
          isOpen={isEmailDrawerOpen}
          onClose={() => {
            setIsEmailDrawerOpen(false)
          }}
          initialValues={{
            attachments: [],
            to: contact.email
              ? [
                  {
                    email: contact.email,
                    recipient_type: 'Email',
                    contact
                  }
                ]
              : []
          }}
          onSent={() => {
            setIsEmailDrawerOpen(false)
          }}
        />
      )}
    </Ui.Box>
  )
}
