import React, { useRef } from 'react';

import styled from 'styled-components';

import { Responsive } from '@radix-ui/themes';

import { LabelRoot } from '../Label';

import { TextField } from '../TextField';

import Flex from '../Flex';

const Container = styled(Flex)`
  margin-block: 1.6rem;

  label {
    margin-bottom: 0.4rem;
  }
`;

type TextBoxProps = {
  direction?: Responsive<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password'; // write avaliable type
  value: string;
  onChange: (value: string) => void;
};

export default function TextBox({
  direction = 'column',
  label,
  placeholder = undefined,
  type = 'text',
  value,
  onChange,
}: TextBoxProps) {
  const id = useRef(`textbox-${Math.random().toString().slice(2)}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container direction={direction}>
      <LabelRoot htmlFor={id.current}>{label}</LabelRoot>
      <TextField.Input
        id={id.current}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
