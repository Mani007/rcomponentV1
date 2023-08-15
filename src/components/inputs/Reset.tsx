import React from 'react'
// Need to implement the reset using hooks. 
function Reset() {
  return (
    <>
    <div >
    <label htmlFor="id">User ID:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Reset" />
    {/* <button type='reset'>reset</button> */}
  </div>
    </>
  )
}

export default Reset