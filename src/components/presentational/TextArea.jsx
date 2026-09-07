import React from 'react'

const TextArea = ({...props }) => {
    return (
        <>
            <label>Content  &nbsp;&nbsp;
                <textarea  {...props} />
            </label><br></br>
        </>

    )
}

export default TextArea