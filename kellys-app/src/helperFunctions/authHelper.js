// This file leveraged from example-master file provided in the sample from the course material


export const parseJwt = token => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return false;
    }
}

const isAuthenticated = () => {
    try {
        return parseJwt(sessionStorage.getItem('token'))
    } catch (error) {
        console.error(error)
        return false
    }
}

export default isAuthenticated