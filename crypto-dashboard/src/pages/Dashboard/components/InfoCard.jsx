import { Tag, Text } from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'

const InfoCard = ({imgUrl, text, tagText, inverted}) => {
  return (
    <CustomCard 
        bgColor={inverted ? "p.purple" : "white"}
        bgImage={imgUrl} 
        bgSize="cover" 
        bgRepeat="no-repeat"
    >
        <Tag 
            bg={inverted ? "white" : "p.purple"} 
            color={inverted ? "p.purple" : "white"} 
            borderRadius="full"
        >
            {tagText}
        </Tag>
        <Text 
            color={inverted ? "white" : "black.80"}
            textStyle="h5" 
            fontWeight="medium" 
            mt="4"
        >
            {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard