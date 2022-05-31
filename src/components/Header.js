import React from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
     className="layout"
      bg="blue.500"
      w="100%"
      p={4}
      color="white"
      justifyContent="flex-start"
    >
      <Heading as="h2" size={{base:"lg", md:"md", lg:"lg"}} noOfLines={1}>
       <Link to="/"> Lets Go Shopping</Link>
      </Heading>

      <FormControl  mx="3rem">
        <Input type="text" placeholder="search your desire" color="white" />
      </FormControl>

      <Menu display="flex">
        <MenuButton
          bg="black"
          color="green"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          display="flex"
        >
          <span>
            <Icon mx="2px" as={FaShoppingCart} />
          </span>
        
          <span className="space">
           10
          </span>
        </MenuButton>
        <MenuList bg="black" color="blue" px="5">cart is empty</MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
