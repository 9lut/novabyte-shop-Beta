import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductView } from '../../hooks/useProductView';
import Navbar from '../novaNavbar';
import conf from "../../conf";
import './ProductView.css';
import Loading from '../Loading';


function ProductView() {
  const { id } = useParams(); 
  const { product } = useProductView(id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // ตั้งค่า loading เป็น false หลังจากผ่านไปหนึ่งวินาที
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <div><Loading /></div>;
  }

  const productImage = `${conf.apiPrefix}${product.attributes.image.data[0].attributes.formats.medium.url}`;
  
  return (
    <div>
      <Navbar />
      <div className="container mt-4"> {/* เพิ่ม container และขอบกรอบ */}
        <div className="row justify-content-center"> {/* จัดตำแหน่งตรงกลางด้วย justify-content-center */}
          <div className="col-md-6"> {/* แบ่งส่วนเป็น 6 ของขนาดหน้าจอมากสุด (medium) */}
            <div className="product-details">
              <div className="product-image">
                <img src={productImage} alt={product.attributes.title} className="img-fluid rounded" /> {/* เพิ่มคลาส img-fluid เพื่อให้รูปภาพปรับขนาดตามขนาดหน้าจอและ rounded เพื่อใส่ขอบโค้ง */}
              </div>
            </div>
          </div>
          <div className="col-md-6"> {/* แบ่งส่วนเป็น 6 ของขนาดหน้าจอมากสุด (medium) */}
            <div className="product-info">
              <h2>{product.attributes.title}</h2>
              <p>{product.attributes.description}</p>
              <p>ราคา: ฿{product.attributes.price}</p>
              <button className="btn btn-primary">เพิ่มลงตะกร้า</button> {/* เพิ่มปุ่มใส่ตะกร้า */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
