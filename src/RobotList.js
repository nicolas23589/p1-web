import bannerimg from './banner.jpg';
import React, { useState, useEffect  } from 'react';
import { FormattedMessage } from "react-intl";

function RobotList() {



    const [selectedProduct, setSelectedProduct] = useState(null);
    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {

      fetch('http://localhost:3001/robots')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener la lista de robots');
          }
          return response.json();  
        })
        .then((data) => {
          setRobots(data);  
          setLoading(false); 
        })
        .catch((err) => {
          setError(err.message);  
          setLoading(false);  
        });
    }, []);  
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>; 
    }
  


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Adopta un robot con RobotLovers!</h1>
      <img 
        src={bannerimg}
        alt="Banner" 
        style={{ width: '75%', height: '10%' }}
      />

   
      <div className='row' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

        <div className='col' style={{ width: '50%' }}>
      
          <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: '#fff' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}> <FormattedMessage id= "ID" /> </th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}> <FormattedMessage id= "Name" /> </th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}> <FormattedMessage id= "Model" /> </th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}> <FormattedMessage id= "Manufacturing Company" /></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((product) => (
                <tr 
                  key={product.id} 
                  style={{ backgroundColor: '#f2f2f2', cursor: 'pointer' }} 
                  onClick={() => handleProductClick(product)}
                >
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.id}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.nombre}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.modelo}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='col' style={{ width: '400px', marginLeft: '20px' }}>
          {selectedProduct && (
            <div 
              style={{ 
                backgroundColor: '#f2f2f2', 
                border: '2px solid #333', 
                padding: '20px', 
                textAlign: 'left' 
              }}
            >
              <h2 style={{textAlign:'center'}}>{selectedProduct.nombre}</h2>
                            <img  
                src={'https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot'+ selectedProduct.id + '.png'  }

                //el src en realidad podría ser selectedRobot.imagen, sin embargo los links de github proporcionados  por el back daban problemas al cargar las imágener
                alt="Imagen de Robot" 
                style={{ 
                    width: '160px', 
                    height: '160px', 
                    border: '2px solid #333', 
                    marginBottom: '20px', 
                    display: 'block', 
                    marginLeft: 'auto', 
                    marginRight: 'auto' 
                }} 
                />
              <p><strong> →<FormattedMessage id= "Year of manufacture" />:</strong> {selectedProduct.añoFabricacion}</p>
              <p><strong> →<FormattedMessage id= "Processing capacity" />:</strong> {selectedProduct.capacidadProcesamiento}</p>
              <p><strong> → <FormattedMessage id= "Humor" />:</strong> {selectedProduct.humor}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RobotList;
