import React from 'react'

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className='App-header'>
      {text}
    </header>
  )
}

export default Header