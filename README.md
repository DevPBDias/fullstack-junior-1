# Desafio Técnico NaranjaLabs - Full Stack Junior

## 📌 Sobre o projeto:

Este desafio irá verificar se o candidato possuí as seguintes habilidades em um nível básico:
- Noções de Nextjs
- Noções de Tailwind
- Noções de Backend
- Git e Github

<details><summary>Fork do repositório do desafio</summary>

> <a href="https://github.com/NaranjaLabs/fullstack-junior-1" target="_blank">https://github.com/NaranjaLabs/fullstack-junior-1</a>

</details>
<details>
  <summary> Requisitos</summary>

- O projeto foi criado utilizando o Nextjs
- Foi configurado tailwind
  
### Frontend
  - A rota / exibe um hero, de acordo com o design escolhido, com pixel perfect
### Backend

  - Todas as rotas recebem um secret
    - Caso o secret seja diferente de "naranja-labs", deverá retornar um erro com o melhor status code para essa situação.
  - A rota /jobs retorna um json com todas as informações do arquivo jobs.ts (O local onde este arquivo esta localizado pode ser alterado de acordo com seu desejo)
  - a rota /jobs?level=Junior deverá retornar apenas os jobs de level Junior
  - a rota /job/[id] deverá ter o seguinte comportamento:
    - Caso o id não exista no arquivo jobs.ts, deverá retornar um erro com um status code mais adequado para essa situação e uma messagem.
    - Caso o id exista, deverá retornar apenas o job ao qual o id seja correspondente.
  - a rota /job/submit deverá receber um body com a seguinte estrutura:

    ```
    {
      name: string,
      age: number,
      phone: string,
      state:string,
      city: string
    }
    ```

    - Caso o body não seja enviado, deverá retornar um erro com o melhor status code para esse caso e uma mensagem
    - Caso esteja tudo ok com o body, deverá retornar um json com a seguinte estrutura:

    ```
    {
      message: Thank you for your
      application, ${name}
    }
    ```
 
</details>
<details><summary>Pontos observados no desafio</summary>
  
- Atente-se a qualidade do seu código
- Atente-se ao pixel perfect
- Cuidado com commit bomba
- Faça commits bem descritivos

</details>
<details><summary>Aprendizados</summary>
 <ul>
  <li>Aprender NextJs do zero em 2 dias com a leitura da documentação e de vídeos no Youtube</li>
  <li>Estilizar com Tailwind de forma mais limpa, menos verbosa nos componentes React</li>
</ul>
</details>
</br>

## ⁉️ O que deverá ser desenvolvido

- O candidato deverá escolher e desenvolver uma das heros sections dentro deste figma: https://encurtador.com.br/buzKZ
- O candidato deverá desenvolver uma rota backend utilizando Nextjs
- Tanto o front-end quanto o back-end devem ser feitos no mesmo projeto do Nextjs

<details>
  <summary>Layout escolhido</summary>
  <img width="1920" alt="03  Creative Company" src="https://github.com/DevPBDias/fullstack-junior-1/assets/98185872/e85db8d7-3b60-4a51-a698-e797b333e070">
</details>
<details>
  <summary>Foto do código</summary>
  
![image](https://github.com/DevPBDias/fullstack-junior-1/assets/98185872/5be8b4ec-37d4-4d03-a0ae-9c17a481caa0)

</details>
</br>

## 🖥 Quais tecnologias foram utilizadas?
<div align="left">
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
	<img width="32" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
<img width="32" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
</div>
</br>
<details>
  <summary>Frameworks e bibliotecas (versões utilizadas)</summary>
  
  ```js
    - React: 18
    - Next: 14.2.0
    - Typescript: 5
    - Tailwindcss: 3.4.1
  ```
</details>
</br>

## 🔎 Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./`

<details>
  <summary>Como o projeto está estruturado?</summary>

  - `./public/assets` Onde está todas as imagens e os ícones que vão ser usadas no projeto.
  
  - `./src/app:` Este projeto com o App Router, e possui rotas somente para back-end. Então esta pasta você pode localizar a página principal, o layout com as configurações e o favicon do site.

  - `./src/app/api:` Contém as rotas do back-end com os metódos GET e POST. Além de conter um middleware para interceptar as rotas.

  - `./src/app/api/[id]` Rota do back-end com o metódo GET para buscar o trabalho pelo id.

  - `./src/app/api/submit` Rota do back-end com o metódo POST para enviar dados do usuário.
  
  - `./src/components:` Onde está os componentes que serão reutilizados em diversas partes do código. Neste projeto temos os components:
      - Card
      - HeroImage
      - HeroServices
      - HeroText
      - Navbar
      - ScrollArrow
       
  - `./src/constants:` Diretório onde estão localizados variáveis imutáveis que serão utilizadas na app.
        
  - `./src/database:` Diretório onde estão localizados os dados que deve ser checcados pelo back-end.

  - `./src/interface:` Diretório onde estão localizados todas as tipagens necessárias para a app.
        
  - `./src/styles:` Diretório onde estão localizados todo o css global da app com suas variáveis globais.
    
</details>

<details>
  <summary>Como rodar o projeto na minha máquina?</summary>

- Vale ressaltar que já está o link do site no topo desta documentação. Mas caso queira analisar o código fonte fique a vontade para instalar este case na sua máquina! Tutorial a baixo:

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
         brew install git
        ```
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

- Abra o terminal (no Windows, você pode usar o Git Bash, que é instalado junto com o Git).

- Navegue até o diretório onde deseja armazenar o projeto.

- Execute o comando para clonar o repositório:

    ```bash
    git@github.com:DevPBDias/fullstack-junior-1.git
    ```
- Após clonar o repositório, navegue até a pasta do projeto
    ```bash
    cd fullstack-junior-1
    ```

- Agora você pode abrir os arquivos do projeto com seu editor de texto ou IDE preferido. Exemplo do vsCode: 
    ```bash
    code .
    ```

- 🚨 Não esqueça que para não ocorrer erros no código ao clonar ele, você deve fazer o comando abaixo 🚨
    ```bash
    npm i   
    ```

- Pronto! Todo o site estará funcionado na sua máquina. Porém, caso precise de alguma ajuda em algo entre em contato comigo pelo meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</p>

</details>
</br>

## 🤝🏼 Vamos nos conectar?

<h4>🎉 É isso! Este é o projeto finalizado, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</h4>

<h4>🚀 Se gostou desse projeto, confira mais projetos como este no meu <a href="https://portfolio-final-jade-pi.vercel.app" target="_blank">Portfolio</a>.</h4>

<h4>👋🏻 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros <a href="https://github.com/DevPBDias" target="_blank">repositórios</a>?</h4>
</br>

## ❤️ Créditos

<details>
  <summary>Créditos do figma total a equipe NaranjaLabs</summary>
  
> <a href="https://encurtador.com.br/buzKZ" target="_blank">https://encurtador.com.br/buzKZ</a>

</details>
<details>
  <summary>Créditos dos emojis</summary>

> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

</details>
<details>
  <summary>Créditos dos ícones</summary>

> <a href="https://marwin1991.github.io/profile-technology-icons/" target="_blank">https://marwin1991.github.io/profile-technology-icons/</a>

</details>
