import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/main";
import { Box, Button, chakra, Table, Thead, Tbody, Tr, Th, Td, ButtonGroup, IconButton, Flex, useColorModeValue, Spacer, Link as ChakraLink } from "@chakra-ui/react";
import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import getDocument from "@/firebase/firestore/getDoc";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [paymentData, setPaymentData] = useState([]);
  const header = ["Title", "Description", "DueDate", "Status", "Actions"];
  // const data = [  {   "ID": 1,    "Title": "Grocery shopping",    "Description": "Buy groceries for the week",    "DueDate": "2023-04-27",    "Status": "Unpaid"  },  {    "ID": 2,    "Title": "Monthly rent",    "Description": "Pay rent for the apartment",    "DueDate": "2023-04-30",    "Status": "Unpaid"  },  {    "ID": 3,    "Title": "Birthday gift",    "Description": "Buy a gift for friend's birthday",    "DueDate": "2023-05-05",    "Status": "Paid"  },  {    "ID": 4,    "Title": "Movie tickets",    "Description": "Buy tickets for Avengers: Endgame",    "DueDate": "2023-04-21",    "Status": "Paid"  }];

  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  useEffect(() => {
    let data = loadPaymentData();
  }, []);

  const loadPaymentData = async () => {
    let temp = await getDocument("payments");
    setPaymentData((prev) => {
      return temp.data;
    });
    return temp;
  };

  const handlePaid = async () => {
    // handlePaid;
  }

  return (
    <MainLayout>
      <Flex>
        <Box w="80%" mx={"auto"} py={10} px={{ base: 2, sm: 12, md: 17 }}>
          <Flex justify={"between"} minWidth="max-content" alignItems="center" gap="2">
            <chakra.h3 pl={4} fontSize={"3xl"} py={6} fontWeight={"bold"}>
              Payments List
            </chakra.h3>
            <Spacer></Spacer>
            <Link href="/admin/payment/create" passHref>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Add
              </Button>
            </Link>
          </Flex>
          <Table
            w="full"
            bg={useColorModeValue("gray.50", "gray.900")}
            _dark={{
              bg: "gray.700",
            }}
            display={{
              base: "block",
              md: "table",
            }}>
            <Thead
              display={{
                base: "none",
                md: "table-header-group",
              }}>
              <Tr>
                {header.map((x) => (
                  <Th key={x}>{x}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody display={{ base: "block", md: "table-row-group" }}>
              {paymentData.map((item, tid) => {
                return (
                  <Tr key={tid} display={{ base: "grid", md: "table-row" }}>
                    <Td>{item.title}</Td>
                    <Td>{item.description}</Td>
                    <Td>{item.due_date}</Td>
                    <Td>{item.status ? "Paid" : "Un Paid"}</Td>
                    <Td>
                      <ButtonGroup variant="solid" size="sm" spacing={3}>
                        {!item.status && (
                          <ChakraLink
                            onClick={() => {
                              handlePaid();
                            }}>
                            <IconButton colorScheme="green" icon={<CheckIcon />} aria-label="Detail" />
                          </ChakraLink>
                        )}
                        <Link href="edit">
                          <IconButton colorScheme="blue" icon={<EditIcon />} aria-label="Edit" />
                        </Link>
                        <IconButton colorScheme="red" icon={<CloseIcon />} aria-label="Delete" />
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
