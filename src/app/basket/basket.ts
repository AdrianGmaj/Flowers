import { ProductResponse } from "../admin/admin/products/ProductResponse";

export interface Basket {

    products:Array<ProductResponse>;
    price: number
}
