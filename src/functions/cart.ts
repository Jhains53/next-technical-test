import IProducts from '@/interface/products';
import { PRODUCTS } from '@/data/products';

const cart: IProducts[] = [];

export function addToCart(id: number): IProducts | null {
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) return null;

    cart.push(product)
    return product;
}

export function getCart(): IProducts[] {
    return cart;
}

export function cleanCart(): IProducts[] {
    cart.length = 0;
    return cart;
}