import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import "./styles.css";
import Radn from 'randomcolor'
import { colors } from 'material-ui/styles';
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

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        let color = this.getRandomColor()
        return (
            <Flippy
                flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}
                style={{ width: '20%',padding: '30px'}}
            >
                <FrontSide style={{
                    backgroundColor: color,

                }} >
                    <img className='photo' src="http://127.0.0.1:5000/8" alt='cover' />

                </FrontSide>

                <BackSide
                    style={{ backgroundColor: '#ff5f6d', fontSize: 'larger', paddingTop: '30%' }}>
                    
                    <b>Title:</b>  
                    <br />
                        {this.props.title}
                    <br />
                    <b>Author:</b>
                    <br />
                    {this.props.author}
                    <br />
                    <b>Genre:</b>  <br />  {this.props.genre}


                </BackSide>

            </Flippy>

        )
    }

}

export default FlipBook;
