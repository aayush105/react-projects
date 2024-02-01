import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4">
        <HStack 
            maxW="70rem" 
            h="16" 
            justify="space-between" 
            mx="auto"
            // bgColor="red"
        >
            <Icon 
                as={FaBars} 
                onClick={onOpen} 
                display={{
                    base:"block",
                    lg:"none"
            }}/>
            <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton>
                        <Icon as={FaRegCircleUser} fontSize="24px"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
        </HStack>
    </Box>
  )
}

export default TopNav