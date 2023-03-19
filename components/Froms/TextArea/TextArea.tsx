import React, { FC } from 'react';
import * as PropTypes from 'prop-types';
import { Textarea } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import 'twin.macro';

type TextAreaProps = {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  name: string;
  value: any;
  ref: any;
  placeholder?: string;
  readOnly?: boolean;
  defaultValue: any;
  error?: FieldError | undefined;
  [x: string]: any;
};

const TextArea: FC<TextAreaProps> = React.forwardRef(
  (
    { onChange, onBlur, name, value, defaultValue, placeholder, error, readOnly, ...other },
    ref,
  ) => {
    return (
      <>
        <Textarea
          borderRadius={'10px'}
          minH={'128px'}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          padding={'0.625rem 0.75rem'}
          defaultValue={defaultValue}
          placeholder={placeholder}
          isDisabled={readOnly}
          fontSize={'0.875rem'}
          css={{
            '&:focus': {
              borderColor: error !== undefined ? '#D21C1C' : '#388067',
              boxShadow: error !== undefined ? '0 0 0 1px #D21C1C' : '0 0 0 1px #388067',
            },
          }}
          {...other}
        />
        {error !== undefined && (
          <div tw="flex flex-row space-x-1 items-center mt-1">
            <p tw="text-[#D21C1C] font-semibold text-xs">{error.message}</p>
          </div>
        )}
      </>
    );
  },
);
export default TextArea;

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  /**
   * onChange is the function that will be triggered when the
   * select input had a change and return the value of the selected option
   */
  onChange: PropTypes.func,
  /**
   * onBlur is the function that will be triggered when the
   * select input goes to blur and return the value of the selected option
   */
  onBlur: PropTypes.func,
  /**
   * value is the value of the selected options in the select input
   */
  value: PropTypes.any,
  /**
   * name is a required string that is the name of the field in
   * the form
   */
  name: PropTypes.string.isRequired,
  /**
   * defaultValue is an optional default value when things first
   * rendered
   */
  defaultValue: PropTypes.any,
};
