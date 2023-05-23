import { useState } from "react";
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {

    const[details, setDetails] = useState(false);

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image}
                className="w-1/6"
                alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button className="py-2 px-4 border bg-yellow-400"
            onClick={() => setDetails(!details)}
            >Show details</button>
            {details && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
}