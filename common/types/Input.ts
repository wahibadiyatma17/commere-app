import React from 'react';
import { Control, RegisterOptions } from 'react-hook-form';

export interface BaseControlledInputProps {
  name: string;
  control: Control<any>;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  defaultValue?: string | boolean | number;
  placeholder?: string;
}

export interface BaseInputProps {
  error?: string;
  help?: string;
  inlineLabel?: boolean;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export type InputProps = BaseInputProps & React.InputHTMLAttributes<HTMLInputElement>;

export type ControlledInputProps = InputProps & BaseControlledInputProps;
