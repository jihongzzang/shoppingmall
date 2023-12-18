import styled from 'styled-components';

import {
  TextField as RadixTextField,
  TextFieldInput as RadixTextFieldInput,
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
