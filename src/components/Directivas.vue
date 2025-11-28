<template>
  <div>
    <label for="id_nombre">Nombre</label>
    <input v-model="nombre" id="id_nombre" type="text" />
    <p>{{ nombre }}</p>

    <label for="id_apellido">Apellido</label>
    <input v-model="apellido" id="id_apellido" type="text" />

    <button v-on:click="imprimirNombre()">Imprimir Nombre</button>
    <button v-on:click="agregarEstudiante()">Agregar estudiante</button>
    <h1>{{ arreglo[0] }}</h1>

    <ul>
      <li v-show="nombre" v-for="{ nombre, apellido } in arreglo" :key="nombre">
        {{ nombre }} - {{ apellido }}
      </li>
    </ul>

    <h2>Tabla</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ nombre, apellido } in arreglo" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      /* arreglo: [1, 2, 3, 4], */
      arreglo: [],
    };
  },
  methods: {
    imprimirNombre() {
      console.log(this.nombre);
    },
    agregarEstudiante() {
      const estu = {
        nombre: this.nombre,
        apellido: this.apellido,
      };
      console.log("Se agrega estudiante");
      console.log(estu);
      this.arreglo.push(estu);
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nombre = null;
      this.apellido = null;
    },
  },
};
</script>

<style>
</style>