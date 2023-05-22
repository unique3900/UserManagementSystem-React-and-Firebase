import React, { useEffect, useState } from 'react'

import { db } from '../firebase-config';
import {collection,getDocs } from 'firebase/firestore';


const DisplayUser = () => {

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
  return (
    <div>
      {
        users.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <h1>{item.phone }</h1>
            </div>
          )
        })
     }
    </div>
  )
}

export default DisplayUser
