import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'

import { AppUser } from '../Auth'
import { AuthForm, Email, Password } from '../Forms'

class SignIn extends React.Component {
  state = {
    username: ``,
    email: ``,
    password: ``,
    error: ``,
    loading: false,
  }

  handleUpdate = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        username: event.target.value,
        error: '',
      })
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    })
  }

  login = async e => {
    const { setUser } = AppUser
    e.preventDefault()
    const { username, password } = this.state
    try {
      this.setState({ loading: true })
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      this.setState({ loading: false })
      navigate('/home')
    } catch (err) {
      this.setState({ error: err, loading: false })
      console.log('error...: ', err)
    }
  }

  render() {
    return (
      <AuthForm title="Sign in to your account" error={this.state.error}>
        <Email
          handleUpdate={this.handleUpdate}
          email={this.state.email}
          autoComplete="on"
        />
        <Password
          handleUpdate={this.handleUpdate}
          password={this.state.password}
          autoComplete="on"
        />
        <p className="text-center">
          Forgot your password? <Link to="/reset">Reset password</Link>
        </p>
        <button
          onClick={e => this.login(e)}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={this.state.loading}
        >
          {this.state.loading ? null : 'Sign In'}
          {this.state.loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>
        <p style={{ marginTop: 40 }} className="text-center">
          No account? <Link to="/signup">Create account</Link>
        </p>
      </AuthForm>
    )
  }
}

export default SignIn
