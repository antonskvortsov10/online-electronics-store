import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user)

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route exact path={path} component={Component} key={path} />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route exact path={path} component={Component} key={path} />
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
})

export default AppRouter
