import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Repositorylist from './repositorylist'
import Main from './main'
import Header from './header'
import Readme from './readme'

const Home = () => {
  const [repositories, setRepositories] = useState([])
  const [readme, setReadme] = useState('')
  const { userName, userRepos } = useParams()
  const [find, setFind] = useState('')
  const [user, setUser] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setRepositories(data)
    )
  }, [userName])
  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.raw' }
    if (userRepos !== undefined) {
      axios(`https://api.github.com/repos/${userName}/${userRepos}/readme`, {
        params: {},
        headers
      }).then(({ data }) => setReadme(data))
    }
  }, [userRepos, userName])
  const handleFind = (search) => {
    setFind(search)
  }
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div>
      <Head title="Hello" />
      <Header
        readme={readme}
        userRepos={userRepos}
        userName={userName}
        handleFind={handleFind}
        user={user}
      />
      <div className=" container mx-auto pt-3">
        <Route exact path="/" component={() => <Main />} />
        <Route
          exact
          path="/:userName"
          component={() => (
            <Repositorylist repositories={repositories} userName={userName} find={find} />
          )}
        />
        <Route exact path="/:userName/:userRepos" component={() => <Readme readme={readme} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
