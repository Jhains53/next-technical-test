
export async function addCartProductService(id: number): Promise<Response> {
    return await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    });
}