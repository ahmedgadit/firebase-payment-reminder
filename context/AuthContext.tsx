import { useEffect, useContext, useState, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/firebase/config";
import { CircularProgress, Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

const auth = getAuth(app);

interface IUserContext {
  user: Object|null
}

export const AuthContext = createContext<IUserContext>({ user: null });


interface childrenType {
    children: string | JSX.Element | JSX.Element[];
}

const AuthContextProvider = ({ children }:childrenType) => {
  const [user, setUser] = useState<object|null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{loading ? (<Flex
    minH={'100vh'}
    w="100%"
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <CircularProgress isIndeterminate={true} color='blue.300' />
  </Flex>) : children}</AuthContext.Provider>;
};

const useAuthContext = () => {

  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
};


export { AuthContextProvider, useAuthContext }
