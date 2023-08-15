import React from 'react'

function Checkbox() {
  return (
    <>
    <legend>Choose your monster's features:</legend>

<div>
  <input type="checkbox" id="scales" name="scales" checked />
  <label htmlFor="scales">Scales</label>
</div>

<div>
  <input type="checkbox" id="horns" name="horns" />
  <label htmlFor="horns">Horns</label>
</div>
    </>
  )
}

export default Checkbox