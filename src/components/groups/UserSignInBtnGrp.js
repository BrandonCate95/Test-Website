import React from 'react'
import SignInLinkWithRouter from '../links/SignInLinkWithRouter'
import SignUpLinkWithRouter from '../links/SignUpLinkWithRouter'
import PropTypes from 'prop-types'
import CodeVerifyLink from '../links/CodeVerifyLink'
import { connect } from 'react-redux'
import UserProfileMenu from '../menus/UserProfileMenu'

const UserSignInBtnGrp = (props) => (
    <React.Fragment>
        {!props.isLoggedIn &&
            <React.Fragment>
                <SignInLinkWithRouter/>
                <SignUpLinkWithRouter/>
            </React.Fragment>
        }
        {props.isLoggedIn &&
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
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    emailVerified: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        username: state.user.username,
        emailVerified: state.user.emailVerified,
    }
}

export default connect(
    mapStateToProps,
    null
)(UserSignInBtnGrp)