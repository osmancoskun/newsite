<script>
  import { Header } from "$layout";
  import { current_page } from "$store";
  import { Main, Contact, Experiences, Projects } from "$pages";
  let routes = {
    "/": Main,
    contact: Contact,
    experiences: Experiences,
    projects: Projects,
  };
</script>

<main class="max-w-5xl mx-auto p-3 rounded-lg myinset">
  <Header />
  <div class="py-5">
    <svelte:component this={routes[$current_page]} />
  </div>
</main>

<style>
  main {
    height: 96vh;
    margin-top: 2vh;
  }
</style>
