# Estructura Final de la Landing Page - TenloListo

## Estructura de Directorios

```
advertising-landing/
├── public/                  # Imágenes, SVGs y assets estáticos
│   └── images/
│
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Providers.tsx    # ThemeProvider de MUI
│   │   ├── Header.tsx       # Navbar/Header de la landing
│   │   ├── Footer.tsx       # Footer
│   │   ├── Hero.tsx         # Sección Hero
│   │   ├── Stats.tsx        # Sección de Estadísticas
│   │   ├── Benefits.tsx     # Sección de Beneficios
│   │   ├── HowItWorks.tsx   # Sección Cómo Funciona
│   │   ├── Testimonials.tsx # Sección de Testimonios
│   │   └── CTA.tsx          # Llamada a la Acción
│   │
│   ├── theme/
│   │   └── index.ts         # Configuración del tema Material UI
│   │
│   └── hooks/               # Custom hooks (futuro)
│
├── app/                     # App Router de Next.js (en raíz)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Landing page principal
│   └── globals.css          # Estilos globales CSS puro
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Paleta de Colores (MUI Theme)

- **Primary (Púrpura)**: #7C3AED
- **Secondary (Amarillo)**: #FCD34D
- **Success (Verde)**: #10B981
- **Text Primary**: #1F2937
- **Text Secondary**: #6B7280
- **Background**: #FFFFFF
- **Background Paper**: #F8F7FF

## Tecnologías

- Next.js 16.2.2 con App Router
- React 19.2.4
- Material UI 7.3.9
- TypeScript
- ESLint
- ❌ **SIN Tailwind CSS**

## Responsive Breakpoints (MUI)

```
xs: 0px     (Mobile)
sm: 640px   (Small devices)
md: 768px   (Tablets)
lg: 1024px  (Desktops)
xl: 1280px  (Large desktops)
```

Uso: `sx={{ display: { xs: 'block', md: 'flex' } }}`
