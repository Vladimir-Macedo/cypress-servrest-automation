
describe('API - Endpoint /login', () => {
  
  it('Deve realizar login com sucesso e retornar token Bearer', () => {
    cy.postLogin('fulano@qa.com', 'teste').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization).to.include('Bearer')
    })
  })

  it('Deve retornar erro ao tentar login com credenciais inválidas (401)', () => {
    cy.postLogin('usuario_invalido@qa.com', 'senha_errada').then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq('Email e/ou senha inválidos')
    })
  })

})