import styled from 'styled-components';

import {
  TextFieldInput as RadixTextFieldInput,
  TextField as RadixTextField,
  TextFieldRoot as RadixTextFieldRoot,
  TextFieldSlot as RadixTextFieldSlot,
} from '@radix-ui/themes';

export const TextFieldRoot = styled(RadixTextFieldRoot)``;

export const TextFieldInput = styled(RadixTextFieldInput)``;

export const TextFieldSlot = styled(RadixTextFieldSlot)``;

export const TextField = Object.assign(RadixTextField, {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Slot: TextFieldSlot,
});
