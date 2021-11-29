import { CommandFn } from '..'

export const hide: CommandFn = subject => {
  const s = () => cy.wrap(subject)
  return s()
    .find('.HideButton button')
    .click()
}