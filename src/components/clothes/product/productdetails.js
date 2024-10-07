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
    const { image, name, details, price } = product;
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
        alert("Buy")
        navigation("/product/checkout")
    };

    const addToCartHandler = () => {
        dispatch(addToCart(id, qty));
        toast.success('Added to cart', { position: "top-right" });
    };

    const decQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const incQty = () => {
        setQty(qty + 1);
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
                            <h6 className="product__title">{name}</h6>
                            <p className="font-weight-normal"> ${price}</p>
                            <p className='product__size_div'>
                                <span className="text-gray">Size:</span>
                                <span className={`product__size ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => setSize('S')}>S</span>
                                <span className={`product__size ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => setSize('M')}>M</span>
                                <span className={`product__size ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => setSize('L')}>L</span>
                            </p>
                            <div className="product__reviews">
                                <AiFillStar size={25} color="#363636" />
                                <AiFillStar size={25} color="#363636" />
                                <AiFillStar size={25} color="#363636" />
                                <AiFillStar size={25} color="#363636" />
                                <AiOutlineStar size={25} color="#363636" />
                                <p>({product.reviews})</p>
                            </div>
                            <p className="product_details">{details}</p>
                            <div className="flex product__qty">
                                <p className="minus" onClick={decQty}>
                                    <AiOutlineMinus size={15} color="#363636" />
                                </p>
                                <p className="num">{qty}</p>
                                <p className="plus" onClick={incQty}>
                                    <AiOutlinePlus size={15} color="#363636" />
                                </p>
                            </div>
                            <div className='btn-container'>

                                <button className="border-button small-margin" onClick={handleBuyNow}>BUY NOW</button>

                                <button className="border-button small-margin" onClick={addToCartHandler}>ADD CART</button>

                            </div>
                        </div>
                    )
                }

            </div>
            {/* <div className="recommended standard-margin-top">
                <h6 className="secondary-font small-margin">You may also like</h6>
                <div className="product-list">
                    {products.map((prod) => (
                        <div key={prod.id} className="product-card">
                            <img src={prod.image[0]} alt={prod.name} />
                            <h3>{prod.name}</h3>
                            <p>${prod.price}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ProductDetails;
