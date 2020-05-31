import React, { useState } from 'react'
import { history } from '../redux'
import './main.scss'

const Main = () => {
  const [userLogin, setUserLogin] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${userLogin}`)
    }
  }
  return (
    <div className="main-bg flex  h-screen">
      <div className="bg-gray-300 bg-opacity-50 py-16 px-24 rounded-md m-auto ">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Users repository search
        </h2>
        <form className="m-5">
          <input
            type="text"
            onChange={(e) => {
              setUserLogin(e.target.value)
            }}
            onKeyDown={handleSearch}
            value={userLogin}
            className="bg-gray-200 p-3 rounded"
          />
          <button
            type="button"
            onClick={() => {
              history.push(`/${userLogin}`)
            }}
            className="bg-gray-700 rounded text-white font-bold p-3 ml-3"
          >
            View repositories
          </button>
        </form>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
