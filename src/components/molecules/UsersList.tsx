import {Box, List, ListItem, Text} from "@chakra-ui/react";

export default function UsersList(props: UsersListProps) {
  const {users, onRemove, onEdit} = props;

  if (!users || !users.length) return null;

  return (
    <List display="flex" my="2rem" gap="1rem" flexDirection="column">
      {users.map((user, index) => (
        <ListItem p="1rem" bgColor="purple.800" position="relative" borderRadius=".4rem">
          <Text>🙋‍♂️ {user.firstName} {user.lastName}</Text>
          <Text>✉️ {user.email}</Text>
          <Text>🗓️ {user.date}</Text>

          <Box as="button"
               position="absolute"
               right="1rem"
               top="1rem"
               onClick={() => onRemove(index)}
          >🔥</Box>

          <Box as="button"
               position="absolute"
               right="3.2rem"
               top="1rem"
               onClick={() => onEdit(user, index)}
          >✏️</Box>
        </ListItem>
      ))}
    </List>
  );
}

interface UsersListProps {
  users: User[];
  onEdit: (user: User, index: number) => void;
  onRemove: (index: number) => void;
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}