This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Notas
En este projecto tutorial instalamos el paquete npm install standard -p

standard es un linter de JavaScript, es decir, una herramienta que analiza su código JavaScript para verificar que cumple con ciertas convenciones de estilo de codificación.

Al ejecutar:

npm install standard -p

Estás instalando el paquete standard de forma global (-g), de modo que estará disponible en tu terminal y podrás ejecutar:

standard <archivo.js>

Para analizar el archivo archivo.js con el linter standard.

En resumen, instalar standard de esta forma te permitirá:

    Verificar que tu código JavaScript sigue el estilo de código impuesto por standard
    Corregir automáticamente problemas de estilo de código comunes
    Mantener un código limpio y legible siguiendo las convenciones de standard

Algunas de las convenciones impuestas por standard son:

    Usar camelCase para nombres de variables
    Usar comillas simples para cadenas
    Poner punto y coma al final de cada declaración
    Indentar con 4 espacios, no tabs
    Y más ...

Es una forma fácil de asegurar cierto nivel de consistencia en el estilo de tu código JavaScript.

Luego en el archivo .eslintrc.json pusimos la siguiente linea 
"extends": ["./node_modules/standard/eslintrc.json", "next/core-web-vitals"]

El archivo .eslintrc.json es un archivo de configuración para ESLint, una herramienta de análisis de código que se usa para detectar errores y hacer sugerencias de estilo de código.

En un proyecto Next.js, el archivo .eslintrc.json sirve para configurar las reglas y opciones de estilo de código que ESLint aplicará a los archivos JavaScript de su proyecto. Por ejemplo, puede configurar:

    Reglas específicas de estilo, como requerir llaves en todas las declaraciones if.
    Qué versiones de JavaScript (ES2015, ES2016, etc.) soporta el proyecto.
    Qué plugins de ESLint se usarán (como eslint-plugin-react para código React)
    Opciones generales como el tamaño máximo de línea.

En resumen, le permite configurar el linter ESLint específicamente para su proyecto Next.js, ayudando a mantener un código con estilo y libre de errores.

