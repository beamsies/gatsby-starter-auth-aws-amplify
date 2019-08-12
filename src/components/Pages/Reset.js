import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'

import { AuthForm, Email, Password, ConfirmationCode } from '../Forms'

const initialState = {
  email: ``,
  auth_code: ``,
  password: ``,
  error: ``,
  loading: false,
  stage: 0,
}

class Reset extends React.Component {
  state = initialState

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    })
  }

  reset = async e => {
    e.preventDefault()
    const { email } = this.state
    try {
      this.setState({ loading: true })
      await Auth.forgotPassword(email)
      console.log('forgotPassword')
      this.setState({ loading: false, stage: 1 })
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error...: ', err)
    }
  }

  confirmReset = async e => {
    e.preventDefault()
    const { email, auth_code, password } = this.state
    this.setState({ loading: true })
    Auth.forgotPasswordSubmit(email, auth_code, password)
      .then(data => {
        console.log(data)
        this.setState({ loading: false })
      })
      .then(() => navigate('/signin'))
      .catch(err => {
        console.log(err)
        this.setState({ error: err, loading: false })
      })
  }

  render() {
    if (this.state.stage === 0) {
      return (
        <AuthForm title="Reset your password" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="on"
          />
          <button
            onClick={e => this.reset(e)}
            type="submit"
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Send Code'}
            {this.state.loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </button>
          <p style={{ marginTop: 40 }} className="text-center">
            <Link to="/signin">Back to Sign In</Link>
          </p>
        </AuthForm>
      )
    }

    return (
      <React.Fragment>
        <AuthForm title="Confirm Password Update" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="on"
          />
          <ConfirmationCode
            handleUpdate={this.handleUpdate}
            email={this.state.auth_code}
            autoComplete="off"
          />
          <Password
            handleUpdate={this.handleUpdate}
            password={this.state.password}
            autoComplete="on"
          />
          <p style={{ marginTop: 40 }} className="text-center">
            <Link to="/signin">Back to Sign In</Link>
          </p>
          <button
            onClick={e => this.confirmReset(e)}
            type="submit"
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Confirm Reset'}
            {this.state.loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </button>
        </AuthForm>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{ marginTop: 20, marginBottom: 20 }}
            className="text-center"
          >
            Lost your code?
          </p>
          <button
            className="btn btn-link"
            onClick={e => this.reset(e)}
            disabled={this.state.loading}
          >
            Resend Code
          </button>
        </div>
      </React.Fragment>
    )

    // return (
    //   <div className="container-login100">
    //     <div className="wrap-login100 card">
    //       {this.state.stage === 0 && (
    //         <form className="card-body">
    //           <h2>Reset your password</h2>
    //           {this.state.error && (
    //             <p className="text-danger">
    //               {this.state.error.message
    //                 ? this.state.error.message
    //                 : this.state.error}
    //             </p>
    //           )}
    //           <div className="form-group">
    //             <label htmlFor="exampleInputEmail1">Email Address</label>
    //             <input
    //               onChange={this.handleUpdate}
    //               type="email"
    //               name="email"
    //               value={this.state.email}
    //               className="form-control"
    //               aria-describedby="emailHelp"
    //               placeholder="Enter email"
    //             />
    //           </div>
    //           <button
    //             onClick={e => this.reset(e)}
    //             type="submit"
    //             className="btn btn-primary btn-block"
    //             disabled={this.state.loading}
    //           >
    //             {this.state.loading ? null : 'Send Code'}
    //             {this.state.loading && (
    //               <span
    //                 className="spinner-border spinner-border-sm"
    //                 role="status"
    //                 aria-hidden="true"
    //               />
    //             )}
    //           </button>
    //           <p style={{ marginTop: 40 }} className="text-center">
    //             <Link to="/signin">Back to Sign In</Link>
    //           </p>
    //         </form>
    //       )}
    //       {this.state.stage === 1 && (
    //         <div>
    //           <form className="card-body auth-forms100">
    //             <h2>Confirm Password Update</h2>
    //             {this.state.error && (
    //               <p className="text-danger">
    //                 {this.state.error.message
    //                   ? this.state.error.message
    //                   : this.state.error}
    //               </p>
    //             )}
    //             <div className="form-group">
    //               <label htmlFor="exampleInputEmail1">Email Address</label>
    //               <input
    //                 disabled
    //                 name="email"
    //                 value={this.state.email}
    //                 type="email"
    //                 className="form-control"
    //                 // id="exampleInputEmail1"
    //                 aria-describedby="emailHelp"
    //                 placeholder="Enter email"
    //               />
    //             </div>
    //             <div className="form-group">
    //               <label>Confirmation Code</label>
    //               <input
    //                 onChange={this.handleUpdate}
    //                 name="auth_code"
    //                 value={this.state.auth_code}
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="######"
    //               />
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor="exampleInputPassword1">Password</label>
    //               <input
    //                 onChange={this.handleUpdate}
    //                 name="password"
    //                 value={this.state.password}
    //                 type="password"
    //                 className="form-control"
    //                 id="exampleInputPassword1"
    //                 placeholder="Password"
    //               />
    //             </div>
    //             <button
    //               onClick={e => this.confirmReset(e)}
    //               type="submit"
    //               className="btn btn-primary btn-block"
    //               disabled={this.state.loading}
    //             >
    //               {this.state.loading ? null : 'Confirm Reset'}
    //               {this.state.loading && (
    //                 <span
    //                   className="spinner-border spinner-border-sm"
    //                   role="status"
    //                   aria-hidden="true"
    //                 />
    //               )}
    //             </button>
    //           </form>
    //           <div
    //             style={{
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <p
    //               style={{ marginTop: 20, marginBottom: 20 }}
    //               className="text-center"
    //             >
    //               Lost your code?
    //             </p>
    //             <button
    //               className="btn btn-link"
    //               onClick={e => this.reset(e)}
    //               disabled={this.state.loading}
    //             >
    //               Resend Code
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // )
  }
}

export default Reset
