import React from 'react'

const Nav = ({navegacao, onSelect}) => {
  return (
    <nav>
        <ul className='nav-list'>
            {navegacao.map((item, index) => (
                <li key={index}>
                    <a href="#" onClick={() => {onSelect(index); console.log(index)}}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav