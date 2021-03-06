import React, { Component } from 'react'
import loading from "../loading.gif"
import "../App.css";
export default class Spinner extends Component {
    render() {
        return (
            <div className='fullscreencard flex justify-center glass z-30'>
                <img src={loading} alt = "loading..." className='absolute spinner z-40'></img>
            </div>
        )
    }
}
