import React from 'react'
import styled from 'styled-components'
import TabContainer, { Navs, Nav, Panels, Panel } from '../../../components/mdc/Tab'
import UserPagePosts from './UserPagePosts'
import ListUserPosts from '../../../queries/components/ListUserPosts'
import ListUserDrafts from '../../../queries/components/ListUserDrafts'
import UserPageDrafts from './UserPageDrafts'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
    width: 100%;
    margin: 0 auto;
`

const StyledPanel = styled(Panel)`
    margin-bottom: 20px !important; 
    flex-wrap: wrap !important;
    &>div{
        margin: 1.5% 0;
    }
    &>div:nth-child(3n-1){
        margin: 1.5%;
    }
`

const UserPageTabs = ({userMatch, draftEdit, userData}) => (
    <Column>
        <TabContainer>
            <Navs
                tab-role="navs"
            >
                <Nav tab-role="nav">Articles</Nav>
                {userMatch &&
                    <Nav tab-role="nav">Drafts</Nav>
                }
            </Navs>

            <Panels tab-role="panels">
                <StyledPanel tab-role="panel">
                    <ListUserPosts identityId={userData.identityId}>
                        <UserPagePosts 
                            logoImg={userData.logoImg}
                            username={userData.username}
                        />
                    </ListUserPosts>
                </StyledPanel>
                
                {userMatch &&
                    <StyledPanel tab-role="panel">
                        <ListUserDrafts>
                            <UserPageDrafts 
                                logoImg={userData.logoImg}
                                username={userData.username}
                                draftEdit={draftEdit}                                    
                            />
                        </ListUserDrafts>
                    </StyledPanel>
                }
            </Panels>
        </TabContainer>
    </Column>
)

export default UserPageTabs