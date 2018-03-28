<template>
  <div class="contador">
    <p>Valor: {{valor}}</p>
    <p>{{parOuImpar}}</p>
    <p>{{numeroPrimo}}</p>
    <input type="text" v-model="entrada">
    <button @click="somaValor()">Soma</button>
    <button @click="subtraiValor()">Subtrai</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data: () => ({
    valor: 0,
    entrada: 0,
  }),

  methods: {
    somaValor() {
      this.valor += parseInt(this.entrada, 10);
    },
    subtraiValor() {
      this.valor -= parseInt(this.entrada, 10);
    },
    isPrimo(valor) {
      for (let i = 2; i < valor; i += 1) {
        if (valor % i === 0) {
          return false;
        }
      }
      return valor !== 1;
    },
  },

  computed: {
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'PAR';
      }
      return 'IMPAR';
    },

    positivoOuNegativo() {
      if (this.valor < 0) {
        return 'POSITIVO';
      }
      return 'NEGATIVO';
    },

    numeroPrimo() {
      if (this.isPrimo(this.valor)) {
        return 'PRIMO';
      }
      return 'NÃO É PRIMO';
    },
  },
};
</script>
