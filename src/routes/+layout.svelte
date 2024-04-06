<script>
    // Importamos el componente Navbar aquí
    import Navbar from './Navbar.svelte';
    import "./app.css";
  </script>
  
  <div class="flex h-screen overflow-hidden">
    <div class="w-1/5 min-w-[20%] max-w-[35%] bg-gray-800">
      <Navbar/>
    </div>
    <div class="flex-1 overflow-auto">
      <slot></slot>
    </div>
  </div>
  
  <style>
    /* Aquí puedes agregar estilos adicionales si es necesario */
  </style>