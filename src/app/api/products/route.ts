import { NextResponse } from 'next/server';

import { PRODUCTS } from '@/data/products';

export async function GET() {

    if (!PRODUCTS) return NextResponse.json({ message: 'Error al cargar los productos' }, { status: 404 });
    
    return NextResponse.json({ results: PRODUCTS }, { status: 200 });
}