import { forwardRef, Ref, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { SwitchSmall } from './SwitchSmall'
import { SwitchDefault } from './SwitchDefault'
import { comfortable as tokens } from './Switch.tokens'
import { typographyTemplate } from '../../utils'

type StyledProps = { isDisabled: boolean }

const StyledSwitch = styled.label<StyledProps>`
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  border: none;
  background-color: transparent;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  position: relative;
`

const Label = styled.span`
  ${typographyTemplate(tokens.typography)}
  margin-left: ${tokens.entities.label.spacings.left};
`

export type SwitchProps = {
  /** Label for the switch. Required to make it a11y compliant */
  label: string
  /** Switch size, use the small version with caution */
  size?: 'default' | 'small'
  /** If true, the switch will be disabled */
  disabled?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    ref?: Ref<HTMLInputElement>
  }

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { size = 'default', disabled, label, className, ...rest },
  ref,
) {
  return (
    <StyledSwitch isDisabled={disabled} className={className}>
      {size === 'small' ? (
        <SwitchSmall disabled={disabled} {...rest} ref={ref} />
      ) : (
        <SwitchDefault disabled={disabled} {...rest} ref={ref} />
      )}

      <Label>{label}</Label>
    </StyledSwitch>
  )
})

Switch.displayName = 'Switch'
