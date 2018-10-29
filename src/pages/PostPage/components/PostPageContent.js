import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AuthorTag from '../../../components/groups/AuthorTag'
import S3Image from '../../../components/aws-amplify-react/S3Image'

import Loadable from 'react-loadable'
import Spinner from '../../../components/misc/Spinner'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner primary /></div>

const JsxParser = typeof window !== 'undefined' ? Loadable({
    loader: () => import('react-jsx-parser'),
    loading: Loading,
}) : () => <div></div>

const MainCol = styled.div`
    display: flex;
    flex: 0 0 50%;
    position: relative;
    max-width: 50%;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
`

const MainTitle = styled.div`
    margin: 20px 0;
`

const StyledMainImgContainer = styled.div`
    position: relative;
    div{
        position: static !important;
    }
`

const StyledDiv = styled.div`
    & > div{
        font-size: 24px;
        font-family: Futura, "Trebuchet MS", Arial, sans-serif;
        color: rgb(73, 73, 73);
        text-align: left;
    }
    img{
        width: auto;
        margin: 5px auto;
        display: block;
        float: none;
        vertical-align: top;
        cursor: pointer;
        position: relative;
        max-width: 100%;
    }
    p > div {
        margin: 0 auto;
    }
`

const PostPageContent = ({title, identityId, userData, imgKey, imgClass, content}) => (
    <MainCol>
        <MainTitle className="mdc-typography--headline2">{title}</MainTitle>
        <AuthorTag 
            identityId={identityId}
            author={userData.username}
            data={userData}
        />
        <StyledMainImgContainer className="img-container--16-9">
            <S3Image 
                identityId={identityId} 
                level="protected" 
                imgKey={imgKey} 
                className={imgClass} 
            />
        </StyledMainImgContainer>
        <StyledDiv className="custom-theme fr-box fr-basic">
            <div className="fr-element fr-view">
                {/* <div dangerouslySetInnerHTML={{__html: content}} /> */}
                <JsxParser
                    className="fr-element"
                    components={{ S3Image }}
                    jsx={content}                        
                />
            </div>
        </StyledDiv>
    </MainCol>
)

PostPageContent.propTypes = {
    title: PropTypes.string.isRequired,
    identityId: PropTypes.string.isRequired,
    userData: PropTypes.shape({
        username: PropTypes.string.isRequired,
    }),
    imgKey: PropTypes.string.isRequired,
    imgClass: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default PostPageContent