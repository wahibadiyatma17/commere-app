import React, { FC } from 'react';
import { useController } from 'react-hook-form';
import { ConnectForm } from '@/common/utils/form';

import Input from './TextInput';
import { ControlledInputProps } from '@/common/types/Input';

const Controlledinput: FC<ControlledInputProps> = (props) => {
  const {
    name,
    disabled = false,
    readOnly = false,
    type = 'default',
    onChange,
    control,
    rules = {},
    defaultValue,
    ...other
  } = props;
  const {
    field: { onChange: fieldOnChange, onBlur, name: fieldName, value, ref },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <ConnectForm>
      {() => (
        <Input
          onChange={(value) => {
            fieldOnChange(value);
            if (typeof onChange === 'function') onChange(value);
          }}
          onBlur={onBlur}
          value={value}
          name={fieldName}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
          {...other}
        />
      )}
    </ConnectForm>
  );
};

export default Controlledinput;
