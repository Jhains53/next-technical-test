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

export async function addCartProductService(id: number): Promise<Response> {
    return await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    });
}

export async function cleanCartProductService(): Promise<Response> {
    return await fetch('/api/cart', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}