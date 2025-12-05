Aqui estão os READMEs revisados **sem emojis**, em formato profissional e prontos para copiar e colar no seu projeto.
# README da pasta `/screens`

## Screens (Telas)

Esta pasta contém todas as telas do aplicativo, organizadas cada uma em seu próprio diretório.

### Estrutura recomendada

```
screens/
  Home/
    index.tsx
    styles.ts
  Login/
    index.tsx
    styles.ts
  Perfil/
    index.tsx
    styles.ts
```

### Responsabilidade

* Representar páginas completas da aplicação.
* Conter lógica de interface, layout e comportamentos específicos de cada tela.
* Utilizar componentes reutilizáveis quando necessário (os componentes ficam em `/components`).

### Boas práticas

* Criar um arquivo de estilos separado (`styles.ts`).
* Manter o arquivo da tela limpo e organizado.
* Evitar duplicação de código entre telas.
