import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { S3Image } from 'aws-amplify-react'
import styled from 'styled-components'
import Card from '../mdc/Card'

const StyledCard = styled(Card)`
    display: flex !important;
    flex-direction: row !important;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    position: relative !important;
`

const ImgContainer = styled.div`
    flex: 0 0 40%;
    max-width: 40%;
    width: 100%;
    position: relative;
    border-right: 1px solid #e4e4e4;
    div{
        div{
            position: static !important;
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 60%;
    max-width: 60%;
    width: 100%;
    position: relative;
`

const Title = styled.h1`
    margin: 10px 0 10px 10px;
`

const UserContainer = styled.div`
    display: flex;
    margin-left: 10px;
`

const UserLogo = styled(S3Image)`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

const Author = styled.h4`
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Desc = styled.p`
    margin: 10px;
`

const ContainerShowHide = styled.div`
    opacity: ${props => props.show ? '0' : '1'}
`

class HorizontalCard extends React.Component {

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
        const {link, identityId, imgKey, title, logoKey, author, desc} = this.props
        console.log(identityId)
        return(
            <ContainerShowHide show={this.state.show}>
                <Link to={link} style={{textDecoration: "none", color: "inherit"}}>
                    <StyledCard
                        style={{margin: "10px 0"}}
                    >
                        <ImgContainer className="img-container--16-9">
                            <S3Image 
                                level="protected"
                                identityId={identityId}
                                imgKey={imgKey} 
                                onLoad={this.handleOnLoad.bind(this)}
                            />
                        </ImgContainer>
                        <ContentContainer>
                            <Title className="mdc-typography--headline4">{title}</Title>
                            <UserContainer>
                                <UserLogo 
                                    level="protected"
                                    identityId={identityId}
                                    imgKey={logoKey}
                                />
                                <Author className="mdc-typography--headline6">{author}</Author>
                            </UserContainer>
                            <Desc className="mdc-typography--body1">{desc}</Desc>
                        </ContentContainer>      
                    </StyledCard>
                </Link>
            </ContainerShowHide>
        )
    }
}

HorizontalCard.propTypes = {
    link: PropTypes.string.isRequired,
    identityId: PropTypes.string.isRequired,
    imgKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    logoKey: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default HorizontalCard