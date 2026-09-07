import React from 'react'

const Input = ({ name, ...props }) => {
    return (
        <>
            <label>{name} &nbsp;&nbsp;
                <input name={name} {...props} />
            </label><br></br>
        </>
    )
}

export default Input; 