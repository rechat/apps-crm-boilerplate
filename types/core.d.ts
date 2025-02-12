declare type UUID = string
declare type Optional<T> = T | undefined
declare interface Window {
  libs: Record<'React' | 'MaterialUi' | 'ReactUse', any>
}
declare interface CoreComponents {
  Logo: React.FC<LogoProps>
  DatePicker: React.FC<DatePickerProps>
  Wizard: {
    QuestionWizard: React.FC<QuestionWizardProps>
    QuestionSection: React.FC<QuestionSectionProps>
    QuestionTitle: React.FC<QuestionTitleProps>
    QuestionForm: React.FC<QuestionFormProps>
  }
}

declare interface EntryProps {
  models: {
    contact: IContact
    user: IUser
  }
  utils: {
    notify: (data: NotificationData) => void
  }
  api: {
    updateContact: (contact: IContact) => Promise<void>
    close: () => void
  }
  hooks: {
    wizard: {
      useSectionContext: () => IWizardSectionState
      useWizardContext: () => IWizardState
      useSectionErrorContext: () => Optional<string>
    }
  }
  Components: CoreComponents
}
