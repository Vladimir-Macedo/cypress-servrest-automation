# Automação de Testes de API - ServeRest 
---

 Este projeto contém a suíte de testes automatizados de API para a plataforma [ServeRest](https://serverest.dev/), focada em validar autenticação, contratos JSON,  fluxos CRUD e regras de negócio.
 
---

Se você quiser ver e testar a API manualmente diretamente pelo seu navegador, você pode acessar a documentação interativa oficial do ServeRest:
 👉[Documentação Swagger da API](https://serverest.dev/?lang=pt-BR)

---

##  Tecnologias Utilizadas

* **Framework:** Cypress
* **Linguagem:** JavaScript
* **Validação de Contrato:** AJV / JSON Schema
* **CI/CD:** GitHub Actions (Execução automatizada a cada push)

---

## Cobertura de Testes

- [x] **Autenticação:** Login com sucesso e geração de Token JWT.
- [x] **Usuários:** CRUD completo (`GET`, `POST`, `PUT`, `DELETE`).
- [x] **Produtos:** Validação de autenticação/autorização e regras de cadastro.
- [x] **Contrato:** Validação de JSON Schema nos endpoints principais.

---

##  Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Vladimir-Macedo/cypress-api-automation.git](https://github.com/Vladimir-Macedo/cypress-api-automation.git)

2. **Instale as dependências:**

   ```Bash
   npm install

3. **Execute os testes em modo Headless:**
   
   ```Bash
   npx cypress run

---

