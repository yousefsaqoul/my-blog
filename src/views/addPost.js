import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const AddPost = (props) => {
    // const [redirect, setRedirect] = useState(false)


    const [titleValid, setTitleValid] = useState({
        touched: false,
        isValid: false,
        errMassege: "",
    });

    const [bodyValid, setBodyValid] = useState({
        touched: false,
        isValid: false,
        errMassege: "",
    });

    // ----------------------- nach clicken auf submit zeigt nachricht LOADING 
    const [isLoading, setIsLoading] = useState()

    const [errMsgFromServer, setErrMsgFromServer] = useState(false)

    // ---------------------------------Submit Function --------------------------------
    const addPostHandler = async (event) => {
        // setRedirect(true)
        // props.history.replace("/blog");
        // console.log(props)
        event.preventDefault()
        let title = event.target.title.value.trim()
        let body = event.target.body.value.trim()
        setIsLoading(true)
        if (titleValid.isValid && bodyValid.isValid) {
            const res = await sendPost({ title, body })
            if (res) {
                props.history.replace("/blog");
            } else {
                setErrMsgFromServer(true)
            }

        }
        setIsLoading(false)
    }

    // ------------------ diese function stat server -------------------
    const sendPost = (post) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(post)
            }, 2000)
        });
    }
    // --------------------------------logic title --------------------------------
    const checkTitleValidation = (event) => {
        let val = event.target.value.trim()
        let valids = { ...titleValid }
        valids.touched = true;
        if (val.length <= 0) {
            valids.isValid = false;
            valids.errMassege = "fühlen Sie bitte der Titel aus"

        } else if (val.split(" ").length < 3) {
            valids.isValid = false;
            valids.errMassege = "der Titel ist kurz"

        } else if (val.split(" ").length > 10) {
            valids.isValid = false;
            valids.errMassege = "der Titel ist lang als 10 worte"

        } else {
            valids.isValid = true;
            valids.errMassege = ""
        }

        setTitleValid({ ...valids })
        console.log(valids);
    }

    // -----------------------------logic Body ----------------------------

    const checkBodyValidation = (event) => {
        let val = event.target.value.trim()
        let valids = { ...bodyValid }
        valids.touched = true;
        if (val.length <= 0) {
            valids.isValid = false;
            valids.errMassege = "fühlen Sie bitte der Description aus"

        } else if (val.split(" ").length < 10) {
            valids.isValid = false;
            valids.errMassege = "der Description ist kurz"

        } else if (val.split(" ").length > 500) {
            valids.isValid = false;
            valids.errMassege = "der Description ist lang als 500 worte"

        } else {
            valids.isValid = true;
            valids.errMassege = ""
        }

        setBodyValid({ ...valids })
        console.log(valids);
    }


    // ------------------------------return ------------------------------
    return (
        <Container >
            <Row >
                <Col md={6} lg={4} className="mx-auto card my-5 bg-light shadow-sm ">
                    <h2 className="text-center h4 mb-3 text-secondary p-3">
                        addPost
                        {errMsgFromServer ? 'deine Discraption oder Title ist falsch ' : null}
                    </h2>
                    <Form onSubmit={addPostHandler}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                type="text" placeholder="post title"
                                name="title" onBlur={checkTitleValidation}
                                className={titleValid.touched && titleValid.isValid ? "border-success" : titleValid.touched && !titleValid.isValid ? "border-danger" : ""}
                            />
                            {titleValid.errMassege ? (<small className="text-danger p-1">{titleValid.errMassege}</small>) : ("")}
                        </Form.Group>


                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Text Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="body"
                                onBlur={checkBodyValidation}
                                className={bodyValid.touched && bodyValid.isValid ? "border-success" : bodyValid.touched && !bodyValid.isValid ? "border-danger" : ""}
                            />
                            {bodyValid.errMassege ? (<small className="text-danger p-1">{bodyValid.errMassege}</small>) : ("")}

                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            {!isLoading ? "Add New Post" : "Loading..."}
                        </Button>
                    </Form>
                </Col>
            </Row>



        </Container>
    )
}

export default AddPost

