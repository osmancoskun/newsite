<script>
  export let brands = false;
  export let solid = false;
  export let name = "";
  export let size = "lg";
</script>

<i
  class="fa-{name} {size.length > 0 ? 'fa-' + size : ''}"
  class:fa-brands={brands}
  class:fa-solid={solid}
/>
