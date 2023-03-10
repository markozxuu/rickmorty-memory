# Memory game

## Demo video 馃摴

馃憠 馃憠 馃憠 https://www.loom.com/share/73f0d81da1854bcea0501af1d1f0a61f 馃憟馃憟馃憟


## Table of Contents


- [Get started](#get-started)
- [Why i chose vite](#why-i-choose-vite)
- [Development process](#development-process)
- [what can you expect](#what-can-you-expect)
- [Conventions commits](#conventions-commits)
- [Why i chose vercel](#why-i-chose-vercel)
- [Stack](#stack)
- [Metrics web vitals](#metrics-web-vitals)
- [CI/CD](#ci-cd)

## Get started

Los pasos para configurar esto son muy simples. Estoy usando la versi贸n `7.16.7` de pnpm y `v19.0.1` de node.js. Una vez aclarado esto, explicar茅 los comandos encontrados en el archivo `package.json`.


```json
 "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "pre-commit": "lint-staged --allow-empty",
    "test": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  },
```

- dev: ejecutar nuestro proyecto localmente
- build: crear la compilaci贸n en producci贸n y minifica todo
- preview: crear la compilaci贸n en producci贸n y ejecutar la aplicaci贸n en un entorno de producci贸n
- test: ejecuta `vitest` para evualiar todos nuestros test
- test:coverage ejecuta `vitest` nos genera un coverage con el reporte de nuestr贸 c贸digo
- pre-commit: define el hook para ejecutar antes de commit con un el archivo.

## Why i choose Vite

Vite es una excelente opci贸n en comparaci贸n con Create-React-App, ya que tiene muchas ventajas. Vite es mas rapido CRA, esto debido su bundle que es **Rollup-js** al igual que su compilador en modo desarrollo, ofrece grandes beneficios **Out-of-the-box support** como lo son TypeScript, JSX, CSS, SASS y mas... tiene soporte de plugin con relaci贸n a testing. De la misma forma su compilacaci贸n en producci贸n es mas eficiente y rapida.

## Development process

Primero, debemos hablar sobre una parte fundamental de por qu茅 usar `graphQL` y no solo `REST`. La mejor definici贸n que puede haber es esta:

> "Una de las principales ventajas de GraphQL es que permite a los clientes de la API solicitar solo los datos que necesitan, lo que reduce la cantidad de datos innecesarios que se transfieren y mejora el rendimiento"

La abstraci贸n general de como funciona el juego es sencilla tenemos la siguientes estados:
```jsx

const [openedCard, setOpenedCard] = useState<number[]>([]);
const [matched, setMatched] = useState<(string | number)[]>([]);
const [click, setClick] = useState<number>(0);

```

`openedCard` sera el array donde evaluaremos las cards que el usuario tenga selecci贸nado, para ser concreto lo que guardaremos en ese array temporal es el `_index` de elemento, esto esta delimitado para que solo contenga **dos elementos**, tiene sentido ya que vamos a evaluar dos elementos para ver si coincide su id. Con `click` delimitamos las veces el que user puede estar selecionado cards, de ese modo solo puede selecci贸nar dos cartas a la vez.

`matched` es el array donde se almacenara el `id` de las card que hayan hecho match, logicamente se guarda solo un `id`, en lugar de dos.



## What can you expect

- [x] HTML sem谩ntico
- [x] Escrito en TypeScript
- [x] Mobil first
- [x] Testing UI
- [x] P谩gina bonus (404)
- [x] Pixel Perfect Design 
- [x] Fuentes optimizadas (Google Fonts)
- [x] SASS para todo lo de estilos
- [x] Animaciones
- [x] CI/CD (vercel y checklyhq)
- [x] Fetch Data con GraphQL
- [x] Una sopresa al ganar la partida
- [x] Se agrego un `countdown` el board del juego
- [x] E2E (con Checkly)


## Conventions commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) que tiene como finalidad proporcionar un conjunto sencillo de reglas para crear un historial de commits expl铆cito; lo que facilita la escritura de herramientas automatizadas y es facil de leer para los colaboradores del proyecto. Ademas de ayudar a mantener un historial de cambios bien organizado.

## Why i chose Vercel

Tengo muchas razones por la cual elegirlo pero una de ella es que es plataforma de alojamiento altamente escalable y confiable que utiliza tecnolog铆a de clound serverless. Esto significa que mi aplicaci贸n se ejecutar谩 m谩s r谩pidamente y con mayor eficiencia en Vercel, ya que la plataforma se adapta autom谩ticamente al tr谩fico y la demanda.

## Stack

Bueno, esta es mi stack de tecnolog铆as para el front-end.

- react (vanilla)
- react-use-measure
- @reach/router

para mejorar la calidad de c贸digo:
- eslint
- prettier
- typescript
- husky
- lint-staged
- sass
- react-testing-library
- vitest

## Metrics web vitals


Puedes descargar el informe realizado por lighthouse en la carpeta `/metrics`. Pude alcanzar una puntuaci贸n buena, sin duda esto se puede mejorar optanando estrategias como SSG y con el uso de `server components` esto oscilar al 100 en performance.

![alt text for screen readers](https://i.ibb.co/XZXX19k/Screenshot-2023-03-09-at-17-55-17.png)

## CI CD

En el proyecto, se habilita un flujo que desencadena una nuevo deployment para cada nuevo commit, esto se llama dentro de vercel **deployment preview**. Despu茅s de eso, checklyhq ejecuta la prueba E2E con navegadores reales.

![alt text for screen readers](https://i.ibb.co/1MXF4kP/Screenshot-2023-03-09-at-18-41-34.png)




