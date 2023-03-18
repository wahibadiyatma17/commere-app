import React, { FC } from 'react';
import * as PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import 'twin.macro';

import { ConnectForm } from '@/common/utils/form';
import TextArea from './TextArea';

type ControlledTextAreaProps = {
  name: string;
  rules?: any;
  defaultValue?: string;
  readOnly?: boolean;
  control: any;
  placeholder?: string;
  [x: string]: any;
};

const ControlledTextArea: FC<ControlledTextAreaProps> = ({
  name,
  rules = {},
  defaultValue = '',
  control,
  placeholder,
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
        <TextArea
          defaultValue={defaultValue}
          value={value}
          name={fieldName}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          onBlur={onBlur}
          ref={ref}
          error={error}
          {...other}
        />
      )}
    </ConnectForm>
  );
};

ControlledTextArea.propTypes = {
  /**
   * name is a string that is the name of the field in
   * the form
   */
  name: PropTypes.any,
  /**
   * rules is an optional field that defines the rules in the controllers hook, defining rules of
   * the field from whether the field is required/not, and other validations
   */
  rules: PropTypes.object,
  /**
   * defaultValue is an optional field that defines the default value of the date field
   */
  defaultValue: PropTypes.any,
};

export default ControlledTextArea;
