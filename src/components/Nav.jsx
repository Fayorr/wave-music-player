import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Nav = ({libraryStatus, setLibraryStatus}) => {
  const libraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  }
  return (
   <nav>
        <h1>Waves</h1>
        <button onClick={libraryHandler}>
            Library
            <FontAwesomeIcon icon={faMusic} />
        </button>
   </nav>
  )
}

export default Nav;