# Design System — Método ARKO

Design system para o Método ARKO, um método de trabalho que sustenta negócios em quatro pilares — **Comercial, Marketing, Gestão e Produto** — como quatro colunas de um mesmo portal (o arco).

O sistema traduz esse método em código: uma paleta de barro e petróleo, tipografia serifada com pausas em escrita à mão, e um símbolo (o arco/portal) usado com parcimônia — nunca em toda peça, apenas onde há passagem, entrada ou emblema.

## Ordem de leitura para agentes

1. `styles.css` (raiz) — só imports; ponto de entrada único do CSS.
2. `tokens/` — variáveis CSS (cores, tipografia, espaçamento, elevação, movimento, semântica).
3. `components/` — primitivas React (`.jsx`) com CSS pareado em `components.css`, tipos em `.d.ts` e uso em `.prompt.md`.
4. `guidelines/` — cartões `.html` que renderizam cada fundamento visual (populam a aba Design System).
5. `assets/` — fontes (`.woff2`) e ícones (SVG Lucide).

Não existe logo em arquivo — o logotipo é 100% tipográfico (ver `components/core/Logo.jsx`).

## Content fundamentals

- **Idioma:** português brasileiro. Tom próximo, adulto, sem gírias, sem "gente" nem "galera".
- **Pessoa:** primeiramente "nós" (o método), depois "você" (quem contrata). Nunca "eu" nem "a gente".
- **Título vs. corpo:** títulos afirmam ("Método com alma."). Corpo explica sem prometer.
- **Verbos:** ação e pausa alternadas — "conduzir", "sustentar", "manter em pé", "abrir portas", "fazer chegar". Evitar verbos publicitários ("transformar", "revolucionar", "impactar").
- **Casing:** frase capitalizada em títulos e botões (`Agendar conversa`, não `AGENDAR CONVERSA`). CAPS reservado a overlines curtos (`MÉTODO ARKO`) e ao lockup `ARKO`.
- **Pontuação:** ponto final em títulos manifesto ("Método com alma."). Sem exclamação.
- **Números:** algarismo com separador PT-BR (`R$ 12.400`, `+4,2%`). Datas por extenso curto (`12 mar`).
- **Emoji:** nunca em produto ou material comercial. Aceito só em canal interno informal.
- **Assinatura em Pinyon Script:** máximo 5% do texto de cada peça. Reservada a *eyebrows*, dedicatórias, e ao "gestão" do lockup. Nunca em botão, dado numérico, ou parágrafo.

Exemplos de copy no tom certo:
> **Método com alma.** Comercial, marketing, gestão e produto conduzidos como um só método — sem atalho e com presença.
>
> *com alma & método* — Quatro pilares, um portal.

## Visual foundations

**Paleta (proporção fixa)**

| Papel                          | Token             | Hex       | Uso  |
|--------------------------------|-------------------|-----------|------|
| Cor dominante                  | `--bege`          | `#D9CBB3` | 40%  |
| Fundo neutro                   | `--off-white`     | `#F4F1EA` | 22%  |
| Cor estrutural escura          | `--petroleo`      | `#1F3A44` | 22%  |
| Destaque secundário            | `--caramelo`      | `#9E6B43` | 7%   |
| Destaque quente                | `--terracota`     | `#9E5034` | 5%   |
| Acento escuro                  | `--vinho`         | `#722F3C` | 3%   |
| Âncora de texto                | `--grafite`       | `#2E2E2C` | —    |

Cores quentes aparecem como brasas — nunca em bloco largo. Petróleo carrega estrutura (headers, footers, CTAs primárias). Terracota é *o* destaque; caramelo é apoio; vinho é acento final e escasso.

**Tipografia**

- **Display:** `Fraunces` — pesos 700 e 900. Títulos, manchetes, `ARKO` no lockup, valores de KPI (tabular). Tracking apertado (`-0.015em`).
- **Corpo:** `Playfair Display` — pesos 400, 500, 600. Texto funcional (parágrafos, listas, formulários, dados). Line-height 1.6.
- **Acento:** `Pinyon Script` — peso 400. Máximo 5% da peça. Usado no `gestão` do lockup, em *eyebrows* e assinaturas.
- **Não usar:** Poppins e IBM Plex (removidas do sistema).

Numerais sempre tabulares (`font-variant-numeric: tabular-nums; font-feature-settings: "tnum" 1, "lnum" 1`) para alinhar em colunas.

**Espaçamento**
Base 4px, escala `--space-1 .. --space-14`. Cartões respiram em `--space-7` (24px). Seções em `--section-y` (96px). Container padrão `--container-max` (1200px).

**Fundos e texturas**
- Seções `off-white` levam textura de **papel artesanal** (fibra suave, pontos micro-esparsos).
- Seções `bege` levam textura de **reboco/parede** (grão fechado, temperatura de superfície pintada).
- Petróleo é liso — bloco sólido, sem textura sobreposta.
- Ver `guidelines/textures.card.html` para o valor exato de `background-image`.

**Formas**
- Radii: `6 / 10 / 14 / 20 / 28` px + pastilha (só em botões e chips).
- **Arco (portal):** `border-top-left-radius:9999px; border-top-right-radius:9999px` — a base fica reta. Elemento decorativo com uso **seletivo** (uma peça a cada campanha). Preenchimento em bege, petróleo ou contorno — nunca em terracota (cansa).
- Bordas ordinárias em `--bege-dark` (linha discreta que sustenta a paleta quente).

**Sombras**
Viés petróleo (rgb dos hex de `--petroleo`) para sombras neutras. `--shadow-warm` (terracota) é reservada à CTA quente.

**Movimento**
- Durações: `--dur-fast 120ms`, `--dur-base 200ms`, `--dur-slow 340ms`, `--dur-reveal 600ms`.
- Easings: `--ease-standard cubic-bezier(.2,0,.2,1)` para controle; `--ease-out cubic-bezier(.16,1,.3,1)` para reveal.
- **Sem bounce**, sem fade excessivo. O sistema respira devagar.

**Estados**
- Hover em botão primário: escurece para `--petroleo-light` (não altera sombra).
- Press: `translateY(1px)` + escurece para `--petroleo-dark`.
- Focus visível: contorno 3px em `--focus-ring` (terracota 40%) — sempre off-set em 2px.
- Disabled: fundo bege sem saturação, texto em `--grafite-hint`.

**Transparência e blur**
Reservados a scrim de dialog (`--petroleo-veil-70` + `--blur-veil`). Nunca em card, botão, ou fundo de seção.

**Imagens**
Preferência por fotografia em tons quentes de barro/madeira/pele, contraste médio, sem filtro frio ou HDR. Retratos preferencialmente em plano fechado. Se emoldurar em arco, mantenha a moldura funcional (não decorativa).

## Iconography

- **Set:** Lucide 1.40 (linha 1.5–2px, cantos arredondados, `currentColor`).
- **Como substituição sinalizada:** Lucide não é o ícone-set próprio da marca; documente antes de escalar o uso.
- **SVGs em `assets/icons/`** — inline via `<img>` para máscara com currentColor (`filter` no cartão de iconografia serve de exemplo de tint em petróleo).
- **Emoji:** nunca em produto.
- **Unicode como ícone:** não usar.
- **Ícone próprio da marca:** não há. O único símbolo visual da identidade é **o arco** (forma, não glifo) — implementado como um elemento CSS, não como SVG.

## Logo

Logotipo 100% tipográfico, sem arquivo raster ou SVG. Composição:

```
gestão   ARKO
↑        ↑
Pinyon   Fraunces 700
Script   letter-spacing 0.14em
```

Sobre `off-white` ou `bege`: `gestão` em `--terracota`, `ARKO` em `--petroleo`.
Sobre `--petroleo`: passe `inverse` — `gestão` em `--bege`, `ARKO` em `--off-white`.

Componente: `components/core/Logo.jsx`. Variantes: `horizontal` (default), `stack`, `mark` (só o "A" como monograma).

**Nunca** aplique gradiente, sombra, contorno ou italic. **Nunca** substitua a fonte. **Nunca** desenhe um símbolo secundário para acompanhar o logo — o arco existe como elemento decorativo do sistema, não como parte da marca.

## Index (manifesto da raiz)

- `styles.css` — entrada única de CSS (só imports).
- `readme.md` — este arquivo.
- `thumbnail.html` — capa do design system (portal em petróleo com o lockup em bege).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `semantic.css`, `base.css`.
- `components/` — primitivas React:
  - **core** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`, `Logo`
  - **forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Field`
  - **feedback** — `Tooltip`, `Dialog`, `Toast`
  - **navigation** — `Tabs`
  - **brand** — `SectionHeading`, `StatBlock`, `StepItem`, `TestimonialCard`
- `guidelines/` — cartões de fundamentos (grupos **Colors**, **Type**, **Spacing**, **Brand**).
- `assets/fonts/` — 6 arquivos `.woff2`: Fraunces (variable + ext), Playfair Display (variable + ext), Pinyon Script (400 + ext).
- `assets/icons/` — Lucide SVG (substituição sinalizada).

## Fontes usadas

Baixadas do Google Fonts (v38 para Fraunces, v40 para Playfair Display, v24 para Pinyon Script), servidas localmente em `assets/fonts/` para evitar dependência de terceiros e para dar respostas mais rápidas de fonte no primeiro paint.

Fraunces e Playfair Display são fontes variáveis (um único `.woff2` cobre múltiplos pesos via eixo `wght`) — os `@font-face` em `tokens/fonts.css` declaram um mapeamento explícito por peso para o navegador escolher a instância correta.
