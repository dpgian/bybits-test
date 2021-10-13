import { createContext, useState } from "react";

export const userDetailsContext = createContext()

const UserDetailsProvider = props => {
    const [userDetails, setUserDetails] = useState('')

    return (
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    )
}

export default UserDetailsProvider