declare interface SingleEmailComposeDrawerProps {
  isOpen: boolean
  onClose?: () => void
  onSent?: (
    email: IEmailCampaign<
      'emails' | 'template' | 'from' | 'recipients',
      'contact',
      'email'
    >
  ) => void
  initialValues?: {
    to?: Array<{
      email: string
      recipient_type: string
      contact?: IContact
    }>
    cc?: Array<{ email: string; recipient_type: string }>
    bcc?: Array<{ email: string; recipient_type: string }>
    from?: string
    subject?: string
    body?: string
    attachments?: IFile[]
  }
  headers?: Record<string, string>
  followUpCallback?: (event: IEvent) => void
  getEmail?: (values: IEmailCampaignInput) => IEmailCampaignInput
  disableAddNewRecipient?: boolean
  emailId?: string
}
