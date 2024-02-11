import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { IoMdMail } from "react-icons/io";

const SupportCard = ({leftComponent, icon, title, text}) => {
  return (
    <Flex 
    gap={6} 
    flexDir={{
        base: "column",
        xl: "row",
    }}>
        <Stack maxW="380px">
            <Icon boxSize="6" color="p.purple" as={icon} />
            <Text 
                fontWeight="medium" 
                as="h1" 
                textStyle="h1"
            >
                {title}
            </Text>
            <Text 
                fontSize="sm" 
                color="black.60"
            >
                {text}
            </Text>
        </Stack>
        <Box maxW="550px" w="full">{ leftComponent }</Box>
    </Flex>
  )
}

export default SupportCard