import React , {useState} from 'react'
import {
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Input,} from "@chakra-ui/react";

 
    function LoginForm () {

    const [signin, setSignin]= useState({email : '', password: ''});
  
  
    const handleSubmit =() => {
      if (signin.email.length == '' || signin.password.length == ''){
          // setError (true);
          alert ("required")
      }else if(signin.email.length == '' && signin.password.length == ''){
        alert ("required")
      }else{
      console.log(signin.email,signin.password);
      alert('Welcome')
      }
    }
    const submit =() => {
      handleSubmit()
    }
  return (
  <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'}
      boxShadow={'lg'} p={6} my={12}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
      Sign in to your account
        </Heading>
      <FormControl id="email">
        <FormLabel>Email address </FormLabel>
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          type="email" value={signin.email}
          onChange={e => { setSignin({...signin,emaile: e.target.value})}}
          />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password </FormLabel>
        <Input type="password"  value={signin.password}
          onChange={e => { setSignin({...signin,password: e.target.value})}}/>
      </FormControl>
      <Stack spacing={6}>
        <Button onClick={submit}
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

  export default LoginForm
  