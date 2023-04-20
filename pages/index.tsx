import { FormEvent, useEffect, useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useAuthContext } from "@/context/AuthContext";
import { Link } from '@chakra-ui/next-js'

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useAuthContext();
  const router = useRouter()

  /**
   * this function is used to sign up for firebase
   * @param event form event
   * @returns 
   */
  const handleForm = async (event: FormEvent) => {
    debugger;
    event.preventDefault()
    let { email, password, ...rest } = signUpForm;
    const { result, error } = await signUp(email, password, rest);

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/admin")
  }

  /**
   * this function is use to note changes of form
   * @param e is the new value of input
   * @param key is use for storing new value in object
   */
  const handleFormChange = (e: String, key: String) => {
    setSignUpForm((prev) => {
      let tempPrev = { ...prev }
      tempPrev[key] = e;
      return tempPrev
    })
  }


  useEffect(() => {
    if (user != null) router.push("/admin");
  }, [user]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            get connected with <Link href="#" color={'blue.400'}>Atom</Link>
          </Text>
        </Stack>
        <form onSubmit={(e) => handleForm(e)} className="form">
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" required onChange={(e) => handleFormChange(e.target.value, 'first_name')} name="first_name" id="first_name" placeholder="Ahmed" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" required onChange={(e) => handleFormChange(e.target.value, 'last_name')} name="last_name" id="last_name" placeholder="Gadit" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={(e) => handleFormChange(e.target.value, 'email')} required name="email" id="email" placeholder="Example@mail.com" />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" onChange={(e) => handleFormChange(e.target.value, 'address')} required name="address" id="address" placeholder="plot 21, street 2, albert road, johannesburg" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e) => handleFormChange(e.target.value, 'password')} required name="password" id="password" placeholder="Password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href='/' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}

export default SignUp;