import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from "@/context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(() => import('../components/top-progress-bar'), { ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <TopProgressBar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}
