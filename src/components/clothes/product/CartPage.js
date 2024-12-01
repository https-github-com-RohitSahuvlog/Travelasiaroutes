import styled, { css } from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/action/cartActions";
import Axios from "../../../api";

const CartPage = () => {
  const cartProducts = useSelector((item) => item.cart.cartItems);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  console.log("cartprocessing", cartProducts);

  const moreOfThisProduct = (id) => {
    const product = cartProducts.find(p => p._id === id);
    if (product) {
      dispatch(addToCart(id, product.qty + 1));
    }
  };

  const lessOfThisProduct = (id) => {
    const product = cartProducts.find(p => p._id === id);
    if (product && product.qty > 1) {
      dispatch(removeFromCart(id));
    }
  };

  const goToPayment = async () => {
    try {
      const totalPrice = cartProducts.reduce((total, product) => total + product.price * product.qty, 0);

      const shippingInfo = {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
      };

      const response = await Axios.post('/api/orders/checkout', {
        cartProducts,
        totalPrice,
        shippingInfo,
      });

      if (response.status === 201) {
        setIsSuccess(true);
      } else {
        toast.error('Failed to process payment. Please try again.', { position: toast.POSITION.TOP_RIGHT });
      }
    } catch (error) {
      // General error handling
      console.error('Error during payment process:', error.response ? error.response.data.message : error.message);

      // Optional: Display error message to user
      // showToast('An error occurred during the payment process. Please try again.', 'error');
    }
  };


  let total = 0;
  for (const product of cartProducts) {
    total += product.price * product.qty;
  }

  if (isSuccess) {
    return (
      <Center>
        <ColumnsWrapper>
          <h2>Thanks for your order!</h2>
          <p>We will email you when your order is sent.</p>
        </ColumnsWrapper>
      </Center>
    );
  }

  return (
    <Center>
      <Wrapper>
        <Box>
          <h3>Cart</h3>
          {!cartProducts?.length && (
            <h3>Your cart is empty</h3>
          )}
          {cartProducts?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts?.map(product => (
                  <tr key={product._id}>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <img src={product.image[0]?.url} alt="" />
                      </ProductImageBox>
                      <Text>{product.name}</Text>
                    </ProductInfoCell>
                    <td>
                      <Button onClick={() => lessOfThisProduct(product._id)}>-</Button>
                      <QuantityLabel>
                        {product.qty}
                      </QuantityLabel>
                      <Button onClick={() => moreOfThisProduct(product._id)}>+</Button>
                    </td>
                    <td>
                      ${product.price * product.qty}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>${total}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Box>
        {!!cartProducts?.length && (
          <Box>
            <h3>Order information</h3>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={ev => setName(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={ev => setEmail(ev.target.value)}
            />
            <CityHolder>
              <Input
                type="text"
                placeholder="City"
                value={city}
                name="city"
                onChange={ev => setCity(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                name="postalCode"
                onChange={ev => setPostalCode(ev.target.value)}
              />
            </CityHolder>
            <Input
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              name="streetAddress"
              onChange={ev => setStreetAddress(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Country"
              value={country}
              name="country"
              onChange={ev => setCountry(ev.target.value)}
            />
            <Button black block onClick={goToPayment}>
              Continue to payment
            </Button>
          </Box>
        )}
      </Wrapper>
    </Center>
  );
};

export default CartPage;

const Text = styled.div`
text-align: left;
margin-left: 1rem;
`;

export const ButtonStyle = css`
  border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}
  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${props => props.black && !props.outline && css`
    background-color: #000;
    color: #fff;
  `}
  ${props => props.black && props.outline && css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `}
  ${props => props.size === 'l' && css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;

const Button = styled.button`
  ${ButtonStyle}
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  font-size : 1rem;
  justify-content : center;
  text-align : center;
  flex-direction :column;
  min-height : 45vh;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;

`

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const Center = styled.div`
  max-width: 800px;
  margin: 150px auto;
  padding: 0 20px;
`;


const Table = styled.table`
  width: 100%;
  th{
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: .7rem;
  }
  td{
    border-top: 1px solid rgba(0,0,0,.1);
  }
`;