import React from 'react'
import { useHistory } from 'react-router-dom'

const MyList = ({ currentUser }) => {
    const history = useHistory(); 

    const handleHistory = () => {
        if (currentUser) {
            history.push(`/myLists`) 
        } else {
            history.push("/login"); 
        }
    }

    return (
        <button onClick = {handleHistory}>myList</button>
    )
}

export default MyList

