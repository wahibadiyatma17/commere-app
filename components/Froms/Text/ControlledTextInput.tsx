import React, { ReactNode, FC } from 'react';
import * as PropTypes from 'prop-types';
import { Control, FieldValues, useController } from 'react-hook-form';

import { ConnectForm } from 'common/utils/form';
import TextInput from './TextInput';

type ControlledTextInputProps = {
  name: string;
  type?: string;
  rules?: object;
  defaultValue?: any;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  control: Control<FieldValues, any>;
  [x: string]: any;
};

const ControlledTextInput: FC<ControlledTextInputProps> = ({
  name,
  type,
  defaultValue = '',
  placeholder,
  rules = {},
  control,
  disabled,
  readOnly,
  ...other
}) => {
  const {
    field: { onChange, onBlur, name: fieldName, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <ConnectForm>
      {() => (
        <TextInput
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={fieldName}
          placeholder={placeholder}
          ref={ref}
          type={type}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          {...other}
        />
      )}
    </ConnectForm>
  );
};

ControlledTextInput.propTypes = {
  /**
   * name is required as the name in the form
   */
  name: PropTypes.string.isRequired,
  /**
   * type is option as the type of the field
   */
  type: PropTypes.string,
  /**
   * rules is optional as the rules in
   * registered field
   */
  rules: PropTypes.object,
  /**
   * defaultValue is optional as the default value of the field
   */
  defaultValue: PropTypes.any,
};

export default ControlledTextInput;
