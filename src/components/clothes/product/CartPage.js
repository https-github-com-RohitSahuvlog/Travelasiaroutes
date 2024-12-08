import styled, { css } from "styled-components";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action/cartActions";
import Axios from "../../../api";

const CartPage = () => {
  const cartProducts = useSelector((item) => item.cart.cartItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  const moreOfThisProduct = (id) => {
    const product = cartProducts.find(p => p._id === id);
    if (product) {
      dispatch(addToCart(id, product.qty + 1));
    }
  };

  const lessOfThisProduct = (id) => {
    const product = cartProducts.find(p => p._id === id);
    if (product && product.qty > 1) {
      dispatch(addToCart(id, product.qty - 1))
    }
  };

  const goToPayment = async () => {
    setIsLoaded(true);
    if (!name || !email || !city || !postalCode || !streetAddress || !country) {
      toast.error('Please fill all the fields.', { position: "top-right" });
      return;
    }
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
        toast.error('Failed to process payment. Please try again.', { position: "top-right" });
      }
    } catch (error) {
      console.error('Error during payment process:', error.response ? error.response.data.message : error.message);

      toast.error('Failed to process payment. Please try again.', { position: "top-right" });
    } finally {
      setIsLoaded(false);
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
                  <th>Size</th>
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
            <h3>Order Confirmation</h3>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              required
              onChange={ev => setName(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              required
              onChange={ev => setEmail(ev.target.value)}
            />
            <Input
              type="number"
              placeholder="phone"
              value={phone}
              name="phone"
              required
              onChange={ev => setPhone(ev.target.value)}
            />
            <CityHolder>
              <Input
                type="text"
                placeholder="City"
                value={city}
                name="city"
                required
                onChange={ev => setCity(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                name="postalCode"
                required
                onChange={ev => setPostalCode(ev.target.value)}
              />
            </CityHolder>
            <Input
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              required
              name="streetAddress"
              onChange={ev => setStreetAddress(ev.target.value)}
            />
            <Input
              type="text"
              placeholder="Country"
              value={country}
              name="country"
              required
              onChange={ev => setCountry(ev.target.value)}
            />
            <Button black block onClick={goToPayment} disabled={isLoaded}>
              Send Order
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
  padding: 0.5rem;
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
    display: inline-block;
    align-items: center;
    justify-content: center;
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
  ${props => props.disabled && css`
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  `}
`;

const Button = styled.button`
  ${ButtonStyle}
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
  margin-top: 0.5rem;
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