import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBarHomeLink from '../../../components/links/NavBarHomeLink'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 35px;
  border-radius: 2px;
  background-color: #fff;
`

const StyledHeader = styled.h3`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`

const AuthPageTemplate = ({handleSubmit, children}) => (
    <Row className="mdc-theme-background--grey-light">
        <ColumnForm onSubmit={handleSubmit} className="mdc-elevation--z2">

            <StyledHeader>
                <NavBarHomeLink 
                    className="mdc-typography--headline2"
                />
            </StyledHeader>   

            {children}

        </ColumnForm>
    </Row>
)

AuthPageTemplate.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }

export default AuthPageTemplate