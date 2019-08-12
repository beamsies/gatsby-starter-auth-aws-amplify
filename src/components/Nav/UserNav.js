import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '../Auth'

function UserNav() {
  const { logout } = AppUser
  function logOut(e) {
    e.preventDefault()

    Auth.signOut()
      .then(logout(() => navigate('/signin')))
      .catch(err => console.log('error: ', err))
  }

  return (
    <nav className="navbar navbar-expand">
      <Link className="text-center" to="/home">
        <h1 className="navbar-brand mb-0 text-primary">Authenticaysh</h1>
      </Link>
      <div className="navbar-nav-scroll d-flex flex-grow-1" />
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item">
            <Link className="text-center" to="/profile">
              <p style={{ margin: 0 }} className="nav-link">
                Profile
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <p
              onClick={e => logOut(e)}
              style={{ margin: 0, cursor: 'pointer' }}
              className="nav-link text-primary"
            >
              Logout
            </p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UserNav
