import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import getURLParamsByName from '../../utilities/getURLParamsByName'
import TextField, {Input} from '@material/react-text-field'
import Button from '../mdc/Button'
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
    height: auto !important;
    input{
        height: auto !important;
    }
`

class SearchBar extends React.Component {
    
    state = {
        search: getURLParamsByName('q') || ""
    };

    submitSearch = (e) => {
        e.preventDefault();
        //dont use redirect as it pops off previous history state
        this.props.history.push(`/Search?q=${this.state.search}`);
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    componentWillReceiveProps(e){
        this.setState({ search: getURLParamsByName('q') || "" });
    }

    render(){
      return(
        <form className={this.props.className} onSubmit={this.submitSearch}>
            <StyledTextField
                fullWidth
                label='Search'
                trailingIcon={
                    <Button 
                        type="submit"
                        style={{
                            right: "0px", 
                            bottom: "-6px", 
                            padding: "0", 
                            pointerEvents: "auto", 
                            cursor: "pointer"
                        }} 
                        icon
                    >
                        search
                    </Button>
                }
            >
                <Input
                    style={{height: "auto !important"}}
                    placeholder='Search'
                    value={this.state.search}
                    onChange={this.handleChange}
                />
            </StyledTextField>  
        </form>
      );
    }
}

SearchBar.propTypes = {
    history: PropTypes.object.isRequired,
    className: PropTypes.string,
}

//adds access to history prop
export default withRouter(SearchBar)