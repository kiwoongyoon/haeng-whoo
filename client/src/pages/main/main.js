import React from 'react'
import header from '../../components/header'
import Query from './components/select'

function Main() {
  return (
    <div className="Main">
      {header()}
      <body>
        {Query()}
        <h1>Find info with tag!</h1>
      </body>
    </div>
  )
}

export default Main