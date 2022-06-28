import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasketRounded } from "@material-ui/icons"
import { Badge } from "@material-ui/core"


const Container = styled.div`
height: 4vw;
`


const Wrapper = styled.div`
padding: 1vh 2vw;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
    font-size: 1.4vw;
    cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.05vw solid lightgrey;
  flex:.5;
  display: flex;
  align-items: center;
  margin-left: 2.5vw;
  margin-bottom: .5vw;

  padding: .5vh;
`
const Input = styled.input`
  border: none;
  //align-itens: left;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h1`
  font-size: 2.3vw;
  font-weight: bold;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;
const MenuItem = styled.div`
font-size: 1.2vw;
cursor: pointer;
margin-left: 2.5vw;
`



const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style= {{color:"gray, fontSize:1.6"}}/>
            </SearchContainer>
        </Left>
        <Center><Logo>Rebranded.</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
        <ShoppingBasketRounded/>
        </Badge>
          </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar