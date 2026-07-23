# Portfólio — Jéssica Nascimento

Portfólio pessoal de **Jéssica Nascimento**, Product Designer Sênior.
Feito em **React + TypeScript + Vite**, com animações em **Framer Motion**.

## Rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # sobe o site em http://localhost:5173
```

Outros comandos:

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # testa localmente a versão de produção
```

## Estrutura

```
src/
  components/     Nav, Hero, LogosMarquee, Sobre, Projetos,
                  ComoTrabalho, Trajetoria, Formacao, Contato, Footer, Reveal
  pages/          Home, ProjectDetail
  data/projects.ts   Conteúdo dos projetos (edite aqui para alterar textos)
  assets/         Imagens (foto + screenshots dos projetos)
  index.css       Estilos globais (paleta, tipografia, layout)
```

### Como editar o conteúdo

- **Textos dos projetos:** `src/data/projects.ts`
- **Sobre / Trajetória / Formação / Contato:** cada arquivo em `src/components/`
- **Cores e fontes:** variáveis no topo de `src/index.css` (`:root { --accent: ... }`)
- **Imagens:** substitua os arquivos em `src/assets/` (mantendo os nomes) ou troque os `import` correspondentes

## Publicar na Vercel (grátis)

1. Crie uma conta em [vercel.com](https://vercel.com) (dá pra entrar com o GitHub).
2. Suba este projeto para um repositório no GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfólio Jéssica Nascimento"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portfolio.git
   git push -u origin main
   ```
3. Na Vercel: **Add New → Project → Import** o repositório.
4. A Vercel detecta Vite automaticamente (Build: `npm run build`, Output: `dist`).
   Não precisa configurar nada — o arquivo `vercel.json` já cuida das rotas.
5. Clique em **Deploy**. Em ~1 minuto o site estará no ar com uma URL pública.

Para publicar mudanças depois, é só dar `git push` — a Vercel republica sozinha.

> Alternativas: **Netlify** (mesma ideia; Build `npm run build`, Publish `dist`) ou
> **GitHub Pages** (requer configuração extra do `base` no `vite.config.ts`).
