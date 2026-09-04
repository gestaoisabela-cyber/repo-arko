One-line: logotipo tipográfico do Método ARKO — "gestão" (Pinyon Script, terracota) + "ARKO" (Fraunces 700, letter-spacing 0.14em, petróleo).

```jsx
<Logo size={32} />                    // horizontal, header
<Logo variant="stack" size={44} />   // stack em duas linhas, cartões/rodapé
<Logo size={72} inverse />           // hero sobre petróleo (troca cores)
<Logo variant="mark" size={40} />    // só o "A" como monograma (favicon, avatar)
```

Não use gradiente, sombra ou contorno na marca. Nunca gire, italize, distorça ou substitua a fonte. Sobre fundos claros (off-white ou bege) usa a paleta padrão; sobre petróleo passa `inverse`. Espaço de proteção mínimo = a altura da letra A. Nunca crie um símbolo gráfico secundário — o "arco" é elemento decorativo do sistema (`<div class="ark-arch__frame">`), não parte do logotipo.
