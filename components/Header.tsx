import { ReactNode } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import logoDark from "../public/logo.svg";
import logoLight from "../public/logo blue.svg";
import {
  Box,
  Container,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logout from '@/firebase/auth/signout';

const Links = [{name:'Dashboard', path: '/admin'},{name:'Payments', path: '/admin/payment/list'}];

const NavLink = ({ children, path }: { children: string, path: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={path}>
    {children}
  </Link>
);

const handleLogout = async () => {
  await logout();
}

export default function Header() {
  const logo = useColorModeValue(logoLight, logoDark);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box borderBottom={1} borderStyle={"solid"} shadow="sm" borderColor={useColorModeValue("gray.100", "gray.900")}>
        <Flex bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.600", "white")} minH={"60px"} py={{ base: 2 }} px={{ base: 4 }}>
        <Container as={Stack} maxW={"7xl"} alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily={"heading"} color={useColorModeValue("gray.800", "white")}>
              <Image src={logo.src} maxW={24} maxH={12}/>
            </Text>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>{link.name}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'} gap={2}>
            <Menu>
              <Button onClick={toggleColorMode} bg="none">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://bit.ly/dan-abramov'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                <Link href="/admin/profile">
                  Profile
                </Link>
                </MenuItem>
                <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          </Container>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}