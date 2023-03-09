import "./Header.css"

import React from 'react'

export default function Header({
    title
}) {
    return <h1 className="header" data-testid="heading-1">{title}</h1>
}
