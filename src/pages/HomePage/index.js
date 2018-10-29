import React from 'react'
import SearchBar from '../../components/inputs/SearchBar'
import UserSignInBtnGrp from '../../components/groups/UserSignInBtnGrp'
import CatagoryCard from './components/CatagoryCard'
import styled from 'styled-components'
import { HomeLogo } from '../../components/links/NavBarHomeLink'
import Button from '../../components/mdc/Button'

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MainRow = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainContainer = styled.div`
  width: 40%;
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  margin-bottom: 25px !important;
`

class Home extends React.Component {

    catagoryGenerator = () => {
      const catagoryList = [
        {catagoryName: "test", symbolName: "favorite"},
        {catagoryName: "billy", symbolName: "casino"},
        {catagoryName: "friend", symbolName: "fitness_center"}
      ];
      return catagoryList;
    }

    render(){ 
      return(
        <React.Fragment>

          <StyledNav>
            <Button
              link
              linkTo="/About"
              neutral
              style={{margin: "5px auto 5px 5px"}}
            >
              A boot
            </Button>
            <UserSignInBtnGrp />
          </StyledNav>

          <MainRow>      
            <MainContainer>
              <h2 className="mdc-typography--headline1">
                <HomeLogo />
              </h2>        
              <StyledSearchBar />
              <CatagoryCard catagoryList={this.catagoryGenerator()}/>        
            </MainContainer>
          </MainRow>

        </React.Fragment>      
      );
    }
  }

export default Home;