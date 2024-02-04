import { HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { CiCircleInfo } from "react-icons/ci";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6"> 
        <Stack>
            <HStack  color="black.80">
                <Text fontSize="14px">Total Portfolio value</Text>
                <Icon as={CiCircleInfo}/>   
            </HStack>
            <Text fontSize="24px">
                RS 13,713,777
            </Text>
        </Stack>
    </HStack>
  )
}

export default PortfolioSection