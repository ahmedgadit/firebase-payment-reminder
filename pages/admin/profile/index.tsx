import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/main";
import {
  Box,
  Button,
  chakra,
  Text,
  VisuallyHidden,
  GridItem,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Stack,
  Divider,
  Select,
  Input,
  Avatar,
  Icon,
  Checkbox,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

function Page() {
  const { user } = useAuthContext<>();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <MainLayout>
      <Box
  p={10}
  w="80%"
  mx="auto"
  py={24}
>

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
      <GridItem
        colSpan={{
          md: 1,
        }}
      >
        <Box px={[4, 0]}>
          <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
            Personal Information
          </Heading>
          <Text
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Use a permanent address where you can receive mail.
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
          method="POST"
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
              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="first_name"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  First name
                </FormLabel>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="last_name"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Last name
                </FormLabel>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 4]}>
                <FormLabel
                  htmlFor="email_address"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Email address
                </FormLabel>
                <Input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>


              <FormControl as={GridItem} colSpan={[6, 4]}>
              <FormLabel
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Photo
              </FormLabel>
              <Flex alignItems="center" mt={1}>
                <Avatar
                  boxSize={12}
                  bg="gray.100"
                  _dark={{
                    bg: "gray.800",
                  }}
                src="https://bit.ly/dan-abramov"
                />
                <Button
                  ml={5}
                  variant="outline"
                          _focus={{
                    shadow: "none",
                  }}
                >
                  Change
                </Button>
              </Flex>
            </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Country / Region
                </FormLabel>
                <Select
                  id="country"
                  name="country"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                  htmlFor="contact"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Contact No.
                </FormLabel>
                <Input
                  type="contact"
                  name="contact"
                  id="contact"
                  autoComplete="contact"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                  htmlFor="city"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  City
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="state"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  State / Province
                </FormLabel>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="postal_code"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  ZIP / Postal
                </FormLabel>
                <Input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
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

  <Divider
    my="5"
    borderColor="gray.300"
    _dark={{
      borderColor: "whiteAlpha.300",
    }}
    visibility={{
      base: "hidden",
      sm: "visible",
    }}
  />

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
      <GridItem
        colSpan={{
          md: 1,
        }}
      >
        <Box px={[4, 0]}>
          <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
            Notifications
          </Heading>
          <Text
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Decide which communications you'd like to receive and how.
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
          method="POST"
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
            <chakra.fieldset>
              <Box
                as="legend"
                fontSize="md"
                bg="gray.50"
                color="gray.900"
                _dark={{
                  color: "gray.100",
                  bg:"gray.700"
                }}
              >
                Push Notifications
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                  color: "gray.400",
                  }}
                >
                  These are delivered via SMS to your mobile phone.
                </Text>
              </Box>
              <RadioGroup
                fontSize="sm"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                  borderColor: "gray.50",
                }}
                colorScheme="brand"
                mt={4}
                defaultValue="1"
                borderColor="brand.700"
              >
                <Stack spacing={4}>
                  <Radio spacing={3} value="1">
                    Allow
                  </Radio>
                  <Radio spacing={3} value="2">
                    Important 
                  </Radio>
                  <Radio spacing={3} value="3">
                    No push notifications
                  </Radio>
                </Stack>
              </RadioGroup>
            </chakra.fieldset>
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

export default Page;



