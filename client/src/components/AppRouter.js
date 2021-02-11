import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
    const isAuth = false

    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route exact path={path} component={Component} key={path} />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route exact path={path} component={Component} key={path} />
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}

export default AppRouter
