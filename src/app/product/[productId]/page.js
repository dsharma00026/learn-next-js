"use client"
import { useParams } from "next/navigation"
import style from "./css/productDetail.module.css"
import { useState, useEffect } from "react";

export default function productDetails() {
    const params = useParams();
    const [productData, setProductData] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        const productId = params.productId;
        fetchProductData(productId);
    }, [])

    const fetchProductData = async (productId) => {
        const response = await fetch("https://dummyjson.com/products/" + productId);
        const data = await response.json();
        setProductData(data);
        setIsFetch(true);

    }



    return (
        <div>
            {
                isFetch ?
                    <Design product={productData} />
                    : "data is fetching..."
            }
        </div>
    )
}



function Design(props) {

    return (
        <div className={style.container}>

            {/* LEFT - IMAGE */}
            <div className={style.imageSection}>
                <img src={props.product.thumbnail} className={style.mainImg} />
            </div>

            {/* RIGHT - DETAILS */}
            <div className={style.detailsSection}>

                <h1 className={style.title}>{props.product.title}</h1>
                <p className={style.brand}>Brand: {props.product.brand}</p>

                <p className={style.description}>
                    {props.product.description}
                </p>

                <div className={style.priceRow}>
                    <span className={style.price}>₹ {props.product.price}</span>
                    <span className={style.discount}>
                        {props.product.discountPercentage}% OFF
                    </span>
                </div>

                <div className={style.meta}>
                    <p>⭐ Rating: {props.product.rating}</p>
                    <p>Stock: {props.product.stock}</p>
                    <p>Category: {props.product.category}</p>
                </div>

                <button className={style.btn}>Add to Cart</button>

            </div>
        </div>

    )
}