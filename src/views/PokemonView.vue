<template>
  <div>
    <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
    <PokemonOpciones 
    @seleccionado="evaluarGanador($event)"
    :listaPokemons="pokemonArr"/>
    <h1 v-if="mensaje" class="mensaje-resultado">{{ mensaje }}</h1>
  </div>
  <button @click="destruir()">Destruir</button>
</template>

<script>
import PokemonOpciones from '../components/PokemonOpciones.vue';
import PokemonImagen from '../components/PokemonImagen.vue';
import { obtenerVectorPokemonFachada, obtenerAleatorio } from '../clients/PokemonClient.js';

export default {
    components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data(){
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: '',
      mostrar:true,
    };
  },
  /* Crea el componente */ 
  beforeCreate(){
    console.log('beforeCreate: apenas inicia la instacia del componente');
  },
  created(){
    console.log('created: ya se resolvieron data, computed, methods, watch');
  },

  /* Monta el componente: renderiza o visualiza el componente */
   beforeMount(){
    console.log('beforeMount: justo antes del primer render de un elemento HTML');
  },
  mounted(){
    console.log('componente montado: el componente ya se renderizó');
    this.iniciarJuego();
  },

  /* Actualizacion de un componente */
  beforeUpdate(){
    console.log('beforeUpdate: cuando cambio data/props y Vue esta por re-renderizar');
  },
  updated(){
    console.log('updated: cuando ya se actualizo tras la re-renderizacion');
  },

  methods:{
    async iniciarJuego(){
      this.pokemonArr = await obtenerVectorPokemonFachada();  

      const idAleatorio = obtenerAleatorio(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    evaluarGanador(idGanador){
      console.log("Valor recibido desde padre");
      console.log(idGanador);
      if(idGanador === this.pokemonGanador){
        console.log("ganador")
        this.mensaje = "Ganador";
      } else {
        console.log("perdedor")
        this.mensaje = "Perdedor";
      }
    },
    destruir(){
      this.mostrar = false;
    },
  },
};
</script>

<style>
.mensaje-resultado {
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  font-weight: bold;
}
</style>