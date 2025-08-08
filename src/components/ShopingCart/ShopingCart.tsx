import IProducts from '@/interface/products';

import styles from './shopin-cart.module.scss';

interface IShopinCart {
    cartProducts: IProducts[];
    onClick: () => void;
}

export default function ShopingCart({ cartProducts, onClick } : IShopinCart){
    const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

    const NotFound = () => {
        return <p>el carrito esta vacio</p>;
    } 

    return  (
        <div className={styles.contariner}>
            <div className={styles.title}>
                <p>{'Carrito de compras'}</p>
                <button onClick={() => {handleClick()}}>
                    {'Limpiar'}
                </button>
            </div>
            <hr />
            <br />
            <div className={styles.section}>
                {!cartProducts? (<NotFound/>) : 
                (<div className={styles.list}>
                {cartProducts.map(
                    (
                        {
                            name,
                            price
                        }, index: number
                    ) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.section}>
                                <div className={styles.one}>
                                <p><b>{'Nombre: '}</b>{name}</p>
                                <p><b>{'Precio: '}</b>{price}{' USD'}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
                </div>)}
            </div>
        </div>
    );
}