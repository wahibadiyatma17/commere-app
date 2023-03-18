import React, { FC } from 'react';
import { styled } from 'twin.macro';

type PrimaryButtonProps = {
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'lg' | 'md' | 'sm';
  onClick?: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { children, variant = 'solid', onClick = () => {}, size = 'lg' } = props;
  return (
    <StyledButton variant={variant} onClick={() => onClick()} size={size}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;

const StyledButton = styled.button<Pick<PrimaryButtonProps, 'variant' | 'size'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.variant === 'solid' ? 'none' : '1px solid #388067')};
  padding: ${(props) =>
    props.size === 'lg'
      ? '0.75rem 1rem'
      : props.size == 'md'
      ? '0.5rem 0.75rem'
      : '0.25rem 0.5rem'};
  font-size: ${(props) => (props.size === 'sm' ? '0.75rem' : '1rem')};
  line-height: 1.25rem;
  background-color: ${(props) => (props.variant === 'solid' ? '#388067' : '#ffffff')};
  color: ${(props) => (props.variant === 'solid' ? '#ffffff' : '#388067')};
  font-weight: 500;
  width: 100%;
  border-radius: ${(props) => (props.size === 'sm' ? '0.5rem' : '0.75rem')};

  :disabled {
    cursor: not-allowed;
  }

  :hover {
    transform: scale(1.02);
  }
`;
