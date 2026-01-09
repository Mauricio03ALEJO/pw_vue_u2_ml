<template>
  <div>
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones 
    @seleccionado="evaluarGanador($event)"
    :listaPokemons="pokemonArr"/>
    <h1 v-if="mensaje" class="mensaje-resultado">{{ mensaje }}</h1>
  </div>
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
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: '',
    };
  },
  mounted(){
    console.log('componente montado');
    this.iniciarJuego();
    
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