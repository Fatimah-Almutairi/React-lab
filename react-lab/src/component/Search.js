import React, {useState} from 'react';
import '../App.css';
import {Input, InputGroup,
Center,
Flex,
Stack,
Heading, Text,
Button,
Image} from '@chakra-ui/react';
import { Grid} from '@chakra-ui/react';
import {Array} from './Cards'

function Search() {

  const [search, setSearch] = useState(" ");

  return (
    <div>
          <InputGroup m={3} ml={650}>
          <Input placeholder='Search...' width='300px'  onChange={(e) => setSearch(e.target.value)}/>
          {/* </div> */}
                <Button size='md' >
                  <Image src="search.png" width="90%" height="80%" />
                </Button> 
                </InputGroup>
          <Grid templateColumns='repeat(3, 1fr)' gap={1}>
                {Array.filter((Card) => Card.name.toLowerCase().includes(search) || Card.name.toUpperCase().includes(search))
                .map(item =>{
                  return ( 
                    <Center py={1}>
                    <Stack  boxShadow='dark-lg' p='3' rounded='md' bg='white' borderWidth="1px" borderRadius="lg" w={{ sm: '20%', md: '500px' }}
          height={{ sm: '450px', md: '17rem' }}
          direction={{ base: 'column', md: 'row' }} padding={2} margin = {1}>
          <Flex flex={1}> <Image objectFit={"contain"} boxSize="70%" ml={8} src={item.imageUrl}/> </Flex>
                    <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={3}>
            <Heading fontSize={'2xl'} fontFamily={'body'}> {item.name} </Heading>
            <Text textAlign={'center'} color={('gray.700', 'gray.400')}
              px={3}>{item.description}</Text>
            <Stack width={'100%'} mt={'2rem'} direction={'row'}
              padding={2} justifyContent={'space-between'} alignItems={'center'}>
              <Button flex={1} fontSize={'sm'}
                rounded={'full'}
                _focus={{ bg: 'gray.200',}}>
                {item.details}
              </Button>
              </Stack>
              </Stack> 
              </Stack>
      </Center>

                  )
                })}
  </Grid>

               

    
// </div>

  )
}

export default Search