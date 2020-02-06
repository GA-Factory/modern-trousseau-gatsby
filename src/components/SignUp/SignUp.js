import React from 'react'

import Button from '../Button/Button'
import './SignUp.css'


const SignUp = () => {
    return (

        <>
            <div className="wrapper">
            <h5 className="title">Obsessed with a dress?</h5><br></br>
            <div className="text-button">
            <input className="textInput" placeholder="sign up for updates!"/>
            <Button className="button-size"label="Submit" type="light-pink" />
            </div>
            </div>
        </>

    )
}

export default SignUp