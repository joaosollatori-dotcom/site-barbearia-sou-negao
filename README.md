# Barbearia Sou Negão

Site institucional da Barbearia Sou Negão — barbearia especializada em corte, barba e prótese capilar em Itabuna, BA.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (build estático, sem servidor)
- **Tailwind CSS 4** + CSS customizado
- **wouter** (roteamento leve)
- **lucide-react** (ícones)

## Desenvolvimento

```bash
pnpm install
pnpm dev          # servidor de desenvolvimento em http://localhost:3000
```

## Build

```bash
pnpm build        # gera dist/ (site estático)
pnpm preview      # pré-visualiza o build
```

O build é 100% estático — o conteúdo de `dist/` pode ser servido por qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Verificação

```bash
pnpm check        # typecheck (tsc --noEmit)
pnpm format       # formata com Prettier
```

## Estrutura

```
client/
  index.html          # HTML base com meta tags SEO e JSON-LD
  src/
    App.tsx           # roteamento (wouter) + ErrorBoundary
    main.tsx          # entry point
    index.css         # estilos (Tailwind + CSS customizado)
    components/
      ErrorBoundary.tsx
    pages/
      Home.tsx        # landing page
      NotFound.tsx    # página 404
vite.config.ts
tsconfig.json
package.json
```
