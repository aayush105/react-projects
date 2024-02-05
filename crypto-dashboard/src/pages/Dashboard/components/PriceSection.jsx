import { Button, Card, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { FaArrowTrendUp } from "react-icons/fa6"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"

const PriceSection = () => {
  const timeStamps = ["10:10 AM", "11:10 AM", "12:10 PM", "1:10 PM", "2:10 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
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
              <HStack color="green">
                <Icon as={FaArrowTrendUp } />
                <Text fontSize="sm" fontWeight="bold">22%</Text>{" "}
              </HStack>
            </HStack>
          </HStack>    
        </Stack>
        <HStack>
        <Button
          leftIcon={
            <Icon as={ CiCirclePlus } />
          }
        >Buy</Button>    
        <Button
          leftIcon={
            <Icon as={ CiCircleMinus } />
          }
        >Sell</Button>      
        </HStack>
      </Flex>
      <Tabs variant='soft-rounded'>
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {
              ["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab
                  _selected={{ bg:"white" }} 
                  key={tab} 
                  fontSize="sm" 
                  p="6px" 
                  borderRadius="4"
                >
                  {tab}
                </Tab>
              ))
            }
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/Graph.svg" mt="3rem" />
            <HStack justify="space-between">
              {
                timeStamps.map((timeStamps) => (
                  <Text key={timeStamps} fontSize="sm" color="black.80" >
                    {timeStamps}
                  </Text>
                ))
              }
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  )
}

export default PriceSection