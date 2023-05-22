import React, { useEffect, useState } from 'react'

import { db } from '../firebase-config';
import {collection,getDocs } from 'firebase/firestore';
import Adduser from './Adduser';
import { useNavigate } from 'react-router-dom';


const DisplayUser = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const userCollectionReference = collection(db, "UserData");

  useEffect(() => {
    getUsers();
  }, [])
  
  const getUsers = async () => {
    const data = await getDocs(userCollectionReference);
    setUsers(data.docs.map((item)=>({...item.data(),id:item.id})));
    console.log(data.docs.map((item)=>({...item.data(),id:item.id})));
  }

  const handleUpdate = (id) => {
    navigate(`/updateUser/${id}`);
  }
  return (
    <div>
      <Adduser/>
      {
        users.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <button className='btn btn-primary' onClick={() => {
                handleUpdate(item.id)
              }}>Update</button>
              <button className='btn btn-danger m-2'>Delete</button>
            </div>
          )
        })
     }
    </div>
  )
}

export default DisplayUser
