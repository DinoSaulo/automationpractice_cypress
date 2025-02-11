# automationpractice Cypress tests
Automação dos testes de interface de cadastro de usuário do site [http://www.automationpractice.pl/](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account) utilizando Cypress, Node.js e Javascript

##

<!--- Utilizando o exemplos do repositório https://github.com/iuricode/readme-template para esse README.md --->

### Documentação do projeto
O desenvolvimento desse projeto foi documentado no [Board Desafio técnico DTI Digital](https://trello.com/invite/b/67993894ca5f87518e7d97c8/ATTIdc56205f9c4752f036ea4abe3181066bB1544ACF/desafio-tecnico-dti-digital)

###  📝 Ferramentas utilizadas
| Linguagem     | Framework         | Ferramenta de Gerenciamento | Navegador       |
|---------------|-------------------|-----------------------------|-----------------|
| JavaScript    | Cypress v12.12.0  | Node v20.17.0               | Electron v106   |

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Possuir o `Node.js` instalado na versão 20.17.0 ou superior;
* Possuir o `Git` instalado.

## 🚀 Clonar o projeto

Para clonar o projeto, execute o seguinte comando no terminal:


``` bash
git clone https://github.com/DinoSaulo/automationpractice_cypress.git
```

## ☕ Executando o projeto

Para executar o projeto basta fazer os seguintes passos:

```bash
cd automationpractice_cypress
```

### Executar pela primeira vez

#### Instalar as dependências

```bash
npm install
```

#### Executar o Cypress

```bash
npx cypress open
```

#### Executar os testes

1. Clicar no botão "E2E Testing"
2. Clicar no botão "Electron"
3. Clicar no botão "Start E2E Testing in Electron"
4. Clicar em "register.feature"

## Testes

Atualmente esse projeto possui 3 test scenarios, todos eles estão no arquvo [register.feature](./cypress/e2e/feature/register.feature):

```gherkin
Feature:  I want to register a new user

    Background:
        Given I navigate to the Website

    Scenario: Start a register with an invalid email
        When I entered invalid email in the email input
        And I click on Create Account button
        Then I can see the invalid email message

    Scenario: Start a register and valid the register form
        When I entered valid email in the email input
        And I click on Create Account button
        Then I can see the full creation account form
        And I can see the input Title empty
        And I can see the inputs First name and Last name are empty
        And I can see the used email in the other email input
        And I can see the input password is empty
        And I can see the Date of birth empty
        And I can see the checkbox Newsletter unselected


    Scenario: New user registration
        Given I have a valid user data
            | First_name    | Last_name | Title | Email                     | Password  | Birth_date     | Newsletter|
            | Saulo         | Barros    | Mr    | contrata.ele{0}@email.com | pw123@    | 18 May 2000    | true      |
        When I fill user email in the email input
        And I click on Create Account button
        And I fill the form with the data of user
        And I click on Register button
        Then I see the success registration message
```

## ❔ Dúvidas

Pode entrar em contato comigo pelo e-mail: saulbpt@gmail.com ou abrir uma issue aqui 😊