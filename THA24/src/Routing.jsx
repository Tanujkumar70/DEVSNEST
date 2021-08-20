import React from 'react'
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Dashboard from './Dashboard';
import { Switch, Route, Link } from "react-router-dom";

export const Routing = () => {
    return (
        <>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </>
    )
}

export const Linking = () => {
    return (
        <>
            <Link to='/'>
                <h2>Home</h2>
            </Link>
            <Link to='/about'>
                <h2>About</h2>
            </Link>
            <Link to='/profile'>
                <h2>Profile</h2>
            </Link>
            <Link to='/dashboard'>
                <h2>Dashboard</h2>
            </Link>
        </>
    )
}