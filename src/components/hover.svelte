<script>
  import { current_dimension, current_theme } from "$store";
</script>

{#if $current_dimension == "3d" && $current_theme == "light"}
  <div class="myhover">
    <slot />
  </div>
{:else if $current_dimension == "3d" && $current_theme == "dark"}
  <div class="myhover-dark">
    <slot />
  </div>
{:else}
  <div>
    <slot />
  </div>
{/if}
