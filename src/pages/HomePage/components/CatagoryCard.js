import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialIcon from '@material/react-material-icon'
import Button from '../../../components/mdc/Button'

const Col4 = styled.div`
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    position: relative;
    width: 100%;
`

const Card = ({catagoryName, symbolName}) => (
    <Col4>
        <Button
            link
            linkTo={`/Search?q=${catagoryName}`}
            style={{display: "flex", flexDirection: "column", height: "auto", padding: "0", margin:"0 auto"}}
            neutral
        >
            <MaterialIcon 
                className="mdc-theme-primary--color" 
                style={{
                    fontSize: "calc(4vh + 4vw)", 
                    width: "calc(4vh + 4vw)", 
                    height: "calc(4vh + 4vw)", 
                    marginRight: "0",
                }} 
                icon={symbolName} 
            />
            {catagoryName}
        </Button>
    </Col4>
)

Card.propTypes = {
    catagoryName: PropTypes.string.isRequired,
    symbolName: PropTypes.string.isRequired
}

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const CatagoryCard = (props) => (
    <Row>
        {props.catagoryList.map((item) => 
            <Card key={item.catagoryName} catagoryName={item.catagoryName} symbolName={item.symbolName} />
        )}
    </Row>
)

CatagoryCard.propTypes = {
    catagoryList: PropTypes.array.isRequired,
}

export default CatagoryCard;
