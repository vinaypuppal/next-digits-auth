import React from 'react'
import Router from 'next/router'
import Phone, { isValidPhoneNumber } from 'react-phone-number-input'
import ReactCodeInput from 'react-code-input'
import NProgress from 'nprogress'

import PublicPage from '../hocs/PublicPage'
import Header from '../components/Header'
import { sendCode, verifyCode } from '../lib/authenticate'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneNumber: '',
      countryCode: '',
      isValid: false,
      showVerify: false,
      code: '',
      token: '',
      error: ''
    }
  }
  handelPhoneNumber (phoneNumber) {
    const isValid = isValidPhoneNumber(phoneNumber)
    const error = isValid ? '' : this.state.error
    this.setState({ phoneNumber, isValid, error })
  }
  handelPhoneNumberBlur () {
    if (!this.state.isValid && this.state.phoneNumber) {
      this.setState({ error: 'Enter valid phoneNumber' })
    } else {
      this.setState({ error: '' })
    }
  }
  handelCountryCode (countryCode) {
    this.setState({ countryCode })
  }
  handelCode (code) {
    this.setState({ code })
  }
  async handelSendCode (e, method = 'sms') {
    e && e.preventDefault()
    this.setState({ error: '', code: '', token: '' })
    NProgress.start()
    try {
      const token = await sendCode({
        phoneNumber: this.state.phoneNumber,
        countryCode: this.state.countryCode,
        method
      })
      NProgress.done()
      this.setState({
        token,
        showVerify: true
      })
    } catch (e) {
      NProgress.done()
      console.log(e)
      if (e.message === 'Request failed with status code 400') {
        e.message = 'Invalid PhoneNumber Provided!'
      }
      this.setState({ error: e.message })
      console.log(e)
    }
  }
  async handelVerifyCode (e) {
    e.preventDefault()
    if (!this.state.code) {
      this.setState({
        error: 'Error: Please enter code and then click submit'
      })
      return
    }
    this.setState({ error: '' })
    NProgress.start()
    try {
      await verifyCode({
        code: this.state.code,
        token: this.state.token
      })
      NProgress.done()
      const next = this.props.url.query
        ? this.props.url.query.next ? this.props.url.query.next : '/'
        : '/'
      console.log(next)
      Router.push(next)
    } catch (e) {
      NProgress.done()
      this.setState({ error: e.message })
      console.log(e)
    }
  }
  handelResend (e) {
    this.setState({
      showVerify: false,
      code: '',
      token: '',
      error: ''
    })
  }
  handelCallMe (e) {
    this.handelSendCode(null, 'voicecall')
  }
  renderVerifyCodeForm () {
    return (
      <form onSubmit={this.handelVerifyCode.bind(this)}>
        <h3>We sent you a code to {this.state.phoneNumber}</h3>
        <p>Enter that code below to complete login process</p>
        {this.state.error &&
          <p className='error'>
            {this.state.error}
          </p>}
        <div className='content'>
          <ReactCodeInput
            type='number'
            fields={6}
            value={this.state.code}
            onChange={this.handelCode.bind(this)}
            isValid={this.state.code ? !!this.state.code.match(/^\d+$/) : true}
          />
          <button disabled={!(this.state.code.length === 6)} type='submit'>
            Submit
          </button>
        </div>
        <div className='btns'>
          <button onClick={this.handelResend.bind(this)} type='button'>
            Resend Code
          </button>
          <button onClick={this.handelCallMe.bind(this)} type='button'>
            Call Me
          </button>
        </div>
        <style jsx>
          {
            `
          h1, h3 {
            text-align: center;
          }
          p {
            text-align: center;
          }
          p.error {
            color: red;
            font-weight: bold;
          }
          form .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0 0 0;
          }
          form button {
            width: 75%;
            margin: 50px 0 10px 0;
            border: none;
            outline: none;
            background: teal;
            color: #fff;
            border-radius: 7px;
            padding: 8px 10px;
            font-size: 16px;
            cursor: pointer;
            transition: color 0.3s;
          }
          form button:hover {
            background: green;
          }
          form button:disabled {
            background: teal;
            opacity: 0.5;
            cursor: not-allowed;
          }
          .btns {
            display: flex;
            justify-content: center;
          }
          .btns button {
            width: auto;
            margin: 10px 20px;
            background: #fff;
            border:  2px solid;
            color: lightblue;
            transition: boder 0.3s;
          }
          .btns button:hover {
            color: teal;
            background: #fff;
          }
        `
          }
        </style>
      </form>
    )
  }
  renderSendCodeForm () {
    return (
      <form onSubmit={this.handelSendCode.bind(this)}>
        <h1>Log into Demo</h1>
        <p>
          Enter your mobile number we will send you verification code
        </p>
        {this.state.error &&
          <p className='error'>
            {this.state.error}
          </p>}
        <div className='content'>
          <Phone
            placeholder='Enter phone number'
            value={this.state.phoneNumber}
            onChange={this.handelPhoneNumber.bind(this)}
            onCountryChange={this.handelCountryCode.bind(this)}
            onBlur={this.handelPhoneNumberBlur.bind(this)}
          />
          <button disabled={!this.state.isValid}>Submit</button>
        </div>
        <style jsx>
          {
            `
          h1, h3 {
            text-align: center;
          }
          p {
            text-align: center;
          }
          p.error {
            color: red;
            font-weight: bold;
            text-align: center;
          }
          form .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
          }
          form button {
            width: 75%;
            margin: 50px 0;
            border: none;
            outline: none;
            background: teal;
            color: #fff;
            border-radius: 7px;
            padding: 8px 10px;
            font-size: 16px;
            cursor: pointer;
            transition: color 0.3s;
          }
          form button:hover {
            background: green;
          }
          form button:disabled {
            background: teal;
            opacity: 0.5;
            cursor: not-allowed;
          }
        `
          }
        </style>
      </form>
    )
  }
  render () {
    const { showVerify } = this.state
    return (
      <div>
        <Header title='Home Page' />
        <main>
          <section>
            {showVerify
              ? this.renderVerifyCodeForm()
              : this.renderSendCodeForm()}
          </section>
        </main>
        <style jsx>
          {
            `
          main {
            padding-top: 20px;
          }
          section {
            padding: 20px;
            display: flex;
            justify-content: center;
          }
        `
          }
        </style>
      </div>
    )
  }
}

export default PublicPage(Login)
