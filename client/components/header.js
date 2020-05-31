import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.handleFind(e.target.value)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      {!props.readme && (
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={search}
          className="p-2 rounded border-b-2"
        />
      )}
      <img src={`${props.user.avatar_url}`} alt="" className="rounded-md w-16 h-16" />
      <div>
        <NavLink to="/" className="text-white mr-6 hover:text-green-500 text-xl">
          Home
        </NavLink>
        {props.readme && (
          <NavLink to={`/${props.userName}`} className="text-white hover:text-green-500 text-xl">
            Repositiries
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
