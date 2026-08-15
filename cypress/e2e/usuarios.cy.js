describe('API - Endpoint /usuarios', () => {
  let userId
  const emailDinamico = `teste_${Date.now()}@qa.com`

  it('1. Deve cadastrar um novo usuário com sucesso (POST)', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Vladimir Macedo',
        email: emailDinamico,
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body).to.have.property('_id')
      userId = response.body._id
    })
  })

  it('2. Deve buscar os dados do usuário cadastrado (GET)', () => {
    cy.request({
      method: 'GET',
      url: `https://serverest.dev/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.nome).to.eq('Vladimir Macedo')
      expect(response.body.email).to.eq(emailDinamico)
    })
  })

  it('3. Não deve permitir cadastrar usuário com e-mail já existente (400)', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false,
      body: {
        nome: 'Vladimir Repetido',
        email: emailDinamico,
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Este email já está sendo usado')
    })
  })

  it('4. Deve atualizar o nome do usuário (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: `https://serverest.dev/usuarios/${userId}`,
      body: {
        nome: 'Vladimir Macedo Editado',
        email: emailDinamico,
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })

  it('5. Deve deletar o usuário criado (DELETE)', () => {
    cy.request({
      method: 'DELETE',
      url: `https://serverest.dev/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')
    })
  })
})