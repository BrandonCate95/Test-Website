import React from 'react'
import PropTypes from 'prop-types'
import NavPageTemplate, { NavBarContainer, SideBarContainer, PageContentContainer } from '../../../components/groups/NavPageTemplate'
import NavBar from '../../../components/groups/NavBarSearch&Post'
import PostPageSideBarContent from './PostPageSideBarContent'
import PostPageContent from './PostPageContent'

const PostPageWithQuery = ({data}) => (
    <NavPageTemplate 
        navBarType="post"
        sideBarInitialOpen={false}
    >
        <NavBarContainer
            navpage-role="navbar"
        >
            <NavBar 
                title={data.getESPost.title}
            />
        </NavBarContainer>

        <SideBarContainer
            navpage-role="sidebar"
        >
            <PostPageSideBarContent />
        </SideBarContainer>

        <PageContentContainer
            navpage-role="page-content"
        >
            <PostPageContent
                {...data.getESPost}
            />
        </PageContentContainer>
    </NavPageTemplate>            
)

PostPageWithQuery.propTypes = {
    data: PropTypes.shape({
        getESPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
    })
}

export default PostPageWithQuery