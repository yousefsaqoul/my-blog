import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Head from './head'
import Loader from '../layout/loader'
export class SinglePost extends Component {
    state = {
        post: null,
    }
    componentDidMount() {
        // console.log(this.props.match.params.id);
        const postId = this.props.match.params.id ? this.props.match.params.id : null;

        if (postId) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + postId).then((response) => {
                console.log(response.data);
                this.setState({
                    post: response.data
                });
            })
        }
    }
    componentDidUpdate(prevProps) {
        // if (this.props.id && this.props.id !== prevProps.id) {
        //     axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id).then(response => {
        //         console.log(response.data);
        //         this.setState({
        //             post: response.data
        //         });
        //     })
        // }
    };
    renderPost = () => {
        if (this.state.post) {
            return (
                <>
                    <Head title={this.state.post.title} />
                    <Container className="single-post-container">
                        <img src={`https://source.unsplash.com/720x400/?${this.state.post.id}`} alt="" className="single-post-img" />
                        <Row>
                            <Col>
                                <p className="single-post-body">
                                    {this.state.post.body}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        } else {
            return <Loader />;
        }
    };
    render() {
        return <>{this.renderPost()}</>

    }
}

export default SinglePost
