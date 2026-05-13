"use client"

import { useEffect, useState } from "react"
import style from "./css/product.module.css"
import { useRouter } from "next/navigation";


export default function Product() {

    const [products, setProducts] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        //here we use effecr to fetch product data from api for first time 

        getAllProductsList();
        setIsFetch(true);

    }, [])

    // useEffect(() => {
    //     console.log(products);
    // }, [products])

    const getAllProductsList = async () => {
        //here we first fetch response from api 
        const response = await fetch("https://dummyjson.com/products");
        //here we convert response in actuall data using json
        const data = await response.json();
        //here we storeData into product list
        setProducts(data.products);
        //console.log(data.products);
        //console.log(products);

    }
    return (
        <main>
            <h2>
                product Page
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {isFetch ?

                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    )) :

                    "data not fetch"
                }

            </div>
        </main>
    )
}

/*
here we learn about how to fetch product data into next js using api
*/

function ProductCard(props) {
    const navigate = useRouter();

    return (
        <div className={style.card} >
            <img className={style.cardImg} src={props.product.images}></img>
            <div className={style.cardContent}>
                <div className={style.cardHeader}>
                    <h2>{props.product.title}</h2>
                    <p>{props.product.brand}</p>
                </div>
                <p className={style.cardDesc}>{props?.product?.description?.slice(0, 25)}</p>
            </div>
            <div className={style.cardFooter}>
                <div className={style.priceBox}>
                    <h2>{props.product.price}</h2>
                    <h3>{props.product.discountPercentage}</h3>
                </div>
                <div className={style.extraBox}>
                    <h3>{props.product.stock}</h3>
                    <h3>{props.product.rating}</h3>
                </div>
                <button onClick={() => navigate.push('/product/' + props.product.id)}>
                    View Details
                </button>
            </div>
        </div>
    )
}