import React, { Component } from 'react'
import Head from '../comonents/blog/head'
export class NotFound extends Component {
    componentDidMount() {
        this.props.history.replace('/404')
    }

    render() {
        return (
            <div>
                <Head title="404 not found" />
            </div>
        )
    }
}

export default NotFound
