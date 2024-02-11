import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../Components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import { FaMessage } from "react-icons/fa6";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="80px">
        <SupportCard 
          leftComponent={<ContactCard />} 
          title="Contact Us" 
          text="Have a question or just want to know more? Feel free to reach out to us." 
          icon={IoMdMail}
        />
        <SupportCard 
          title="Live Chat" 
          text="Don’t have time to wait for the answer? Chat with us now and Feel free to reach out to us." 
          icon={FaMessage}
          leftComponent={<InfoCard 
            imgUrl="/grid.svg"
            text="Chat with us now" 
            tagText="Chatbot"
            inverted={true}
          />}
        />
      </Stack>
    </DashboardLayout>
  )
}

export default Support;