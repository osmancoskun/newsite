<script>
  import { Message, Icon } from "$components";
  let accounts = [
    { url: "https://github.com/osmancoskun", icon: "github" },
    { url: "https://twitter.com/mergin_sh", icon: "twitter" },
    {
      url: "https://www.linkedin.com/in/osmancoskun95/",
      icon: "linkedin",
    },
  ];
</script>

<main class="mypage">
  <Message>Hi</Message>
  <Message>You can reach with email</Message>
  <Message>
    Or If you want, you can follow me on other platforms by clicking the links
    below
  </Message>
  <div class="h-10 flex justify-center gap-5 mt-5">
    {#each accounts as account}
      <a href={account.url} class="h-10 w-10">
        <svelte:component this={Icon} brands name={account.icon} size="2x" />
      </a>
    {/each}
  </div>
</main>

<style>
  a {
    background-color: inherit;
  }
</style>
