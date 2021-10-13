import React, { useContext, useEffect, useState } from 'react'
import { navigate } from '@reach/router'
import { userDetailsContext  } from './UserDetailsProvider'

function Details() {
    const [userDetails, setUserDetails]  = useContext(userDetailsContext)
    const [loading, setLoading] = useState(true)

    const handleFetchPolicy = async () => { 
        try {
            let userInfo = await fetch("https://api.bybits.co.uk/policys/details", {
                method: 'GET',
                headers: {
                    'environment': 'mock',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userDetails}`
                }
            })
            let policyInfo = await userInfo.json()
            let data = {access_token: userDetails, ...policyInfo}
            await setUserDetails(data)
            await setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogOut = () => {
        setUserDetails({})
        setLoading(true)
        navigate("/")
    }

    useEffect(() => {
        handleFetchPolicy()
    }, [])

    return (
        <div className='container'>
			<div className='column is-6 is-offset-3'>
				<div className='box'>

                    { loading ? 
                        <div>
                            <h1>Loading..</h1>
                            <div id="loading"></div>
                        </div>
                        : 
                        <div>
                            <h1>My Policy</h1>
                            <div className='field'>
                                <label className='label'>Policy reference:</label>	
                                <p>{userDetails.policy.policy_reference}</p>
                            </div>
                            <div className='field'>
                                <label className='label'>Cover type:</label>	
                                <p>{userDetails.policy.cover}</p>
                            </div>
                            <div className='field'>
                                <label className='label'>Car:</label>	
                                <p>{`${userDetails.vehicle.make} ${userDetails.vehicle.model} ${userDetails.vehicle.colour} -${userDetails.vehicle.reg}`} </p>
                            </div>
                            <div className='field'>
                                <label className='label'>Address:</label>	
                                <p>{`${userDetails.policy.address.line_1}, ${userDetails.policy.address.line_2}, ${userDetails.policy.address.postcode}`}</p>
                            </div>
                            <button
							type='button'
							className='button is-block is-info is-fullwidth'
                            onClick={handleLogOut}
						    >
							Logout
						    </button>
                        </div>
                    }
                    
				</div>
			</div>
		</div>
    )
}

export default Details
