import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import S3Image from '../aws-amplify-react/S3Image'

const ContainerShowHide = styled.div`
    opacity: ${props => props.show ? '0' : '1'}
`

class OnLoadS3Image extends React.Component{

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
        const {level, identityId, imgKey, className} = this.props
        return(
            <ContainerShowHide show={this.state.show}>
                <S3Image
                    level={level}
                    identityId={identityId}
                    imgKey={imgKey}
                    className={className}
                    onLoad={this.handleOnLoad.bind(this)}
                />
            </ContainerShowHide>
        )
    }
}

OnLoadS3Image.propTypes = {
    level: PropTypes.string.isRequired,
    identityId: PropTypes.string.isRequired,
    imgKey: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default OnLoadS3Image