import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/main";
import {
Box,
Button,
chakra,
FormControl,
FormLabel,
GridItem,
Heading,
Input,
SimpleGrid,
Stack,
Switch,
Text,
} from '@chakra-ui/react';


    

function PaymentEdit() {
    const { user } = useAuthContext();
    const router = useRouter();
    const { pid } = router.query
    
    useEffect(() => {
        if (user == null) router.push("/");
    }, [user]);

    return (
        <MainLayout>
            <Box p={10} w="80%" mx="auto" py={24}>
                <Box mt={[10, 0]}>
                    <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                    >
                        <GridItem colSpan={{ md: 1 }}>
                            <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Payment Information
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                color: "gray.400",
                                }}
                            >
                                Keep a track of your personal payments easily.
                            </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            mt={[5, null, 0]}
                            colSpan={{
                            md: 2,
                            }}
                        >
                            <chakra.form
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                            >
                                <Stack
                                    px={4}
                                    py={5}
                                    p={[null, 6]}
                                    bg="gray.50"
                                    _dark={{
                                    bg: "gray.700",
                                    }}
                                    spacing={6}
                                >
                                    <SimpleGrid columns={6} spacing={6}>
                                    <FormControl as={GridItem} colSpan={4}>
                                        <FormLabel
                                        htmlFor="id"
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                        >
                                        Payment ID
                                        </FormLabel>
                                        <Input
                                        type="number"
                                        name="id"
                                        id="id"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                        />
                                    </FormControl>
                                    
                                    <FormControl as={GridItem} colSpan={4}>
                                        <FormLabel
                                        htmlFor="title"
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                        >
                                        Title
                                        </FormLabel>
                                        <Input
                                        type="text"
                                        name="title"
                                        id="title"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                        />
                                    </FormControl>
                                    
                                    <FormControl as={GridItem} colSpan={4}>
                                        <FormLabel
                                        htmlFor="Description"
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                        >
                                        Description
                                        </FormLabel>
                                        <Input
                                        type="text"
                                        name="Description"
                                        id="Description"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                        />
                                    </FormControl>
                                    
                                    <FormControl as={GridItem} colSpan={4}>
                                        <FormLabel
                                        htmlFor="due-date"
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                        >
                                        Due Date.
                                        </FormLabel>
                                        <Input
                                        type="date"
                                        name="due-date"
                                        id="due-date"
                                        autoComplete="due-date"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                        />
                                    </FormControl>
                                    
                                    <FormControl as={GridItem} colSpan={4}>
                                        <FormLabel
                                        htmlFor="status"
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                        >
                                        Status
                                        </FormLabel>
                                        Unpaid
                                        <Switch id='status' px={2} />
                                        Paid
                                    </FormControl>
                                    </SimpleGrid>
                                </Stack>
                                <Box
                                    px={{
                                    base: 4,
                                    sm: 6,
                                    }}
                                    py={3}
                                    bg="gray.100"
                                    _dark={{
                                        bg: "gray.600",
                                    }}
                                    textAlign="right"
                                >
                                    <Button
                                    type="submit"
                                    colorScheme="gray.50"
                                    variant="outline"
                                    color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                    _focus={{
                                        shadow: "",
                                    }}
                                    >
                                    Save
                                    </Button>
                                </Box>
                            </chakra.form>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </MainLayout>
    );
}

export default PaymentEdit;



