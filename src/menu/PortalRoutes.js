import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LoginContainer } from '../containers/login/LoginContainer'
import { WelcomeContainer } from '../containers/welcome/WelcomeContainer'


const PortalRoutes = (props) => {

    console.log("PortalRoutes", props)

    // TODO bruk reducer for å finne ut om du er pålogget
    const loginState = useSelector(state => state.login)
    /*
        (auth.isAuthenticated)
            ? <Route exact path="/" component={LoginWelcome} />
            : <Route exact path="/" component={Welcome} />
    */

   if (!loginState.loggedin) {
     return (
        <Fragment>
            <Routes>    
                <Route exact path="/" element={<LoginContainer/>} />
            </Routes>
        </Fragment>
     )
   }


    return (
        <Fragment>
            <Routes>    
                <Route exact path="/" element={<WelcomeContainer/>} />
            </Routes>
        </Fragment>
    )
}

export default PortalRoutes