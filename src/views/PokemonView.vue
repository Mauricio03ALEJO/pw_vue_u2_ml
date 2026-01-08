<template>
  <div>
    <PokemonImagen :pokemonId="1" />
    <PokemonOpciones />
  </div>
</template>

<script>
import PokemonOpciones from '../components/PokemonOpciones.vue';
import PokemonImagen from '../components/PokemonImagen.vue';
export default {
    components: {
    PokemonOpciones,
    PokemonImagen
  },
};
</script>

<style>

</style>