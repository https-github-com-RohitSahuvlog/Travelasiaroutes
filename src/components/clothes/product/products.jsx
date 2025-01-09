import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../dummy";
import { Link, useNavigate } from "react-router-dom";
import "./products.css";
import Axios from "../../../api";
import { addToCart } from "../../../redux/action/cartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Product = () => {
    const [width, setWidth] = useState(0);
    const [rugList, setRugList] = useState([]);
    const carousel = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);


    const fetchData = async () => {
        try {
            const response = await Axios.get('/api/products');
            setRugList(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="product-carousel">
            {/* <div className="container">
                <div className="content">
                    <h2 className="title">Customise or Create your Own Rug</h2>
                    <h3 className="subtitle">Your Ideas. Our Craftsmanship. Endless Possibilities.</h3>
                </div>
            </div> */}
            <motion.div
                ref={carousel}
                className="carousel"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel"
                >
                    {rugList?.map((product) => (
                        <motion.div key={product._id} className="product-card">
                            <img
                                src={product?.image[0]?.url}
                                alt={product?.name}
                                className="productimage"
                            />
                            <div className="product-info">
                                <p className="product-name">{product?.name}</p>
                                <p className="product-price">${product?.price}</p>
                                {product?.stock === 0 ? <p className="outofstock">Out of Stock</p> : <div className='btncontainer'>
                                    <button className="small-button" onClick={() => {
                                        navigate(`/product/${product?._id}`)
                                    }}>See More</button>

                                </div>}


                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Product;
