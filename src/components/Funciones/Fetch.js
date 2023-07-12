import React, { useState, useEffect } from 'react';

const EntityPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data') // Reemplaza esta URL con la URL de tu API
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
}
export default EntityPanel