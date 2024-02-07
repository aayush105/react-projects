import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid 
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem
        colSpan={1}
        >
          <PriceSection />
        </GridItem>
        <GridItem
        colSpan={1}
        >
          <TransactionSection />
        </GridItem>
        <GridItem
        colSpan={1}
        >
          <InfoCard 
            imgUrl="/dot.svg" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe officiis ex quibusdam corporis."
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem
        colSpan={1}
        >
          <InfoCard 
            imgUrl="/grid.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe officiis ex quibusdam corporis." 
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard;