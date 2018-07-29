import React from 'react'
import PropTypes from 'prop-types'
import formatDraftData from '../../../utilities/formatDraftData'
import Button from '../../../components/mdc/Button'
import CreateDraft from '../../../mutations/components/CreateDraft'
import UpdateDraft from '../../../mutations/components/UpdateDraft'

class AddPostPageSaveDraftBtn extends React.Component{

    state = {
        loading: false,
    }

    handleSave = async () => {
        this.setState({loading: true})
        if(!this.props.draftData.postId){
            const data = await this.props.createDraftMutation(formatDraftData(this.props.draftData))
            this.props.setPostId(data.data.createDraft.postId)
        }else{
            await this.props.updateDraftMutation(formatDraftData(this.props.draftData))
        }
        this.setState({loading: false})
    }

    render(){
        return(
            <Button
                title="save page"
                onClick={this.handleSave.bind(this)}
                icon
                error={!this.props.draftData.postId}
                loading={this.state.loading}
            >
                save
            </Button> 
        )
    }
}

AddPostPageSaveDraftBtn.propTypes = {
    draftData: PropTypes.shape({
        postId: PropTypes.string.isRequired,
    }),
    setPostId: PropTypes.func.isRequired,
    createDraftMutation: PropTypes.func,
    updateDraftMutation: PropTypes.func,
}

const Container1 = (props) => (
    <CreateDraft>
        <AddPostPageSaveDraftBtn 
            {...props}
        />
    </CreateDraft>
)

const Container2 = (props) => (
    <UpdateDraft>
        <Container1 
            {...props}
        />
    </UpdateDraft>
)

export default Container2