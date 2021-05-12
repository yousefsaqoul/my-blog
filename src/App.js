import React, { Component, Suspense } from 'react';
// import Blog from './views/blog'
import Home from './views/home'
import Header from './comonents/layout/header'
import Footer from './comonents/layout/footer'
import Blog from './views/blog'
import Post from './views/post'
// import AddPost from './views/addPost'
import NotFound from './views/NotFound'

import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
const AddPost = React.lazy(() => import("./views/addPost"))
class App extends Component {
  state = { auth: true };

  render() {
    return (

      <div >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" extends component={Blog} />


            {this.state.auth ? (<Route path="/posts/add-post" render={(props) => {
              return (
                <Suspense fallback={<div>Loding ...</div>}>
                  <AddPost {...props} />
                </Suspense>
              )


            }} />) : (<Redirect from="/posts/add-post" to="/" />)}


            <Route path="/posts/:id" component={Post} />
            <Redirect from="/home" to="/" />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>

      </div>
    );

  }
}

export default App;
