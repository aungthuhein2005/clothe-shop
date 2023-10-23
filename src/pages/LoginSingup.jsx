import React from 'react'
import './CSS/Loginsignup.css'
function LoginSingup() {
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" name="" id="" placeholder='Your Nanme' />
                    <input type="email" name="" id="" placeholder='Email Address' />
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By conitnuing, i agree to the term of use & privacy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSingup
