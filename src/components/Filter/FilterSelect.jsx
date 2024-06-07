import React from 'react'

const FilterSelect = ({options, setVal}) => {

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  return (
    <>
    {console.log(options)}
      <select onChange={(e)=> handleChange(e)}>
        {
          options ? options.map((option) => (
            <option value={option.id}>{option.id}</option>
          ))
          : 
          <span>Sin datos</span>
        }
      </select>
    </>
  )
}

export default FilterSelect