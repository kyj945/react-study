import React, { Component } from 'react';
import './Home.css';
import tempimg from '../img/temp_img.jpg';
class Home extends Component {
    render() {
        return (
            <div className="home-container">
             
                        <div className="home-center" >
                            <img src={tempimg} alt="tempimg" />
                        </div>                    
                    <h1 className="home-title">WithBIke</h1>
                
            </div>
        )
    }
}

export default Home;