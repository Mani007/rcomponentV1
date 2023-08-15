import React from 'react'
// need to implement the search logic
function Search() {
  return (
    <>
    <label htmlFor="site-search">Search the site:</label>
    <input type="search" id="site-search" name="q" />

    <button>Search</button>
    </>
  )
}

export default Search