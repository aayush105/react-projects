import {Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionTable from "./components/TransactionTable";
import { IoSearchCircleOutline } from "react-icons/io5";

const Transaction = () => {

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex
        justify="end" mt="6" mb="3"
      >
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>Export Csv</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" w="full" justifyContent="space-between">
            <HStack>
              {
                tabs.map((tab)=> (
                  <Tab key={tab.name} display="flex" gap="2" pb="4">
                    {tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
                  </Tab>
                ))
              }
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents='none'>
              <Icon fontSize="25px" as={IoSearchCircleOutline} />
              </InputLeftElement>
              <Input type='search' placeholder='Search.......' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction;