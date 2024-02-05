import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineFileDownload } from 'react-icons/md';
import { BiMoneyWithdraw } from "react-icons/bi";

const PortfolioSection = () => {
  return (
    <HStack 
      justify="space-between" 
      bg="white" 
      borderRadius="xl" 
      p="6"
      align={{
        base: "flex-start",
        xl: "center"
      }} 
      flexDir={{
        base: "column",
        xl: "row"
      }}
      spacing={{
        base: 4,
        xl:0
      }}
    >
      {/* info */}
      <HStack 
        spacing={{
          base: 0,
          xl: 16
        }}
        align={{
          base: "flex-start",
          xl: "center"
        }} 
        flexDir={{
          base: "column",
          xl: "row"
        }}
      >
          <Stack>
              <HStack  color="black.80">
                  <Text fontSize="sm">Total Portfolio value</Text>
                  <Icon as={CiCircleInfo}/>   
              </HStack>
              <Text textStyle="h2" fontWeight="medium">RS 13,713,777</Text>
          </Stack>
          <Stack>
              <HStack  color="black.80">
                  <Text fontSize="sm">Wallet Balance</Text>
              </HStack>
              <HStack 
                spacing={4}
                align={{
                  base: "flex-start",
                  sm: "center"
                }} 
                flexDir={{
                  base: "column",
                  sm: "row"
                }}
              >
                <HStack>
                  <Text textStyle="h2" fontWeight="medium">22.6462656</Text>
                  <Tag colorScheme='gray' fontWeight="medium">BTC</Tag>
                </HStack>
                <HStack>
                  <Text textStyle="h2" fontWeight="medium">RS 2200</Text>
                  <Tag colorScheme='gray' fontWeight="medium">NP</Tag>
                </HStack>
              </HStack>
          </Stack>
        </HStack>
        
        {/* buttons */}
        <HStack>
          <Button
            leftIcon={
              <Icon as={MdOutlineFileDownload} />
            }
          >Deposit</Button>
          <Button
            leftIcon={
              <Icon as={ BiMoneyWithdraw } />
            }
          >Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSection