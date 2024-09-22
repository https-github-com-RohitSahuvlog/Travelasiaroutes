import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { products } from "../dummy";
import "./productdetails.css";

const ProductDetails = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [index, setIndex] = useState(0);
    const [qty, setQty] = useState(1);
    const [selectedSize, setSize] = useState('S');

    useEffect(() => {
        const fetchProduct = () => {
            const productData = products.find((prod) => prod._id === slug);
            setProduct(productData);
        };

        fetchProduct();
    }, [slug]);

    if (!product) return <div>Loading...</div>;

    const { image, name, details, price } = product;

    const handleBuyNow = () => {
        console.log('Buy Now');
    };

    console.log(product);

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
