import IProducts from './products';

export interface ProductsResponse {
    results: IProducts[];
    ok: boolean;
}