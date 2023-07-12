import React, { useState, useEffect } from 'react';

const Datos=() =>{
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchRandomUsers = async () => {
        try {
          const response = await fetch('https://127.0.0.1:8000/api/Datos');
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
          {users.map(item => (
            <p>{item.nombre}
            {item.apellidos}
            {item.telefono}
            {item.mail}
            {/* {item.foto}
            {item.logo} */}
            </p>
            
            
            
          ))}
      
    </div>
  )
}

export default Datos