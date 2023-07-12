import React, { useState, useEffect } from 'react';

const Formacion=() =>{
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchRandomUsers = async () => {
        try {
          const response = await fetch('https://127.0.0.1:8000/api/Formacions');
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
            <p>
                {item.titulo}
                {item.centro}
                {item.fecha_ini}
                {item.fecha_end}
                {item.nombre}
                </p>

          ))}
      
    </div>
  )
}

export default Formacion