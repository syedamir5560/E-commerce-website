import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "./components/Stars";
import axios from "axios";
import AddToCart from "./components/AddToCart";
import CartAmountToggle from "./components/CartAmountToggle";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  // const { getSingleProduct } =
  useProductContext();

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)


  // console.log(singleProduct)

  const getProduct = useCallback(async () => {
    setLoading(true)
    const { data } = await axios.get(`${API}?id=${id}`)
    setProduct(data)
    setLoading(false)
  }, [])

  // const {
  //   id: alias,
  //   name,
  //   company,
  //   price,
  //   description,
  //   category,
  //   stock,
  //   stars,
  //   reviews,
  //   image,
  // } = singleProduct;




  const { id } = useParams();


  useEffect(() => {
    // getSingleProduct(`${API}?id=${id}`);
    getProduct()
    console.log(product)

  }, []);

  if (loading) {
    return <div className="page_loading" style={{ fontSize: '30px', textAlign: 'center', marginTop: '10vh', color: 'red' }}>Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation name={product.name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage image={product.image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{product.name}</h2>
            <Stars stars={product.stars} reviews={product.reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={product.price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={product.price} />
            </p>
            <p>{product.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {product.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {product.id} </span>
              </p>
              <p>
                Brand :<span> {product.company} </span>
              </p>
            </div>
            <hr />
            {
              product.stock > 0 && <AddToCart product={product} />
            }
          </div>
         
        </div>
      </Container>
    </Wrapper>

  )


};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;