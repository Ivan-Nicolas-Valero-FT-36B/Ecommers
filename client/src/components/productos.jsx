import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/actions";
import { Producto } from '../components/index';
import styles from '../css/Productos.module.css';

function Productos() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllProducts());
  }, [dispatch]);
  return (
    <div className={styles.Productos}>
      {products && products.map((p) => {
        return (
          <Producto 
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        )
      })}
    </div>
  );
}

export default Productos;
