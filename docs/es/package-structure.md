---
source-updated-at: '2024-07-19T09:06:46.000Z'
translation-updated-at: '2025-04-25T19:07:30.144Z'
id: package-structure
title: Estructura del paquete
---
# Estructura del Paquete

La siguiente estructura garantiza que los paquetes funcionen de manera óptima con nuestro flujo de trabajo de monorepositorio/Nx.

### `./package.json`

- Todos los proyectos de TanStack incluyen `"type": "module"` para establecer la resolución predeterminada de los archivos `.js` como ESM; esto no afecta la construcción para CJS.
- También es esencial incluir un campo `"exports"`.
- Por razones de compatibilidad, se deben incluir los campos `"main"`, `"module"` y `"types"`.
- Todos los paquetes tienen los siguientes scripts, los cuales son almacenados en caché por Nx: `"test:eslint"`, `"test:types"`, `"test:lib"`, `"build"`, `"test:build"`.

### `./tsconfig.json`

- Extiende el archivo tsconfig del nivel raíz (ej. `"extends": "../../tsconfig.json"`).
- Aquí se deben agregar opciones específicas del framework y archivos incluidos.

### `./vite.config.ts`

- Incluye configuración para Vitest y para Vite si se utiliza [@tanstack/config/vite](./vite.md).

### `./src`

- Esta carpeta solo debe contener código que se construye y distribuye a los usuarios.
- No se deben colocar pruebas en esta carpeta, ya que aumentan el tamaño del código distribuido y pueden invalidar accidentalmente la caché de Nx.

### `./tests`

- Esta carpeta debe incluir todos los archivos de prueba.
- También debe incluir cualquier archivo de configuración de pruebas requerido por el framework.
