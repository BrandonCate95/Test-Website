import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OnLoadS3Image from '../../../components/misc/OnLoadS3Image'
import UserPageTabs from './UserPageTabs'
import getKeyWithoutPrefix from '../../../utilities/getKeyWithoutPrefix'

const StyledH4 = styled.h4`
    margin: 0px;
    margin-left: 20px;
    font-size: calc(3vw + 3vh);
    line-height: 0;
    font-family: Futura, Helvetica, sans-serif; 
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    color: #666666;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const UserColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 66.66667%%;
    position: relative;
    max-width: 66.66667%%;
    width: 100%;
    margin: 0 auto;
`

const Row = styled.div`
    display: flex;
`

const UserMainRow = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4em;
`

const UserDescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    margin-top: 1.5rem;
    font-size: 22px !important;
    text-align: center;
    font-family: Futura, Helvetica, sans-serif; 
    color: #666666;
`

const PageLogoContainer = styled.div`
    display: flex;
    flex: 0 0 100%;
    position: relative;
    max-width: 100%;
    width: 100%;
`

const UserLogo = styled(OnLoadS3Image)`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

const TabsContainer = styled.div`
    display: flex;
    margin-top: 4em;
`

const UserPageContent = ({data, username, userMatch}) => (
    <Column>
        <PageLogoContainer className="img-container--4-1">
            <OnLoadS3Image
                level="protected"
                identityId={data.identityId}
                imgKey={data.pageImg ? getKeyWithoutPrefix(data.pageImg.file.key) : '#'}
            />
        </PageLogoContainer>
        <Row>
            <UserColumn>
                <UserMainRow>
                    <UserLogo
                        level="protected" 
                        identityId={data.identityId}
                        imgKey={data.logoImg ? getKeyWithoutPrefix(data.logoImg.file.key) : '#'} 
                    />
                    <StyledH4>
                        {username}
                    </StyledH4>
                </UserMainRow>
                <UserDescriptionContainer>
                    {data.description}
                </UserDescriptionContainer>
            </UserColumn>
        </Row>
        <TabsContainer>   
            <UserPageTabs draftEdit={false} userMatch={userMatch} username={username} userData={data} />      
        </TabsContainer>
    </Column>         
)

UserPageContent.propTypes = {
    data: PropTypes.shape({
        identityId: PropTypes.string.isRequired,
        pageImg: PropTypes.shape({
            file: PropTypes.shape({
                key: PropTypes.string.isRequired,
            })
        }),
        logoImg: PropTypes.shape({
            file: PropTypes.shape({
                key: PropTypes.string.isRequired,
            })
        })
    }),
    username: PropTypes.string.isRequired,
    userMatch: PropTypes.bool.isRequired,
}

export default UserPageContent