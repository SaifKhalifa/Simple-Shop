import { useState } from "react";
import CardButton from "./CardButton";
import Cart from "./Cart";

const Card = (props) =>{
    const [itemCount, setItemCount] = useState(0);

    const ItemCountHandler = () => {
        setItemCount(itemCount + 1);
    }

    let discountPercent = props.discountPercent;
    let saleTitle = ""
    let productImageSource = props.productImageSource || "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    let productTitle = props.productTitle || "Product"
    let originalPrice = props.originalPrice || "1"
    let discountPrice = 0

    if(discountPercent > 0.00){
        saleTitle = "Sale " + Math.floor(discountPercent * 100) + "%"
        discountPrice = originalPrice - (originalPrice * discountPercent)
        originalPrice = "$" + originalPrice 
    }
    else{
        saleTitle = ""
        discountPrice = originalPrice
        originalPrice = ""
    }
    
    return(
        <div className="col mb-5">
        <div className="card h-100">
            <div className="badge bg-dark text-white position-absolute">{saleTitle}</div>
            <img className="card-img-top" src={productImageSource} alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{productTitle}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div> {/*These stars don't work, i don't know why!!!*/}
                        <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">{originalPrice}</span>
                    ${discountPrice} {/*discountPrice will be the original price if there's no discount*/}
                </div>
            </div>
            <CardButton buttonText = {props.buttonText} onClick={ItemCountHandler} />
        </div>
    </div>
    );
};

export default Card;