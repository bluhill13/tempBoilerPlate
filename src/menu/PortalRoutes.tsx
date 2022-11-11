import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LoginContainer } from '../containers/login/LoginContainer'
import { WelcomeContainer } from '../containers/welcome/WelcomeContainer'
import { RootState } from '../redux/store'
import { isAuthenticated } from '../services/authenticationService'


export const PortalRoutes = (props: any) => {

    console.log("PortalRoutes", props)

    const loginState = useSelector((state: RootState) => state.authentication)
    
    // TODO bruk reducer for å finne ut om du er pålogget
    //const loginState = useSelector(state => state.login)
    /*
        (auth.isAuthenticated)
            ? <Route exact path="/" component={LoginWelcome} />
            : <Route exact path="/" component={Welcome} />
    */

   if (!loginState.loggedIn) {
     return (
        <Fragment>
            <Routes>    
                <Route path="/" element={<LoginContainer/>} />
            </Routes>
        </Fragment>
     )
   }


    return (
        <Fragment>
            <Routes>    
                <Route path="/" element={<WelcomeContainer/>} />
            </Routes>
        </Fragment>
    )
}

export default PortalRoutes