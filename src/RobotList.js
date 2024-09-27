import bannerimg from './banner.jpg';
import React, { useState } from 'react';

function RobotList() {
  const defaultImg = 'https://m.media-amazon.com/images/I/31MqR2pPE5L._AC_.jpg'; 
  const products = [
    { id: 1, nombre: 'Pedrito', modelo: 'NRG-500', empresa: 'Robotico Corp', year: 2020, capacidad: '2.5 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología', img:defaultImg},
    { id: 2, nombre: 'Iron chef', modelo: 'NRG-5001', empresa: 'Robotico Corp', year: 2021, capacidad: '3.0 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología',img:defaultImg },
    { id: 3, nombre: 'chispita', modelo: 'NRG-500 C', empresa: 'Robotico Corp Z', year: 2022, capacidad: '3.5 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología',img:defaultImg },
    { id: 1, nombre: 'sir calculin', modelo: 'NRG-500 A', empresa: 'Robotico Corp X', year: 2020, capacidad: '2.5 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología',img:defaultImg},
    { id: 2, nombre: 'doctora bot', modelo: 'NRG-500 B', empresa: 'Robotico Corp Y', year: 2021, capacidad: '3.0 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología',img:defaultImg },
    { id: 3, nombre: 'Zumba bot', modelo: 'NRG-500 C', empresa: 'Robotico Corp Z', year: 2022, capacidad: '3.5 GHz', humor: 'Alegre y juguetón, tiene un comportamiento similar al de un gatito curios, siempre metiendose en temas de tecnología',img:defaultImg },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

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
          <h2>Listado de Robots</h2>
          <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: '#fff' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Modelo</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  style={{ backgroundColor: '#f2f2f2', cursor: 'pointer' }} 
                  onClick={() => handleProductClick(product)}
                >
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.id}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.nombre}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.modelo}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.empresa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='col' style={{ width: '300px', marginLeft: '20px' }}>
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
                src={selectedProduct.img}  
                alt="Imagen de Producto" 
                style={{ 
                    width: '120px', 
                    height: '120px', 
                    border: '2px solid #333', 
                    marginBottom: '20px', 
                    display: 'block', 
                    marginLeft: 'auto', 
                    marginRight: 'auto' 
                }} 
                />

              <p><strong> - Año de fabricación:</strong> {selectedProduct.year}</p>
              <p><strong> - Capacidad de procesamiento:</strong> {selectedProduct.capacidad}</p>
              <p><strong> - Humor:</strong> {selectedProduct.humor}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RobotList;
