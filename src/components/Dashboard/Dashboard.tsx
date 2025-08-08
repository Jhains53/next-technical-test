'use client';
import { useEffect, useState } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import ShopingCart from '../ShopingCart/ShopingCart';
import { GetProductListService } from '@/services/products.service';
import IProducts from '@/interface/products';
import { addCartProductService, cleanCartProductService, GetCartProductService } from '@/services/cart.service';

import styles from './dashboard.module.scss';

export default function Dashboard() {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [cartProducts, setCartProducts] = useState<IProducts[]>([]);

    async function fetchProducts() {
        try {
            const data = await GetProductListService();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCart() {
        try {
            const data = await GetCartProductService();
            setCartProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function cleanCart() {
        try {
            const data = await cleanCartProductService();
            setCartProducts(data);
        }catch (error) {
            console.log(error);
        }
    }

    async function addCart(id: number) {
        try {
            const data = await addCartProductService(id);
            setCartProducts(data);
        }catch (error) {
            console.log(error);
        }
    }

        useEffect(() => {
            fetchProducts();
            fetchCart();
        }, []);
    return (
        <div className={styles.container}>
            <ProductsList products={products} onClick={addCart} />
            <ShopingCart cartProducts={cartProducts} onClick={cleanCart} />
        </div>
    );
}