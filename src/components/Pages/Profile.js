import React from 'react'
import { Link } from 'gatsby'

import { getCurrentUser } from '../Auth/AppUser'
import { AppContent } from '../Layout'

const Profile = () => {
  const user = getCurrentUser()
  return (
    <div className="container-login100">
      <AppContent>
        <h1>Here's the Profile Page</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
        <Link to="/home">Home</Link>
      </AppContent>
    </div>
  )
}

export default Profile
