import React from 'react'
import {
    useState
} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Adduser = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, address, phone, username);
    }

    return (
        <Form noValidate className='mt-5 container' onSubmit={handleSubmit}>
            <h1 className="text-center p-4">Add User</h1>
            <Row className="mb-3">
                <Form.Group as={Col}
                    md="4"
                    controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="Full name"
                        value={name}
                        onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}
                    md="4"
                    controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="text" placeholder="Address"
                        value={address}
                        onChange={
                            (e) => {
                                setAddress(e.target.value)
                            }
                        }/>

                </Form.Group>

            <Form.Group as={Col}
                md="4"
                controlId="validationCustom02">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="text" placeholder="Phone Number"
                    value={phone}
                    onChange={
                        (e) => {
                            setPhone(e.target.value)
                        }
                    }/>

            </Form.Group>
        <Form.Group as={Col}
            md="4"
            controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend"
                    value={username}
                    onChange={
                        (e) => {
                            setUsername(e.target.value)
                        }
                    }
                    required/>

            </InputGroup>
                </Form.Group>
                
                <Form.Group as={Col}
                md="4"
                controlId="validationCustom02">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control required type="file" placeholder="Upload Photo"
                    
                    onChange={
                        (e) => {
                            setPhoto(e.target.files[0])
                        }
                    }/>

            </Form.Group>
    </Row>
    <Button type="submit">Add User</Button>
</Form>
    )
}

export default Adduser
