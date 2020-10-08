import React from 'react'

export default function Names(props) {
    return (
    <ul>
        <li>{props.name}</li>
        <button>Delete</button>
    </ul>
    )
}
