import {Box, Button, Flex} from "@chakra-ui/react";
import {SubmitHandler, useFormContext} from "react-hook-form";
import InputControl from "./InputControl";
import {RegisterFormData} from "../../App";

export default function RegisterForm({onSubmit, mode}: RegisterFormProps) {
  const {handleSubmit, reset} = useFormContext<RegisterFormData>();

  const ctaLabel = mode === 'insert' ?
    "Aggiungi utente 🙆‍♂️" :
    "Modifica utente 🤷‍♂️"

  return (
    <Box as="form" onReset={() => reset()} onSubmit={handleSubmit(onSubmit)}>
      <Flex my="2rem" direction="column" flexWrap="wrap" gap="1.2rem">
        <InputControl data-cy="first-name" isRequired name="firstName" label="Nome" placeholder="Mario"/>
        <InputControl data-cy="last-name" isRequired name="lastName" label="Cognome" placeholder="Rossi"/>
        <InputControl data-cy="email" isRequired isEmail type="email" name="email" label="Email"
                      placeholder="mario.rossi@gmail.com"/>
      </Flex>

      <Flex gap="1rem" alignItems="center">
        <Button
          flex={1}
          variant="cta"
          mx="auto"
          display="block"
          type="submit">
          {ctaLabel}
        </Button>

        <Button type="reset" variant="outline" flex={1}>
          Pulisci 🚮
        </Button>
      </Flex>
    </Box>

  );
}

interface RegisterFormProps {
  onSubmit: SubmitHandler<RegisterFormData>;
  mode: 'insert' | 'edit'
}
