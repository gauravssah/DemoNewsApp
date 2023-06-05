import React, { Component } from 'react'
import loading from './DubalBallLoding.gif'
export default class spinner extends Component {
    render() {
        return (
            <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
