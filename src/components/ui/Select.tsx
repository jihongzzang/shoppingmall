import styled from 'styled-components';

import {
  Select as RadixSelect,
  SelectRoot as RadixSelectRoot,
  SelectTrigger as RadixSelectTrigger,
  SelectLabel as RadixSelectLabel,
  SelectGroup as RadixSelectGroup,
  SelectContent as RadixSelectContent,
  SelectItem as RadixSelectItem,
  SelectSeparator as RadixSelectSeparator,
} from '@radix-ui/themes';

export const SelectRoot = styled(RadixSelectRoot)``;

export const SelectTrigger = styled(RadixSelectTrigger)``;

export const SelectLabel = styled(RadixSelectLabel)``;

export const SelectContent = styled(RadixSelectContent)``;

export const SelectItem = styled(RadixSelectItem)``;

export const SelectGroup = styled(RadixSelectGroup)``;

export const SelectSeparator = styled(RadixSelectSeparator)``;

export const Select = Object.assign(RadixSelect, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Label: SelectLabel,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Sepearator: SelectSeparator,
});
