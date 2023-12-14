import styled from 'styled-components';

import { OrderOption } from '../../types';

const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1.4rem;
  display: block;
`;

type OptionsProps = {
  options: OrderOption[];
};

export default function Options({ options }: OptionsProps) {
  if (!options.length) return null;

  const optionsText = options
    .map((option) => `${option.name}: ${option.item.name}`)
    .join(', ');

  const text = `(${optionsText})`;

  return <Paragraph>{text}</Paragraph>;
}
