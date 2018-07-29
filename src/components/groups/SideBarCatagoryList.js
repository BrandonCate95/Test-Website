import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const catagoryData = [
    {catagoryName: "test", symbolName: "favorite"},
    {catagoryName: "billy", symbolName: "casino"},
    {catagoryName: "friend", symbolName: "fitness_center"}
]

const SearchSideBarCatagory = (props) => (
    <Link to={`/Search?q=${props.catagoryName}`}
        className="mdc-list-item mdc-theme-neutral"
    >
        #{props.catagoryName}
    </Link>
)

SearchSideBarCatagory.propTypes = {
    catagoryName: PropTypes.string.isRequired,
    symbolName: PropTypes.string.isRequired,
}

const HeaderContainer = styled.div`
  margin-top: 10px;
  padding: 0 16px;
  text-transform: uppercase !important;
`

const CatagroyContainer = styled.div`
    margin-left: 16px;
`

//this is only for testing purposes not actually data passed or retrieved yet
const SearchSideBarCatagoryList = () => (
    <React.Fragment>
        <HeaderContainer 
            className="mdc-typography--subtitle1"
        >
            Trending
        </HeaderContainer>
        <CatagroyContainer>
            {catagoryData.map((catagory) => 
                <SearchSideBarCatagory 
                    key={catagory.catagoryName} 
                    symbolName={catagory.symbolName} 
                    catagoryName={catagory.catagoryName}
                />
            )}
        </CatagroyContainer>
    </React.Fragment>
)

export default SearchSideBarCatagoryList