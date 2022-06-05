import React from 'react' 
import css from "../list/style.module.css"

const List = () => {
  return (
    <div className={css.list}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
    </div>
  )
}

export default List