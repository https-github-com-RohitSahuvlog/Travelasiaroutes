import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../dummy";
import { Link } from "react-router-dom";
import "./products.css";

const Product = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="product-carousel">
            <div className="container">
                <div className="content">
                    <h2 className="title">Customise or Create your Own Rug</h2>
                    <h3 className="subtitle">Your Ideas. Our Craftsmanship. Endless Possibilities.</h3>
                </div>
            </div>
            <motion.div
                ref={carousel}
                className="carousel"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel"
                >
                    {products?.map((product) => (
                        <motion.div key={product._id} className="product-card">
                            <img
                                src={product?.image[0]?.url}
                                alt={product?.name}
                                className="product-image"
                            />
                            <div className="product-info">
                                <p className="product-name">{product?.name}</p>
                                <p className="product-price">${product?.price}</p>
                                <Link to={`/product/${product?._id}`}>
                                    <button className="small-button">Buy Now</button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Product;
