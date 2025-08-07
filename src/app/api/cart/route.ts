import { NextRequest, NextResponse } from 'next/server';
import { addToCardSchema } from '@/app/schemas/cart.schema';
import { addToCart, getCart } from '@/app/functions/cart';

export async function GET() {
    const cart = getCart();

    if (cart.length === 0) return NextResponse.json({ message: 'El carrito esta vacio' }, { status: 200 });

    return NextResponse.json({ cart }, { status: 200 } );
}

export async function POST(request: NextRequest) {
    const { id } = await request.json();

    try {

        const result = addToCardSchema.safeParse({ id });

        if (!result.success) {
            return NextResponse.json({ message: result.error.issues }, { status: 400 });
        } else {

            const product = addToCart(id);

            if(!product) return NextResponse.json({ message: 'Producto no encontrado' }, { status: 400 });

            return NextResponse.json({ message: product }, { status: 200 });
        }

    } catch (error: unknown) {
        return NextResponse.json(
            { message: 'Error al añadir el producto'},
            { status: 500}
        );
    }
}

