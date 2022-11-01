import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  InputGroup,
  Image,
  // UnorderedList,
  // ListItem,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Cards from "./Store";
// import Cards from './component/Store';

const NavLink = ({ children } = { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const find = () => {
  //   let arr = [...Cards.name];
  //   return arr.filter ( (item) => item.name.toLowerCase().includes(search));
  // };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box src={"logo1.png"}> أكاديمية طويق</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <InputGroup>
                <Input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value);
                  }}
                />
                <Button>
                  <Image src="search.png" width="90%" height="80%" />
                </Button>
              </InputGroup>
              <Cards data = {find(Center)} />
              {/* <Box>
                {Cards.filter((Cards) => Cards.props.name.toLowerCase().include(search)).map(
                  (Cards) => (
                    <Flex>{Cards.props.name}</Flex>
                  )
                )}
              </Box> } */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
