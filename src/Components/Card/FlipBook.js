import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import "./styles.css";
class FlipBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            cover: null,
            base64File: '',
            loading: false

        }
    }


    render() {
        return (
            <Flippy
                flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}
                style={{ width: '20%', height: '10%', padding: '30px', display: 'flexbox' }}
            >
                <FrontSide style={{
                    backgroundColor: '#DDA0DD',

                }} >
                    <img className='photo' src="http://127.0.0.1:5000/8" alt='cover' />
                    <strong>
                        {this.props.title}
                    </strong>
                    <br />
                    {this.props.author}
                </FrontSide>

                <BackSide
                    style={{ backgroundColor: '#CCCCFF', fontSize: 'larger', paddingTop: '30%' }}>

                    <b>Genre:</b>   {this.props.genre}

                  
                </BackSide>
                
            </Flippy>

        )
    }

}

export default FlipBook;
