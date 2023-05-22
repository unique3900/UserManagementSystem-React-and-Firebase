
import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import {
    useState
} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';


const UpdateUser = () => {
    const params = useParams();
    const [id, setId] = useState(params.id);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [prevUserData, setPrevUserData] = useState([]);



   
    const gerUserData = async () => {
        const userCollectionReference = collection(db, "UserData");
        const docref = await doc(db,"UserData" , id);
        const docSnap = await getDoc(docref);
      
        setPrevUserData(docSnap.data());
        setName(prevUserData.name);
        setAddress(prevUserData.address);
        setPhone(prevUserData.phone);
        setUsername(prevUserData.username);
    }

    useEffect(() => {
        gerUserData();
        
        console.log(id);
    }, [name]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, address, phone, username);
    }
    return (
        <Form noValidate className='mt-5 container'
            onSubmit={handleSubmit}>
            <h1 className="text-center p-4">Update User</h1>
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
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    </Row>
    <Button type="submit">Update User</Button>
</Form>
    )
}

export default UpdateUser
