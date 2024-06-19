import {Controller} from "react-hook-form";
import {FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps} from "@chakra-ui/react";


export default function InputControl(props: InputControlProps) {
  const {
    placeholder,
    type = 'text',
    name,
    label,
    isEmail,
    isRequired,
    disabled,
    ...inputProps
  } = props;

  const rules = {
    ...isRequired && {required: "Campo obbligatorio"},
    ...isEmail && {pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Email not valid"}}
  }

  return (
    <Controller rules={rules} disabled={disabled} name={name} render={({field, fieldState: {error}}) => (
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <ChakraInput {...field} {...inputProps} placeholder={placeholder} type={type}/>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )}/>
  );
}

export interface InputControlProps extends InputProps {
  name: string;
  label: string;
  isEmail?: boolean;
  isRequired?: boolean;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
}