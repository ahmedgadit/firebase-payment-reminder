import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/main";
import {
  Box,
  Button,
  chakra,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ButtonGroup,
  IconButton,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const header = ["name", "created", "actions"];
  const data = [
    {
      name: "Daggy",
      created: "7 days ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Josef",
      created: "A few seconds ago",
    },
    {
      name: "Sage",
      created: "A few hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
    {
      name: "Anubra",
      created: "23 hours ago",
    },
  ];
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <MainLayout>
      
    </MainLayout>
  );
}

export default Page;
