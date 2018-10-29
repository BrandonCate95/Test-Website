import React from 'react'
import SignInLinkWithRouter from '../links/SignInLinkWithRouter'
import SignUpLinkWithRouter from '../links/SignUpLinkWithRouter'
import PropTypes from 'prop-types'
import CodeVerifyLink from '../links/CodeVerifyLink'
import { connect } from 'react-redux'
import UserProfileMenu from '../menus/UserProfileMenu'

const UserSignInBtnGrp = (props) => (
    <React.Fragment>
        {!props.authenticated &&
            <React.Fragment>
                <SignInLinkWithRouter/>
                <SignUpLinkWithRouter/>
            </React.Fragment>
        }
        {props.authenticated &&
            <React.Fragment>
                { !props.emailVerified &&
                    <CodeVerifyLink />
                }
                <UserProfileMenu
                    username={props.username}
                />
            </React.Fragment>
        }   
    </React.Fragment>
)
    
UserSignInBtnGrp.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    emailVerified: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated,
        username: state.user.username,
        emailVerified: state.user.emailVerified,
    }
}

export default connect(
    mapStateToProps,
    null
)(UserSignInBtnGrp)