import React, {useState, ReactNode} from "react";
import {  useNavigate } from "react-router-dom";
import LoginForm from './Login';
import { Link } from 'react-router-dom'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const NavLink = ({ children } = { children: ReactNode }) => (
  <Link px={2} py={1} rounded={"md"}
    _hover={{ textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }} href={"#"} >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigat = useNavigate();


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <img src={"tuwaiq.png"} width ={210}/> 

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={() => { navigat('./Login'); }}> Login</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


