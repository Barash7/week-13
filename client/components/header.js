import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Header = () => {
  const { userName, repositoryName } = useParams()

  return (
    <nav className="flex bg-indigo-800 items-center justify-between flex-wrap text-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6" id="repository-name">
        {userName}
      </div>
      {repositoryName && (
        <Link id="go-repository-list" to={`/${userName}`}>
          Go repository list
        </Link>
      )}
      <Link id="go-back" to="/">
        Go back
      </Link>
    </nav>
  )
}

export default React.memo(Header)
