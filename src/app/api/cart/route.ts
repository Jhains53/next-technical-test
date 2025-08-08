import { NextRequest, NextResponse } from 'next/server';
import { addToCardSchema, CartSchema } from '@/schemas/cart.schema';
import { addToCart, cleanCart, getCart } from '@/functions/cart';
import { SafeParseReturnType } from 'zod';

export async function GET() {
    const cart = getCart();

    if (cart.length === 0 || cart === null) return NextResponse.json({ message: 'El carrito esta vacio' }, { status: 200 });

    return NextResponse.json({ results: cart }, { status: 200 } );
}

export async function POST(request: NextRequest) {
    const { id } = await request.json();

    try {

        const result: SafeParseReturnType<CartSchema, CartSchema> = addToCardSchema.safeParse({ id });

        if (!result.success) {
            return NextResponse.json({ message: result.error.issues }, { status: 400 });
        } else {

            const product = addToCart(id);

            if(!product) return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 });

            const cart = getCart();

            return NextResponse.json({ results: cart }, { status: 200 });
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return NextResponse.json(
            { message: `Error al añadir el producto (${error.message})`},
            { status: 500}
        );
    }
}

export async function PUT() {
    cleanCart();
    return NextResponse.json({ message: 'Se limpio el carrito'},{ status: 200 } );
}

