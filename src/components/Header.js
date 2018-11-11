import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <header className="App-header">
    <div className="App-wrapper">
      <div className="App-intro">
        <h1 className="App-title"><Link to="/">iTunes Player</Link></h1>
      </div>
    </div>
  </header>
)
