import React, { Component } from 'react'
import Post from './post'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from '../layout/loader'
export class Posts extends Component {
    state = {
        posts: [],
        showModel: false,
        currentId: null,
    }
    componentDidMount() {
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.setState({ posts: response.data })
        })
    }
    renderPosts = () => {
        if (this.state.posts.length > 0) {
            return this.state.posts.map((post) => {
                return (
                    <Col md={6} lg={4} key={post.id}>
                        <Post post={post} openModel={this.openModel} />
                    </Col>
                );
            })
        } else {
            return (
                <div>
                    <Loader />
                </div>
            );
        }
    };
    closeModelHandler = () => {
        this.setState({ showModel: false });
    }
    openModel = (id) => {
        this.showModelHandler();
        this.setState({ currentId: id })
    }
    showModelHandler = () => {
        this.setState({ showModel: true });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className="h3 text-primary border-bottom pb-3 mb-4">Latest Posts</h2>
                    </Col>
                </Row>

                <Row>{this.renderPosts()}</Row>
            </Container>
        )
    }
}
export default withRouter(Posts)
