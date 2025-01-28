
# **Task List**

Uma aplicação de lista de tarefas desenvolvida com **Angular 19**, **Bootstrap Icons** e **componentes personalizados**. Os dados das tarefas são armazenados no **SessionStorage** para simular a persistência local. Este projeto foi criado como parte do meu portfólio para demonstrar habilidades em desenvolvimento front-end com Angular.

---

## 🚀 **Funcionalidades**

- **Adicionar Tarefa**: Insira uma nova tarefa na lista.
- **Editar Tarefa**: Atualize o texto das tarefas existentes.
- **Remover Tarefa**: Exclua tarefas da lista.
- **Marcar como Concluída**: Riscando o texto ao concluir uma tarefa.
- **Persistência Temporária**: Os dados são armazenados no **SessionStorage** enquanto o navegador está aberto.

---

## 🛠️ **Tecnologias Utilizadas**

- **Angular 19**: Framework principal para a construção do projeto.
- **Bootstrap Icons**: Ícones leves e modernos para estilizar a interface.
- **SCSS**: Estilos personalizados para uma interface elegante.
- **SessionStorage**: Armazenamento local para simular persistência de dados.
- **Componentes Customizados**: Inputs e botões criados sob medida.

---

## 📂 **Estrutura do Projeto**

```
src/
├── app/
│   ├── components/
│   │   ├── task-item/        # Componente individual de tarefa
│   │   ├── task-list/        # Componente da lista de tarefas
│   │   └── input-item/       # Componente de entrada personalizado
│   ├── services/
│   │   └── storage.service.ts # Serviço para manipulação do SessionStorage
│   └── app.component.ts      # Componente raiz
├── assets/
│   └── icons/                # Ícones utilizados no projeto
├── styles.scss               # Estilos globais e variáveis de cores
└── index.html                # Arquivo principal do HTML
```

---

## 🌐 **Como Executar o Projeto**

1. Certifique-se de que o **Node.js** está instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/task-list-angular.git
   ```
3. Acesse o diretório do projeto:
   ```bash
   cd task-list-angular
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
6. Acesse o aplicativo no navegador: **http://localhost:4200**

---


## 📸 **Preview**

### Interface Principal:
![Task List Preview](https://via.placeholder.com/800x400?text=Task+List+Preview)

---

## ✨ **Motivação**

Este projeto foi criado para reforçar meus conhecimentos em Angular e SCSS, além de praticar o uso de **componentes reutilizáveis** e **armazenamento local**. Serve como um exemplo prático para meu portfólio.

---

## 🛡️ **Licença**

Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

---

