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
  let meta_desc =
    "Meet Osman Coskun, a skilled software engineer with a passion for code. View his portfolio and read about his experiences in the tech industry. Connect with Osman and be inspired by his journey as a software engineer.";
</script>

<svelte:head>
  <meta name="description" content={meta_desc} />
</svelte:head>
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
