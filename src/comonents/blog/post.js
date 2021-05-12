import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Post = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={`https://source.unsplash.com/720x400/?${props.post.id}`} />
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Text>
                    {props.post.body}
                </Card.Text>
                <Link className="btn btn-primary" to={"/posts/" + props.post.id}> Open Post
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Post

