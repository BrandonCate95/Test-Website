import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { S3Image } from 'aws-amplify-react'
import SubscribeBtn from '../Buttons/SubscribeBtn'
import getKeyWithoutPrefix from '../../utilities/getKeyWithoutPrefix'

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    z-index: 3;
`

const StyledColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    max-width: 100%;
`

const StyledHeader = styled.div`
    margin: auto 0;
    font-size: 18px;
    font-family: Futura, Helvetica, sans-serif; 
    font-weight: bold;
    color: #666666;
`

const UserLogo = styled(S3Image)`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

const AuthorTag = (props) => (
    <StyledDiv>
        <UserLogo 
            identityId={props.identityId} 
            level="protected" 
            imgKey={getKeyWithoutPrefix(props.data.logoImg.file.key)} 
        />
        <StyledColumnContainer>
            <StyledHeader>
                {props.author}
            </StyledHeader>
            <SubscribeBtn />       
        </StyledColumnContainer>
    </StyledDiv>
)

AuthorTag.defaultProps = {
    identityId: undefined,
}

AuthorTag.propTypes = {
    author: PropTypes.string.isRequired,
    identityId: PropTypes.string,
    data: PropTypes.shape({
        logoImg: PropTypes.shape({
            file: PropTypes.shape({
                key: PropTypes.string.isRequired,
            })
        })
    })
}

export default AuthorTag