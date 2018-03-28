<template>
  <div class="principal">
      <div class="">
          <p> Vamos criar um gerador de cartão de visita.
            O usuário deve preencher um formulário com os campos nome, telefone e endereço.
            Ao enviar o formulário deve-se apresentar uma div formatada como um
            cartão de visita apresentando as informações preenchidas previamente.</p>
      </div>

      <form>
        <label for="campoNome">Nome:</label>
        <input type="text" name="" value="" id="campoNome" v-model="nomeCompleto">
        <label for="campoTelefone">Telefone:</label>
        <input type="text" name="" value="" id="campoTelefone" v-model="telefone">
        <label for="campoLogradouro">Logradouro:</label>
        <input type="text" name="" value="" id="campoLogradouro" v-model="endereco.logradouro">
        <label for="campoNumero">Numero:</label>
        <input type="text" name="" value="" id="campoNumero" v-model="endereco.numero">
        <label for="campoBairro">Bairro:</label>
        <input type="text" name="" value="" id="campoBairro" v-model="endereco.bairro">
        <label for="campoCEP">CEP:</label>
        <input type="text" name="" value="" id="campoCEP" v-model="endereco.cep">
        <label for="campoCidade">Cidade:</label>
        <input type="text" name="" value="" id="campoCidade" v-model="endereco.cidade">
        <label for="campoEstado">Estado:</label>
        <input type="text" name="" value="" id="campoEstado" v-model="endereco.estado">
        <button type="submit" name="button" id="botao" v-on:click="seen = !seen">Enviar</button>
      </form>
      <div class="cartao" v-if="!seen">
        <div class="textoCartao">

          {{nomeCompleto}}

          {{telefone}}

          {{endereco.logradouro + ", " + endereco.numero + ", " + endereco.bairro + ", "
          + endereco.cep + ", " + endereco.cidade + ", " + endereco.estado}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NomeDadosPessoais',
  data: () => ({
    nomeCompleto: null,
    telefone: null,
    endereco: {
      logradouro: null,
      numero: null,
      bairro: null,
      cep: null,
      cidade: null,
      estado: null,
    },
    seen: true,
  }),
};
</script>


<style scoped>

  .principal{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button{
    margin-top: 10px;
  }

  .cartao {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("http://backgroundcheckall.com/wp-content/uploads/2017/12/minimalist-background-hd-3.jpg");
    width: 550px;
    height: 250px;
  }

  .textoCartao {
    text-align: center;
    margin: 50px;
    font-weight: bold;
    font-size: 14px;
    white-space: pre;
    color: white;
  }
</style>
