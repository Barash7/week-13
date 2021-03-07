import React from 'react'

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        LOVE
      </div>
    </nav>
  )
}

export default React.memo(Header)
