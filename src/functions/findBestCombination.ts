import IProducts from '@/interface/products';

export default function findBestCombination( products: IProducts[], budget: number ) {

        let bestCombination: IProducts[] = [];
        let bestTotal = 0;

        const totalCombination = 1 << products.length;

        for (let i: number = 0; i < totalCombination; i++) {
            const combination: IProducts[] = [];
            let total = 0;

            for (let j: number = 0; j < products.length; j++) {
                if(i & (1 << j)) {
                    const product = products[j];
                    combination.push(product);
                    total += product.price;
                }
            }

            if(total <= budget && total > bestTotal) {
                bestCombination = combination;
                bestTotal = total;
            }
        }


        return bestCombination;
    }