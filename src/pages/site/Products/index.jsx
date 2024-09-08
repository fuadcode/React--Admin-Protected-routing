import React, { useEffect, useState } from 'react';
import getProtectedData from '../../../services/api';
import './index.css';

const Products = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProtectedData();
        setList(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-heading">Products</h1>
      <div className="products-grid">
        {lists && lists.map((list) => (
          <div className="product-card" key={list.id}>
            <h2 className="product-name">{list.name}</h2>
            <p className="product-description">{list.description}</p>
            <p className="product-price">${list.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
