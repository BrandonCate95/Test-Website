import React from 'react'
import Button from '../mdc/Button'

const AddPostPageLink = () => (
    <Button
        link
        linkTo="/AddPage"
        raised
        style={{margin: "5px"}}
    >
        Write
    </Button>
)

export default AddPostPageLink