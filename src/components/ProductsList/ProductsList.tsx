'use clietn;'
import { useState } from 'react';
import IProducts from '@/interface/products';
import XIcon from '../icons/XIcon';
import findBestCombination from '@/functions/findBestCombination';

import styles from './products-list.module.scss';

interface IProductsList {
    products: IProducts[];
    onClick: (id: number) => void;
}

export default function ProductsList({ products, onClick }: IProductsList) {
    const [budget, setBudget] = useState<number>(0);
    const [combination, setCombination] = useState<IProducts[] | null>(null);
    const [addingProductId, setAddingProductId] = useState<number | null>(null);

    const handleClick = async (id: number) => {
		try {
            setAddingProductId(id);
            await onClick(id); 
        } catch (error) {
            console.log('Error al agregar:', error);
        } finally {
            setAddingProductId(null);
        }
	};

    return (
        <>
            <section className={styles.container}>
                <div className={styles.title}>
                    <p>{'Listado de productos'}</p>
                    <div className={styles.form}>
                        <label>{'Ingrese presupuesto'}</label>
                        <input
                            type='number'
                            placeholder='Ingrese presupuesto'
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                        />
                        <button onClick={() => {
                            setCombination(findBestCombination(products, budget))
                        }}>
                            {'Calcular'}
                        </button>
                    </div>
                </div>
                <div className={styles.list}>
                    {products.map(
                        (
                            {
                                name,
                                price
                            },index: number
                        ) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.section}>
                                    <div className={styles.one}>
                                    <p><b>{'Nombre: '}</b>{name}</p>
                                    <p><b>{'Precio: '}</b>{price}{' USD'}</p>
                                    </div>
                                    <div className={styles.two}>
                                        <button
                                            onClick={() => {
                                                handleClick(products[index].id);
                                            }}
                                            className={styles.buttonAdd}>
                                            {addingProductId === products[index].id ? 'Agregando...' : 'Agregar al Carrito'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                )}
                </div>
            </section>
            {combination && (<div className={styles.modal}>
				<button
					role='button'
					aria-label='Botón de Cerrar'
					className={styles.closeButton}
					onClick={() => {
						setCombination(null);
					}}>
					<XIcon color='#0B0B0B' />
				</button>
                <div className={styles.content}>
                    <div className={styles.window}>
                        <h2>{ `Combinación de productos de $${budget}`}</h2>
                        <div className={styles.list}>
                            {combination.map(
                                (
                                    {
                                        name,
                                        price
                                    },index: number
                                ) => (
                                    <div className={styles.card} key={index}>
                                        <div className={styles.section}>
                                            <p><b>{'Nombre: '}</b>{name}</p>
                                            <p><b>{'Precio: '}</b>{price}{' USD'}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}