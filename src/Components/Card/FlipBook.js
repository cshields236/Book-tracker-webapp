import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import cover from '../../assets/cover.jpg'
import "./styles.css";
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
                style={{ width: '20%', height: '10%', padding: '30px', display: 'flexbox' }}
            >
                <FrontSide style={{
                    backgroundColor: '	#DDA0DD',
                    
                }} >
                    <img className='photo' src={cover} alt='cover' />
                    <strong>
                    {this.props.title}
                    </strong>
                    <br />
                    {this.props.author}
                </FrontSide>

                <BackSide
                    style={{ backgroundColor: '#CCCCFF',  fontSize: 'larger', paddingTop: '30%' }}>
                        
                  <b>Genre:</b>   {this.props.genre}
                  <b>Number of Pages:</b>   {this.props.pages}  
                  <b>Start Date:</b>   {this.props.startdate}
                  <br />
                  <b>End Date:</b>   {this.props.enddate}
                  <br />
                  <b>Progress:</b>   {this.props.progress}

                </BackSide>
            </Flippy>

        )
    }

}

export default FlipBook;
