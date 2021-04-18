import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthenticated from '../../helperFunctions/authHelper'

// This file leveraged from example-master file provided in the sample from the course material

const SecureRoute = ({ children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) => isAuthenticated() ? 
                (children) : 
                ( <Redirect to={{pathname: "/login", state: {from: location}}} /> )
            }
        />
    )
}

export default SecureRoute