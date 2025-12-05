# README da pasta `/components`

## Components (Componentes Reutilizáveis)

Esta pasta agrupa todos os componentes que podem ser usados em diversas partes do aplicativo.

### Estrutura recomendada

```
components/
  PrimaryButton/
    index.tsx
    styles.ts
  Input/
    index.tsx
    styles.ts
  Card/
    index.tsx
    styles.ts
```

### Responsabilidade

* Definir elementos visuais reutilizáveis.
* Ser genéricos e configuráveis através de props.
* Não depender de regras específicas de uma tela.

### Boas práticas

* Manter UI e estilos separados.
* Evitar lógica complexa dentro dos componentes.
* Criar componentes pequenos e fáceis de manter.

---