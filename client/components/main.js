import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState ('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
        <input id="input-field" type="text" value={value} onChange={onChange} /> 
        <button className="text-white m-4" id="search-button" type="button" onClick={onClick}>
            Send
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main