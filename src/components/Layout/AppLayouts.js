import React from 'react'
import 'modern-normalize/modern-normalize.css'
import { Nav, UserNav } from '../Nav'
import '../../scss/styles.scss'

export function Layout({ children, isUserNav }) {
  return (
    <div>
      {isUserNav ? <UserNav /> : <Nav />}
      <div style={{ height: 'calc(100vh - 56px)' }}>{children}</div>
    </div>
  )
}

export function AppContent({ children }) {
  return (
    <div className="app-content-100">
      <div className="container" style={{ marginTop: 40 }}>{children}</div>
    </div>
  )
}
