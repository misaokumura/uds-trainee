<template>
  <div class="principal">
      <div class="">
          <h5>01. Precisamos criar um gerador de declarações.
            O usuário preenche um formulário e devolvemos a ele uma declaração preenchida.
            Para isso você deve adicionar 4 campos de texto ( nome completo, rg, cpf e cidade ),
            em um arquivo html e estiliza-los conforme achar necessário.
            Sua aplicação deve pegar os dados informados neste campo e
            devolver o seguinte texto como conteúdo da página:
            "Eu, {nome-completo}, portador do rg {rg} e do cpf {cpf},
            declaro estar participando do trainee da uds."
            Após este texto apresentar a cidade e a data atual escrita por extenso.</h5>
      </div>

      <form>
        <label for="campoNome">Nome:</label>
        <input type="text" name="" value="" id="campoNome" v-model="nomeCompleto">
        <label for="campoRG">RG:</label>
        <input type="text" name="" value="" id="campoRG" v-model="rg">
        <label for="campoCPF">CPF:</label>
        <input type="text" name="" value="" id="campoCPF" v-model="cpf">
        <label for="campoCidade">Cidade</label>
        <input type="text" name="" value="" id="campoCidade" v-model="cidade">
        <button type="submit" name="button" id="botao" v-on:click="seen = !seen">Enviar</button>
      </form>
      <div class="fundoDeclaracao"  v-if="!seen">
        <div class="declaracao">
        DECLARACAO DE PARTICIPACAO

        Eu, {{nomeCompleto}}, portador do RG {{rg}}
        e do CPF {{cpf}}, declaro estar participando do trainee da UDS.
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NomeDadosPessoais',
  data: () => ({
    nomeCompleto: null,
    rg: null,
    cpf: null,
    cidade: null,
    seen: true,
  }),
};
</script>


<style scoped>
  template{
    background-color: #1c1a1a;
  }

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

  .fundoDeclaracao {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 650px;
    height: 700px;
  }

  .declaracao {
    text-align: center;
    margin: 50px;
    font-weight: bold;
    font-size: 16px;
    color: black;
    white-space: pre;
  }

</style>
