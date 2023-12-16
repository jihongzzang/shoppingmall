import { useRef } from 'react';

import styled from 'styled-components';

import { Select } from './Select';

const Container = styled.div`
  label {
    margin-right: 2rem;
  }
`;

type ComboBoxProps<T> = {
  label: string;
  selectedItem: T;
  items: T[];
  itemToId: (item: T) => string;
  itemToText: (item: T) => string;
  onChange: (item: T | null) => void;
};

export default function ComboBox<T>({
  label,
  selectedItem,
  items,
  itemToId,
  itemToText,
  onChange,
}: ComboBoxProps<T>) {
  const id = useRef(`combobox-${Math.random().toString().slice(2)}`);

  const handleChange = (value: string) => {
    const selected = items.find((item) => itemToId(item) === value);
    onChange(selected ?? null);
  };

  return (
    <Container>
      <label htmlFor={id.current}>{label}</label>
      <Select.Root value={itemToId(selectedItem)} onValueChange={handleChange}>
        <Select.Trigger />
        <Select.Content position="popper">
          <Select.Group id={id.current} defaultValue={itemToId(selectedItem)}>
            {items.map((item) => (
              <Select.Item key={itemToId(item)} value={itemToId(item)}>
                {itemToText(item)}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Container>
  );
}
