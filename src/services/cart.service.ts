import { ProductsResponse } from '@/interface/product-response';
import IProducts from '@/interface/products';

export async function GetCartProductService(): Promise<IProducts[]> {
    const data: ProductsResponse = await fetch('/api/cart', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( res => res.json());

    return data.results;
}