import {Box, Flex, Input, Button} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutations'
import { useState } from 'react'

const AuthForm = ({mode}) => {
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [isLoading, setIsLoading] = useState(false) ;
    const router = useRouter() 

    return (
        <Box height = "100vh" width="100vw" bg= "black">
            <Flex justify="center" align="center" >
                hello
            </Flex>
            <Flex justify="center" align="center" height = "calc(100vh - 100px)">
                form
            </Flex>
        </Box>
    )
    

}


export default AuthForm 