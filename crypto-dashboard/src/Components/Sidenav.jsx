import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {

    const navLinks = [
        {
            icons: MdOutlineDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icons: GrTransaction,
            text: "Transactions",
            link: "/transactions",   
        },
    ];

  return (
    // this stack property === css property "display:flex" & "flex-direction:col"
    <Stack 
        justify="space-between" 
        boxShadow={{
            base:"none",
            lg: "lg"
        }} 
        w={{
            base:"full",
            lg:"16rem"
        }}
        h="100vh" 
    >
        <Box>
            <Heading 
                textAlign="center"
                as="h1" 
                fontSize="20px"
                pt="56px"
            >
                Crypto Dashboard
            </Heading>
            <Box mt="6" mx="3">
                {
                    navLinks.map((nav) =>
                        (
                            // this HStack === "display:flex" & "alignItem:center"
                            // 3 === 12px as in chakraui 4*3 = 12, 1=4px
                            <HStack 
                                borderRadius="10px"
                                key={nav.text} 
                                py="3" 
                                px="4" 
                                _hover={{
                                    bg: "#F3F3F7",
                                    color:"#171717"
                                }}
                                color="#797E82"
                            > 
                                <Icon 
                                    as={nav.icons}
                                />
                                <Text 
                                    fontSize="14px"
                                    fontWeight="medium" 
                                >
                                    {nav.text}
                                </Text>
                            </HStack>
                        ))
                }
            </Box>
        </Box>
        <Box mt="6" mx="3" mb="6">
            <HStack 
                borderRadius="10px"                
                py="3" 
                px="4" 
                _hover={{
                    bg: "#F3F3F7",
                    color:"#171717"
                }}
                color="#797E82"
            > 
                <Icon 
                    as={BiSupport}
                />
                <Text 
                    fontSize="14px"
                    fontWeight="medium" 
                >
                    Support
                </Text>
            </HStack>
        </Box>                
    </Stack>
  )
}

export default Sidenav;