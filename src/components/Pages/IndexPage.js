import React from 'react'
import GatsbyIcon from '../../assets/vectors/gatsby.svg'
import AmplifyIcon from '../../assets/vectors/amplify.svg'
import CognitoIcon from '../../assets/vectors/cognito.svg'

const IndexPage = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 40px'
      }}
    >
      <GatsbyIcon />
      <p style={{ fontSize: 48, padding: 20 }}>+</p>
      <AmplifyIcon />
      <p style={{ fontSize: 48, padding: 20 }}>+</p>
      <CognitoIcon />
    </div>
  )
}

export default IndexPage
