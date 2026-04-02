# Project Structure

## Carpetas Principales

```
advertising-landing/
├── app/                           # App Router de Next.js
│   ├── layout.tsx                # Layout principal con MUI Theme
│   ├── page.tsx                  # Landing page (raíz /)
│   ├── globals.css               # Estilos globales (CSS puro, sin Tailwind)
│   ├── providers.tsx             # MUI ThemeProvider
│   ├── business/                 # Ruta para negocios
│   ├── manager/                  # Ruta para managers
│   ├── influencer/               # Ruta para influencers
│   └── register/                 # Ruta para registro
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── landing/          # Componentes de secciones de landing
│   │   │       ├── Hero.tsx
│   │   │       ├── Stats.tsx
│   │   │       ├── Benefits.tsx
│   │   │       ├── HowItWorks.tsx
│   │   │       ├── Testimonials.tsx
│   │   │       └── CTA.tsx
│   │   └── common/               # Componentes reutilizables
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── ...
│   └── theme/
│       └── theme.ts              # Tema global de MUI
├── package.json
├── tsconfig.json
└── next.config.js

```

## Paleta de Colores (MUI Theme)

- **Primary (Púrpura)**: #7C3AED - Elementos principales
- **Secondary (Amarillo)**: #FCD34D - Acentos
- **Success (Verde)**: #10B981 - Checkmarks y validaciones
- **Text Primary**: #1F2937 - Texto oscuro
- **Text Secondary**: #6B7280 - Texto gris
- **Background**: #FFFFFF - Fondo principal
- **Background Paper**: #F8F7FF - Fondo secundario

## Dependencias Instaladas

- **Next.js 16.2.2** - Framework React con SSR
- **React 19.2.4** - Librería UI
- **TypeScript 5.9.3** - Tipado estático
- **Material UI 7.3.9** - Componentes UI principales
- **@mui/icons-material 7.3.9** - Iconos
- **@emotion/react & @emotion/styled** - Motor de CSS para MUI
- **ESLint 9.39.4** - Linting

## Restricciones de Estilo

✅ **PERMITIDO**: MUI (sx prop, styled components, ThemeProvider)
✅ **PERMITIDO**: CSS puro en globals.css
✅ **PERMITIDO**: Inline styles en componentes
❌ **PROHIBIDO**: Tailwind CSS (no instalado, no configurado)

## Responsive Breakpoints (MUI)

- **xs**: 0px - Mobile
- **sm**: 640px - Small devices
- **md**: 768px - Tablets
- **lg**: 1024px - Desktops
- **xl**: 1280px - Large desktops

Uso: `sx={{ display: { xs: 'block', md: 'flex' } }}`

## Próximos Pasos

1. Generar componentes de landing (Hero, Stats, Benefits, etc.)
2. Crear Navbar con opciones de Login/Register
3. Implementar secciones responsivas
4. Agregar forma e interactividad
