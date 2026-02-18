declare interface SingleEmailComposeDrawerProps {
  isOpen: boolean
  onClose?: () => void
  onSent?: (email: any) => void
  initialValues?: {
    to?: Array<{ email: string; recipient_type: string }>
    cc?: Array<{ email: string; recipient_type: string }>
    bcc?: Array<{ email: string; recipient_type: string }>
    from?: string
    subject?: string
    body?: string
    attachments?: any[]
  }
  headers?: Record<string, string>
  followUpCallback?: (event: any) => void
  getEmail?: (values: any) => any
  disableAddNewRecipient?: boolean
  emailId?: string
}
