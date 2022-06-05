import React from 'react'
import css from "./style.module.css"

const Search = (props) => {
    const {
        placeholder,
        onSearch
    } = props
    const handleChange = (e) => {
        const value = e.target.value;
        onSearch(value);
    }
  return (
    <input type="text" placeholder={placeholder} className={css.searcher} onChange={handleChange}></input>
  )
}

export default Search