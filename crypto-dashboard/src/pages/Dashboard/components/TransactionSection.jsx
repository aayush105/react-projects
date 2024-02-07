import { Box, Button, Divider, Flex, Grid, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { PiCurrencyBtcFill, PiCurrencyInrFill } from "react-icons/pi";
import { Fragment } from "react";

const TransactionSection = () => {

    const transactions = [
        {
            id: "1",
            icon: PiCurrencyInrFill,
            text: "NRP Deposit",
            amount: "+ ₹81,123.10",
            timeStamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: PiCurrencyBtcFill,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timeStamp: "2022-05-27 12:32 PM",
        },
        {
            id: "3f",
            icon: PiCurrencyInrFill,
            text: "NRP Deposit",
            amount: "+ ₹81,123.10",
            timeStamp: "2022-06-09 7:06 PM",
        },
    ];
  return (
    <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black.80">Recent Transaction</Text>
        <Stack spacing="4">
            {transactions.map((transaction,i)=>(
              <Fragment key={transaction.id}>
                {i !== 0 && <Divider /> }
                  <Flex
                    gap="4"
                    w="full"
                  >
                    <Grid 
                        placeItems="center" 
                        boxSize={10} 
                        borderRadius="full" 
                        bg="black.5"
                    >
                        <Icon as={transaction.icon} />
                    </Grid>
                    <Flex justify="space-between" w="full">
                        <Stack spacing={0}>
                            <Text textStyle="h6">{transaction.text}</Text>
                            <Text fontSize="sm" color="black.80" textStyle="h6">{transaction.timeStamp}</Text>
                        </Stack>
                        <Text textStyle="h6">{transaction.amount}</Text>
                    </Flex>
                  </Flex> 
              </Fragment> 
            ))}
        </Stack>
        <Button w="full" mt="6" colorScheme="gray">View All</Button>
    </CustomCard>
  )
}

export default TransactionSection