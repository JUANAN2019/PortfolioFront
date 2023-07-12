import React, { useState, useEffect } from 'react';
import  './playa.css'

const Back=() =>{
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchRandomUsers = async () => {
        try {
          const response = await fetch('https://127.0.0.1:8000/api/backs');
          const data = await response.json();
          setUsers(data['hydra:member']);
        } catch (error) {
          console.log('Error al obtener los datos de usuarios aleatorios:', error);
        }
      };
  
      fetchRandomUsers();
    }, []);
  return (
    <div>
          {users.map((item,index) => (
            <div className='datosB' key={index}>
            <p>{item.nombre}</p>
           
           </div>
          ))}
      
    </div>
  )
}

export default Back