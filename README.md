# Base dos projetos (Componentes)


## Uma breve explicação do que é feito:

## Um arquivo `HTML` pode ser visto em forma de `árvore`(estrutura de dados que tem como premissa sua composição de  vértices e arestas[com ou sem peso]) 
## Como exemplo, o seguinte código HTML:

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 id="H1-1"></h1>
    <p id="P-2"></p>
    
    <div id="DIV-3">

        <p id="P-4"></p>
        <div id="DIV-5">
            <a id="A-6" href=""></a>
        </div>

    </div>
</body>

</html>

```
## Visualizando este mesmo código, porém em forma de árvore:
<p align="center">
  <img src="https://i.ibb.co/3kGwSQq/arvore-1.png" alt="swagger documentation1">
</p>

## Basicamente iremos criar uma árvore auxiliar(componente) e depois adicionar a árvore original.Ficando da seguinte forma:
<p align="center">
  <img src="https://i.ibb.co/K5tf4n3/arvore-2.png" alt="swagger documentation1">
</p>



