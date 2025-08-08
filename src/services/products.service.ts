import { ProductsResponse } from '@/interface/product-response';
import IProducts from '@/interface/products';

export async function GetProductListService(): Promise<IProducts[]> {
    const data: ProductsResponse = await fetch('/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( res => res.json());

    return data.results;
}