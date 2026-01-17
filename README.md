# Tarefa 05 - React Concepts Implementation

**Contexto Escolhido:** Tech Store (Vitrine de Produtos Tecnológicos)

Gabriel Fellipe Corrêa Costa

## Link do Repositório

github.com/gbfllp/vitrine

## Descrição do Projeto

Este projeto implementa uma vitrine simples de produtos tecnológicos para demonstrar os seguintes conceitos de React:

1.  **Props**: Passagem de dados para componentes filhos (ex: `name`, `price`).
2.  **Desestruturação**: Recebimento de props de forma limpa no componente `ProductCard`.
3.  **Arrow Function via Props**: A função `handleAddToCart` é passada do `App` para o `ProductCard` e executada no clique do botão.
4.  **Técnicas para evitar vazamentos de estilo**: Utilização de **CSS Modules** (`ProductCard.module.css`) para garantir que os estilos do componente não afetem outros elementos.
5.  **Renderizamento condicional**: Exibição de texto "Indisponível" e desabilitação de botão caso o produto não esteja disponível (`isAvailable`).

## Histórico de Commits

```
$ git log --oneline
0e8676e (HEAD -> master) rev01
```
