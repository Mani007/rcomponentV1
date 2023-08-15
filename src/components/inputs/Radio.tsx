import React from 'react'

function Radio() {
  return (
    <>
   <div>
    <legend>Select a maintenance drone:</legend>

<div>
  <input type="radio" id="huey" name="drone" value="huey"  />
  <label htmlFor="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey" />
  <label htmlFor="dewey">Dewey</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie" />
  <label htmlFor="louie">Louie</label>
</div>
</div>
    </>
  )
}

export default Radio