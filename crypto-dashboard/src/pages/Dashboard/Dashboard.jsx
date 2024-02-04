import DashboardLayout from "../../Components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div>
        <PortfolioSection />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;