describe('API - Endpoint /produtos', () => {
  let authToken

  before(() => {
    // Obtém o token de autenticação antes de rodar os testes
    cy.token('fulano@qa.com', 'teste').then((token) => {
      authToken = token
    })
  })

  it('Deve listar os produtos cadastrados (GET)', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/produtos'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('produtos')
      expect(response.body.produtos).to.be.an('array')
    })
  })

  it('Deve falhar ao tentar cadastrar produto sem token (401)', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      failOnStatusCode: false,
      body: {
        nome: 'Teclado Mecânico',
        preco: 250,
        descricao: 'Teclado RGB',
        quantidade: 10
      }
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
    })
  })

  it('Deve cadastrar produto enviando token JWT no header (POST)', () => {
    const produtoNome = `Produto Teste ${Date.now()}`

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        authorization: authToken
      },
      body: {
        nome: produtoNome,
        preco: 150,
        descricao: 'Produto de Automação',
        quantidade: 5
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})