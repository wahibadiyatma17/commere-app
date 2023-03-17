import React, { FC } from 'react';
import { styled } from 'twin.macro';

interface BaseButtonFooterProps {
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
}

export type ButtonFooterProps = BaseButtonFooterProps;

const ButtonFooter: FC<ButtonFooterProps> = (props) => {
  const { disabled = false, text = 'Submit', onClick } = props;

  const handleClick = () => {
    if (typeof onClick === 'function') onClick();
  };

  return (
    <div tw="bg-white flex gap-2 p-4 md:(pt-4 px-6 pb-10)">
      <StyledButton onClick={() => handleClick()} disabled={disabled}>
        {text}
      </StyledButton>
    </div>
  );
};

export default ButtonFooter;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
  background-color: #388067;
  color: #ffffff;
  font-weight: 500;
  width: 100%;
  border-radius: 0.75rem;

  :disabled {
    cursor: not-allowed;
  }
`;
