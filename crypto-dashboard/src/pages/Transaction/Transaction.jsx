import {Button, Card, Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";

const Transaction = () => {
  return (
    <DashboardLayout>
      <Flex
        justify="end" mt="6" mb="3"
      >
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>Export Csv</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction;