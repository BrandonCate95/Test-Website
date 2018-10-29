import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import S3Image from '../aws-amplify-react/S3Image'
import { CardMedia } from '@material/react-card'
import getKeyWithoutPrefix from '../../utilities/getKeyWithoutPrefix'
import GetPost from '../../queries/components/GetPost'
import PostCRUDPopups from './PostCRUDPopups'
import Card from '../mdc/Card'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const UserLogo = styled(S3Image)`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 10px;
`

const CardContainer = styled.div`
    flex: 0 0 32.3%;
`

const ButtonsContainer = styled.div`
    margin-top: 5px;
    button{
        padding: 0px !important;
    }
`

const StyledS3Image = styled(S3Image)`
    max-width: 100%;
`

const ContainerShowHide = styled.div`
    opacity: ${props => props.show ? '0' : '1'}
`

class VerticalCard extends React.Component{

    state={
        show: true,
    }

    componentWillMount = () => {
        if(this.props.imgKey === '#'){
            this.handleOnLoad()
        }
    }

    handleOnLoad = () => {
        this.setState({show: false})
    }

    render(){
        const {drafts, username, postId, imgKey, identityId, title, logoImg, draftEdit} = this.props
        return(
            
                <CardContainer>
                    <ContainerShowHide show={this.state.show}>
                        <Link 
                            to={{
                                pathname: drafts ? `/AddPage` : `/${username}/${postId}`, 
                                state: { postId },
                            }}
                            style={{textDecoration: "none"}}
                        >
                            <Card>
                                <CardMedia wide>
                                    <StyledS3Image
                                        imgKey={drafts ? `imgs/${imgKey}` : imgKey}
                                        level="protected"
                                        identityId={identityId}
                                        onLoad={this.handleOnLoad.bind(this)}
                                    />
                                </CardMedia>                    
                                <h1 
                                    style={{margin: "10px"}} 
                                    className="mdc-typography--headline6"
                                >
                                    {title}
                                </h1>
                                <Row>
                                    <UserLogo 
                                        imgKey={getKeyWithoutPrefix(logoImg.file.key)}
                                        level="protected"
                                        identityId={identityId}
                                    />
                                    <div className="mdc-typography--subtitle2">
                                        {username}
                                    </div>
                                </Row>
                            </Card>
                        </Link>
                
                        {draftEdit &&
                            <ButtonsContainer>
                                <GetPost postId={postId}>
                                    <PostCRUDPopups postId={postId} />
                                </GetPost>
                            </ButtonsContainer> 
                        }
                    </ContainerShowHide>
                </CardContainer>
            
        )
    }
} 

VerticalCard.propTypes = {
    drafts: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    imgKey: PropTypes.string.isRequired,
    identityId: PropTypes.string,
    title: PropTypes.string.isRequired,
    logoImg: PropTypes.shape({
        file: PropTypes.shape({
            key: PropTypes.string.isRequired,
        })
    }),
    draftEdit: PropTypes.bool.isRequired,
}

export default VerticalCard