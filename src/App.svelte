<script>
  import { Header } from "$layout";
  import { current_page, current_theme } from "$store";
  import { Main, Contact, Experiences, Projects } from "$pages";
  $: theme = $current_theme;
  let routes = {
    home: Main,
    contact: Contact,
    experiences: Experiences,
    projects: Projects,
  };
</script>

<main class="max-w-5xl mx-auto p-3 rounded-lg mb-5">
  <Header />
  <div class="rounded-lg md:p-5 md:m-4">
    <svelte:component this={routes[$current_page]} />
  </div>
</main>

<style>
  main {
    height: 96vh;
    margin-top: 2vh;
  }
  div {
    max-height: 83vh;
    overflow: auto;
  }
</style>
