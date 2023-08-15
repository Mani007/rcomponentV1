import React from 'react'

function Week() {
  return (
    <>
    <label htmlFor="week">Choose a week in May or June:</label>

    <input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required />
    </>
  )
}

export default Week