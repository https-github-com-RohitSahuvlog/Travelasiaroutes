import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import "./productdetails.css";
import Axios from '../../../api';
import { addToCart } from '../../../redux/action/cartActions';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [qty, setQty] = useState(1);
    const [selectedSize, setSize] = useState('S');
    const [product, setProduct] = useState([])
    const { image, name, details, price, slug, stock, productCode } = product;
    const navigation = useNavigate()

    useEffect(() => {
        async function fetchRugDetails() {
            try {
                const response = await Axios.get(`/api/products/${id}`);
                if (response.status === 200) {
                    const rugData = response.data;
                    setProduct(rugData);
                } else {
                    toast.error('Failed to fetch rug details.', { position: toast.POSITION.TOP_RIGHT });
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('An error occurred while fetching rug details.', { position: toast.POSITION.TOP_RIGHT });
            }
        }

        fetchRugDetails();
    }, [id]);


    const handleBuyNow = () => {
        dispatch(addToCart(id, qty));
        navigation("/product/checkout")
    };

    const addToCartHandler = () => {
        // dispatch(addToCart(id, qty));
        // toast.success('Added to cart', { position: "top-right" });
        navigation("/booking-form");
    };

    return (
        <div className='container'>
            <div className="products-container standard-margin-top">
                <div className="product__images">
                    <img src={image && image[index].url} className="product__image" alt={name} />
                    <div className="product_img_container">
                        {image?.map((item, i) => (
                            <img
                                src={item.url}
                                key={i}
                                alt={name}
                                className="product__small"
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                {
                    product && (
                        <div className="product__details">
                            <h3 className="product__code">{productCode}</h3>
                            <h6 className="product__title">{name}</h6>
                            <h4 className="product__price">Price : ${price}</h4>

                            <p className='product__size_div'>
                                <h3 className="text-gray">Size:</h3>
                                {
                                    slug?.current && <span className={`product__size ${selectedSize === 'S' ? 'active' : ''}`} >{slug?.current}</span>
                                }
                            </p>
                            <div className="product_details">
                                <span lassName="product_details_title">The design Story:</span> {details}
                            </div>


                            <div className='btn-container'>

                                <button className="border-button small-margin" onClick={handleBuyNow}>Own this Masterpiece</button>

                                <button className="border-button small-margin" onClick={addToCartHandler}>
                                    Contact us
                                </button>

                            </div>
                            {stock === 0 ? <p className="outofstock">Out of Stock</p> : <p className="product__stock">In Stock</p>}
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default ProductDetails;
