import React from 'react'
import { useParams } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">{userName}</div>
    </nav>
  )
}

export default React.memo(Header)
