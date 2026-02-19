declare interface SingleEmailComposeFormProps {
  initialValues?: {
    to?: Array<{ email: string; recipient_type: string }>
    cc?: Array<{ email: string; recipient_type: string }>
    bcc?: Array<{ email: string; recipient_type: string }>
    from?: string
    subject?: string
    body?: string
    attachments?: any[]
  }
  onClose?: () => void
  onSent?: (email: any) => void
  disableAddNewRecipient?: boolean
  emailId?: string
  deal?: any
  headers?: Record<string, string>
}
