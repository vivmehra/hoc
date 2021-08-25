import React from 'react'

function nameTag(props){
    return <h3 style = {props.style}>{props.name}</h3>
}
export default nameTag