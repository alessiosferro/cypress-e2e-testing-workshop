import {Box, Button, Container, Flex, Heading, Text} from "@chakra-ui/react";
import DarkBackground from "./components/atoms/DarkBackground";
import {useEffect, useState} from "react";
import RegisterForm from "./components/molecules/RegisterForm";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import UsersList, {User} from "./components/molecules/UsersList";


export default function App() {
  const [submittedData, setSubmittedData] =
    useState<RegisterFormData | null>(null);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [savedUsers, setSavedUsers] = useState<User[]>([]);

  const mode = Number.isInteger(editIndex) ? 'edit' : 'insert';

  const form = useForm({
    defaultValues
  });

  const saveDataHandler: SubmitHandler<RegisterFormData> = data => {
    setSubmittedData(data);

    let users;

    if (mode === 'edit') {
      users = savedUsers.map((user, index) => {
        if (editIndex === index) {
          return {
            ...data,
            date: new Date().toLocaleString()
          }
        }

        return user;
      });
    } else {
      users = [
        {
          ...data,
          date: new Date().toLocaleString()
        },
        ...savedUsers
      ];
    }

    localStorage.setItem('users', JSON.stringify(users));
    setSavedUsers(users);
  }

  const backHandler = () => {
    setSubmittedData(null);
    mode === 'edit' && setEditIndex(null);
    form.reset();
  }

  const editUserHandler = (user: User, editedIndex: number) => {
    const {firstName, lastName, email} = user;

    form.setValue("firstName", firstName);
    form.setValue("lastName", lastName);
    form.setValue("email", email);

    setEditIndex(editedIndex);
  }

  const removeUserHandler = (removedIndex: number) => {
    const users = savedUsers.filter((user, index) => index !== removedIndex);
    localStorage.setItem('users', JSON.stringify(users));
    setSavedUsers(users);
  }

  useEffect(() => {
    const jsonUsers = localStorage.getItem('users');
    const users = jsonUsers ? JSON.parse(jsonUsers) : [];
    setSavedUsers(users);
  }, []);

  return (
    <DarkBackground minH="100vh">
      <Container onReset={() => setEditIndex(null)} py="4rem">
        <Heading textAlign="center" as="h1">Cypress E2E Testing ⚡️</Heading>


        {!submittedData ? <FormProvider {...form}>
          <RegisterForm mode={mode} onSubmit={saveDataHandler}/>
        </FormProvider> : (
          <Flex gap="2rem" direction="column" mt="2rem">
            <Text>Dati inseriti:</Text>
            <Box as="pre">{JSON.stringify(submittedData, null, 2)}</Box>
            <Button variant="cta"
                    display="block"
                    mx="auto"
                    onClick={backHandler}
            >👈 Torna indietro</Button>
          </Flex>
        )}

        {savedUsers?.length > 0 && (<>
          <Heading textAlign="center" mt="2rem">Utenti registrati</Heading>
          <UsersList onRemove={removeUserHandler} onEdit={editUserHandler} users={savedUsers}/>
        </>)}
      </Container>
    </DarkBackground>
  );
}


const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
};

export type RegisterFormData = typeof defaultValues;
