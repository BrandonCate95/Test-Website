import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import S3Image from '../aws-amplify-react/S3Image'
import SubscribeBtn from '../Buttons/SubscribeBtn'
import getKeyWithoutPrefix from '../../utilities/getKeyWithoutPrefix'
import { default_user_logo_key } from '../../globals'

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    z-index: 2;
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

const AuthorTag = ({data}) => (
    <StyledDiv>
        <UserLogo 
            identityId={data.identityId} 
            level="protected" 
            imgKey={getKeyWithoutPrefix(typeof data === 'undefined' ? default_user_logo_key : data.logoImg.file.key)} 
        />
        <StyledColumnContainer>
            <StyledHeader>
                {data.username}
            </StyledHeader>
            <SubscribeBtn />       
        </StyledColumnContainer>
    </StyledDiv>
)

AuthorTag.defaultProps = {
    data: {
        identityId: '',
        username: 'anon',
        logoImg: {
            file: {
                key: ''
            }
        }
    }
}

AuthorTag.propTypes = {
    data: PropTypes.shape({
        identityId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        logoImg: PropTypes.shape({
            file: PropTypes.shape({
                key: PropTypes.string.isRequired,
            })
        })
    })
}

export default AuthorTag