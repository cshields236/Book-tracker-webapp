import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

class FlipBook extends Component{
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            loading: false

        }
    }
    render() {
        return (
            <Flippy
                flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}
                style={{ width: '200px', height: '300px' }}
            >
                <FrontSide style={{
                    backgroundColor: '#41669d',
                }} >
                    {this.props.title}
                    {this.props.author}
                </FrontSide>

                <BackSide
                    style={{ backgroundColor: '#175852' }}>
                    {this.props.genre}
                </BackSide>



            </Flippy>

        )
    }

}

export default FlipBook;
