import { useEffect, useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useAuthContext } from "@/context/AuthContext";

function SignIn() {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { user } = useAuthContext();

  /**
   * this function is used to sign in for firebase
   * @param event form event
   * @returns 
   */
  const handleForm = async (event:any) => {
    event.preventDefault();

    const { result, error } = await signIn(signInForm.email, signInForm.password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  /**
   * this function is use to note changes of form
   * @param e is the new value of input
   * @param key is use for storing new value in object
   */
  const handleFormChange = (e: String, key: String) => {
    setSignInForm((prev) => {
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
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            get connected with <Link color={'blue.400'}>Atom</Link> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={(e)=>handleForm(e)} className="form">
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={(e) => handleFormChange(e.target.value, 'email')} required name="email" id="email" placeholder="Example@mail.com"/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e) => handleFormChange(e.target.value, 'password')} required name="password" id="password" placeholder="Password"/>
                <InputRightElement h={'full'}>
                    <Button
                    variant={'ghost'}
                    onClick={() =>setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignIn;
