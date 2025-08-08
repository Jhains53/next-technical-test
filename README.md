# Proyecto Fullstack con Next.js

Este proyecto es una tienda básica de productos tecnológicos implementada con **Next.js (App Router)**. Incluye una API REST y un frontend que permite listar productos, agregarlos al carrito y visualizar la mejor combinación de productos bajo un presupuesto máximo.

---

## Características

### Backend (API)
- **`GET /api/products`**: Retorna una lista fija de productos.
- **`POST /api/cart`**: Recibe el ID de un producto y lo agrega al carrito (en memoria).
- **`GET /api/cart`**: Devuelve los productos agregados al carrito.
- **`PUT /api/cart`**: Limpia el Carrito.

> Nota: No se usa base de datos, el carrito se gestiona en memoria.

---

### Frontend
- Visualiza el listado de productos desde `/api/products`.
- Permite agregar productos al carrito usando `/api/cart`.
- Muestra el contenido actual del carrito.
- Incluye una herramienta para calcular la mejor combinación de productos con un presupuesto dado.

---

## Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tuusuario/next-technical-test.git
cd next-technical-test
```

### 2. Instala las dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecuta el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

---

## Tecnologías usadas

- Next.js (App Router)
- TypeScript
- React
- Zod (para validación de entradas)
- CSS Modules
