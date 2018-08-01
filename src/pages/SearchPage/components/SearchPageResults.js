import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getKeyWithoutPrefix from '../../../utilities/getKeyWithoutPrefix'
import HorizontalCard from '../../../components/groups/HorizontalCard'

const StyledCol = styled.div`
    flex: 0 0 ${props => props.sideBarOpen ? '70%' : '65%'};
    max-width: ${props => props.sideBarOpen ? '70%' : '65%'};
    flex-direction: column;
    position: relative;
    width: 100%;
    margin-left: ${props => props.sideBarOpen ? '40px' : '200px'};
`

const SearchResults = ({sideBarOpen, data}) => (
    <StyledCol sideBarOpen={sideBarOpen}>
        {data.searchContent.map((item) => 
            <HorizontalCard 
                key={item.title} 
                imgKey={item.imgKey} 
                imgLevel={'protected'} 
                identityId={item.identityId}
                title={item.title} 
                link={`/${item.userData.username}/${item.postId}`}
                desc={item.searchDescription} 
                author={item.userData.username} 
                logoKey={getKeyWithoutPrefix(item.userData.logoImg.file.key)}zzz
            />
        )}
    </StyledCol>
)

SearchResults.propTypes = {
    sideBarOpen: PropTypes.bool,
    data: PropTypes.object,
}

export default SearchResults