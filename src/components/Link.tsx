import React from 'react'

interface LinkProps {
  active: boolean,
  children: React.ReactNode,
  onClick: () => void
}

const Link = ({ active, children, onClick }: LinkProps) => (
    <button
       onClick={ onClick }
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    > 
      {children}
    </button>
)

export default Link
