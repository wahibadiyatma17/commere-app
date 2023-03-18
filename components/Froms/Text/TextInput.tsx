import React from 'react';
import { css, styled } from 'twin.macro';

import { InputProps } from '@/common/types/Input';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    error,
    help,
    inlineLabel = false,
    label,
    prefix,
    suffix,
    disabled = false,
    readOnly = false,
    ...other
  } = props;
  return (
    <Field className="input-container" component={!!label ? 'label' : 'div'}>
      {label && !inlineLabel && <span className="input-label non-inline-label">{label}</span>}
      <StyledInputWrapper className="input-wrapper" error={error} help={help} disabled={disabled}>
        {prefix && <div className="prefix-container">{prefix}</div>}
        {label && inlineLabel && <span className="input-label inline-label">{label}</span>}
        <StyledInput
          ref={ref}
          className="input-field"
          disabled={disabled}
          readOnly={readOnly}
          {...other}
        />
        {suffix && <div className="suffix-container">{suffix}</div>}
      </StyledInputWrapper>
      {error && (
        <div className="error-container">
          <span className="error-text">{error}</span>
        </div>
      )}
      {help && !error && (
        <div className="help-container">
          <span className="help-text">{help}</span>
        </div>
      )}
    </Field>
  );
});

export default Input;

export const StyledInput = styled.input`
  flex: 1 1 20%;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;

  color: #555555;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;

  &:focus {
    outline: none;
  }
  &:read-only,
  &::placeholder {
    font-weight: 500;
  }

  &::placeholder {
    color: #abaeb8;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const StyledInputWrapper = styled.div<Pick<InputProps, 'error' | 'help' | 'disabled'>>`
  display: flex;
  height: 2.75rem;
  padding: 0 0.875rem;
  border: 1px solid
    ${(props) => {
      if (props.error) return '#D21C1C';
      else if (props.help) return '#FF6112';
      else return '#E6E6E6';
    }};
  background-color: ${(props) => (props.disabled ? '#F0F0F0' : '#FFFFFF')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  border-radius: 0.75rem;

  .inline-label {
    margin-right: 0.75rem;
    align-self: center;
  }

  .prefix-container,
  .suffix-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .prefix-container {
    padding-right: 0.5rem;
  }

  .suffix-container {
    padding-left: 0.5rem;
  }

  &:focus-within {
    border: 1.5px solid #388067;
  }
`;

export const Field: any = styled(
  React.forwardRef<any, any>(
    ({ component: Component, className, children, spaceAfter, theme, $width, ...props }, ref) => {
      return (
        <Component className={className} ref={ref} {...props}>
          {children}
        </Component>
      );
    },
  ),
)`
  span.input-label {
    display: block;
    color: #262626;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.25rem;
    &.non-inline-label {
      margin-bottom: 0.25rem;
    }
  }

  .error-container,
  .help-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.25rem;
  }

  .error-icon,
  .help-icon {
    margin-right: 0.25rem;
    margin-top: 0.125rem;
    min-width: 1rem;
    min-height: 1rem;
    width: 1rem;
    height: 1rem;
  }

  .error-text,
  .help-text {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  .error-text {
    color: #d21c1c;
  }

  .help-text {
    color: #ff6112;
  }
`;
