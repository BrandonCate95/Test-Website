import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserPageMainImgEditor from './UserEditPageMainImgEditor'
import UserPageLogoImgEditor from './UserEditPageLogoImgEditor'
import AutoHeightTextArea from '../../../components/inputs/AutoHeightTextArea'
import UserPageTabs from '../../UserPage/components/UserPageTabs'
import UpdateUserImg from '../../../mutations/components/UpdateUserImg' 

const StyledH4 = styled.h4`
    margin: 0px;
    margin-left: 20px;
    font-size: calc(5vw + 1vh);
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

const StyledAutoHeightTextArea = styled(AutoHeightTextArea)`
    margin: 0 !important;
    margin-top: 1.5rem !important;
    font-size: 22px !important;
    text-align: center;
    font-family: Futura, Helvetica, sans-serif; 
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

const TabsContainer = styled.div`
    display: flex;
    margin-top: 4em;
`


const UserPageEditContent = ({mainImgModel, handleMainImgModelChange, logoImgModel, handleLogoImgModelChange, username, description, handleInputChange, userMatch, userData, formatImgFile}) => (
    <Column>
        <PageLogoContainer className="img-container--4-1">
            <UpdateUserImg>
                <UserPageMainImgEditor 
                    model={mainImgModel} 
                    handleModelChange={handleMainImgModelChange}
                    formatImgFile={formatImgFile} 
                />
            </UpdateUserImg>
        </PageLogoContainer>
        <Row>
            <UserColumn>
                <UserMainRow>
                    <UpdateUserImg>
                        <UserPageLogoImgEditor 
                            model={logoImgModel} 
                            handleModelChange={handleLogoImgModelChange} 
                            formatImgFile={formatImgFile}
                        />
                    </UpdateUserImg>
                    <StyledH4>
                        {username}
                    </StyledH4>
                </UserMainRow>
                <UserDescriptionContainer>
                    <StyledAutoHeightTextArea
                        id="description-textarea"
                        name="description"
                        value={description}
                        handleTextAreaChange={handleInputChange}
                        placeholder="Your description..."
                    />
                </UserDescriptionContainer>
            </UserColumn>
        </Row>
        <TabsContainer>
            <UserPageTabs draftEdit={true} userMatch={userMatch} username={username} userData={userData}/>
        </TabsContainer>
    </Column>           
)

UserPageEditContent.propTypes = {
    mainImgModel: PropTypes.object.isRequired,
    handleMainImgModelChange: PropTypes.func.isRequired,
    logoImgModel: PropTypes.object.isRequired,
    handleLogoImgModelChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    userMatch: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
    formatImgFile: PropTypes.func.isRequired,
}

export default UserPageEditContent