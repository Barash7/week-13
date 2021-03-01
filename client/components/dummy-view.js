import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from './head'
import Header from './header'

import Main from './main'
import RepoList from './repolist'
import Text from './text'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName/" component={() => <RepoList />} />
        <Route exact path="/:UserName/:repositoryName" component={() => <Text />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
