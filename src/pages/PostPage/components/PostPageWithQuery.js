import React from 'react'
import PropTypes from 'prop-types'
import NavPageTemplate, { NavBarContainer, SideBarContainer, PageContentContainer } from '../../../components/groups/NavPageTemplate'
import Loadable from 'react-loadable'
import Spinner from '../../../components/misc/Spinner'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner primary /></div>

const NavBar = Loadable({
  loader: () => import('../../../components/groups/NavBarSearch&Post'),
  loading: Loading,
})

const PostPageSideBarContent = Loadable({
  loader: () => import('./PostPageSideBarContent'),
  loading: Loading,
})

const PostPageContent = Loadable({
  loader: () => import('./PostPageContent'),
  loading: Loading,
})

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