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
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const header = ["ID", "Title", "Description", "Due Date", "Status","Actions"];
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
      <Flex>
        <Box w="80%" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h3
            pl={4}
            fontSize={'3xl'}
            py={6}
            fontWeight={'bold'}>
            Payments List 
          </chakra.h3>
          <Table
            w="full"
            bg="white"
            _dark={{
              bg: "gray.700",
            }}
            display={{
              base: "block",
              md: "table",
            }}
            sx={{
              "@media print": {
                display: "table",
              },
            }}
          >
            <Thead
              display={{
                base: "none",
                md: "table-header-group",
              }}>
              <Tr>
                {header.map((x) => (<Th key={x}>{x}</Th>))}
              </Tr>
            </Thead>
            <Tbody display={{base: "block", md: "table-row-group"}}>
              {data.map((item, tid) => {
                return (
                  <Tr key={tid} display={{base: "grid", md: "table-row"}}>
                    <Td>{item.name}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.created}</Td>
                    <Td>{item.created}</Td>
                    <Td>
                      <ButtonGroup variant="solid" size="sm" spacing={3}>
                        <IconButton
                          colorScheme="blue"
                          icon={<CheckIcon />}
                          aria-label="Delete"
                        />
                        <IconButton
                          colorScheme="red"
                          icon={<CloseIcon />}
                          aria-label="Edit"
                        />
                      </ButtonGroup>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </MainLayout>
  );
}

export default Page;
