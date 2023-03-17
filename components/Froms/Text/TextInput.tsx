import React, { useCallback, useRef, FC } from 'react';
import * as PropTypes from 'prop-types';
import { styled } from 'twin.macro';
import { FieldError } from 'react-hook-form';

type TextInputProps = {
  name?: string;
  type?: string;
  value: any;
  onChange?: (event?: any) => void;
  onBlur?: () => void;
  ref?: any;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: FieldError | undefined;
  [x: string]: any;
};

const TextInput: FC<TextInputProps> = React.forwardRef(
  (
    {
      name,
      type,
      placeholder,
      defaultValue,
      value,
      onChange,
      onBlur,
      disabled,
      readOnly,
      error,
      ...other
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const setFocusToInputRef = useCallback(() => {
      if (inputRef.current) inputRef.current.focus();
    }, [inputRef]);

    return (
      <>
        <StyledInputContainer
          onClick={() => setFocusToInputRef()}
          disabled={disabled}
          error={error}
        >
          <StyledInput
            type={type}
            placeholder={placeholder}
            ref={(e) => {
              if (!ref) return;
              else if (typeof ref === 'function') ref(e);
              else ref.current = e;
              inputRef.current = e;
            }}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled || readOnly}
            readOnly={readOnly}
            {...other}
          />
        </StyledInputContainer>

        {error !== undefined && (
          <div tw="flex flex-row space-x-1 items-center mt-1">
            <img
              src="/commerce/icons/error-alert.svg"
              alt="error alert"
              width={'14px'}
              height={'14px'}
            />

            <p tw="text-[#D21C1C] font-semibold text-xs">{error.message}</p>
          </div>
        )}
      </>
    );
  },
);

TextInput.propTypes = {
  /**
   * name as the name in the form
   */
  name: PropTypes.string,
  /**
   * type is option as the type of the field
   */
  type: PropTypes.string,
  /**
   * value is the to be controlled field that is given from the parent
   */
  value: PropTypes.any,
  /**
   * onChange is the control callback from the parent that will control the onChange
   * event of the input
   */
  onChange: PropTypes.func,
};

export default TextInput;

TextInput.displayName = 'TextInput';

const StyledInputContainer = styled.div<Pick<TextInputProps, 'disabled' | 'error'>>`
  position: relative;
  padding: 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.error !== undefined ? '#D21C1C' : '#e6e6e6')};
  display: flex;
  justify-content: space-between;

  &:focus-within {
    border: 2px solid #97d2ff;
  }
  color: #555555;
  background: ${(props) => (props.disabled ? '#F0F0F0' : '#ffffff')};
`;

const StyledInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  background: none;
  color: #555555;
  width: 78%;
  cursor: ${(props) => (!props.readOnly && props.disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline: none;
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &[type='date'] {
    width: 100%;
  }

  &:disabled {
    background: transparent;
    color: #abaeb8 !important;
    font-weight: 500;
  }
`;
