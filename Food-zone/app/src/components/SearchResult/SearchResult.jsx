import styled from "styled-components";

const SearchResult = () => {
  return (
    <FoodCardContainer>
        <FoodCards></FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;