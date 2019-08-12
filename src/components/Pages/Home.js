import React from 'react'
import { Link } from 'gatsby'
import { AppContent } from '../Layout'

const Home = () => {
  return (
    <div className="container-login100">
      <AppContent>
        <h1>Here's the App Home Page</h1>
        <p>
          Since you are now logged in, view your profile: <Link to="/profile">View profile</Link>
        </p>
        <p>
          This starter was built using AWS Amplify. Try it out:{' '}
          <a href="https://console.amplify.aws">AWS Amplify</a>
        </p>
      </AppContent>
    </div>
  )
}

export default Home
