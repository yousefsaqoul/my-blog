import React from 'react'
import { Route } from 'react-router-dom'
import Blog from './blog'
import Head from '../comonents/blog/head'
import Home from '../comonents/Home'
const home = () => {
    return (
        <div>
            <Head />
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            {/* <Home /> */}
        </div>
    )
}

export default home;
