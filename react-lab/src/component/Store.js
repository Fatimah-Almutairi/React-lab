import {
    background,
    Badge,
    Button,
    Center,
    color,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Social(props) {
    let join;
    if (props.join === true) {
        join = "التسجيل متاح" ;
    }else {
        join = "التسجيل مغلق";
        // join.style = "background-color :gray";   
        // let color = "gray";
        let backgroundColor = 'gray';

    //     <Button
    //     bg={'black'}
    //     color={'black'}>
    //      join = "التسجيل مغلق";   
    //   </Button> 
 
        // join.style  = {backgroundColor : 'gray', color : "white"}
    }
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '30%', md: '500px' }}
          height={{ sm: '450px', md: '17rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
          margin = {3}>
          <Flex flex={1}>
            <Image
              objectFit={"contain"}
              boxSize="70%"
              src={props.Image}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                {props.name}
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
             {props.description}            
            </Text>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                {props.details}
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                boxShadow={
                //   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                'green.200'
                }
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}>
                {join}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }