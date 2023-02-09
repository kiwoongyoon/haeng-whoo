import React from 'react'
import header from '../../components/header'
import Query from './components/select'
import recommend from './components/recommend'
import footer from '../../components/footer'

function Main() {
  return (
    <div className="flex justify-center">
      {header()}
      <body className="container">
        {Query()}
        <h1 className="m-7 text-center"><ins><br/><br/>추천 게시글</ins></h1>
        {recommend()}

        {footer()}
      </body>
    </div>
  )
}

export default Main