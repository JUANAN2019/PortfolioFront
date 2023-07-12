import React, { useState, useEffect } from 'react';

const Idiomas=() =>{
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchRandomUsers = async () => {
        try {
          const response = await fetch('https://127.0.0.1:8000/api/Idiomas');
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
            <p>{item.idioma}
            {item.nivel_hablado}
            {item.nivel_escrito}
            
            </p>
          ))}
      
    </div>
  )
}

export default Idiomas