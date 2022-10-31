import React, {useState} from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function LoginForm () {

    const [email, setEmail]= useState('');

    const [password, setPassword]= useState('');
    const [error, setError]= useState(false);

    const [successMsg, setSuccessMsg]= useState('');

    // const handleEmailChange = (e) => {
    //     setSuccessMsg ('');
    //     setEmailError ('');
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setSuccessMsg ('');
    //     setPasswordError ('');
    //     setPassword(e.target.value);
    // }

    const handleSubmit =(e) => {
        if (email=== '' && password === ''){
            setError (true)
        }
        console.log(email,password);
    }
    
    return (
      <Flex onSubmit={handleSubmit}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Sign in to your account
            </Heading>
          <FormControl id="email" isRequired>
            {error && email!== ''?<FormLabel>Please Enter Your Email</FormLabel>: '' }
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={e => setEmail(e.target.value)}
              />
          </FormControl>
          <FormControl id="password" isRequired>
            {error && password !== ''? <FormLabel>Please Enter Your Password</FormLabel>: ''}
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={e => setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }