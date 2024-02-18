import React from 'react';
import Navbar from '../components/novaNavbar';
import { useProducts } from '../hooks/useProducts';
import Product from '../components/product/cardProduct';
import './Home.css';

const Home = () => {
  const { categories, products } = useProducts();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home">
          <h2 className='title'>NovaByte ร้านขายอุปกรณ์คอมพิวเตอร์ที่ดีที่สุด</h2>
          {categories.length
            ? categories.map((category) => {
                const hasProducts = products.filter(
                  (product) => product.attributes.category.data.id === category.id
                );
                return hasProducts && hasProducts.length ? (
                  <div key={category.id} className="category">
                    <h2 className="category-title">{category.attributes.title} <hr width="100%" color='gray'/> </h2>
                    <div className="product-container">
                      {hasProducts.map((product) => (
                        <Product key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ) : null;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
