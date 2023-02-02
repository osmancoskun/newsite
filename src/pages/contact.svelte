<script>
  import { Message, Icon } from "$components";
  let mails = ["", "osman.coskun95@gmail.com"];
  let accounts = [
    {
      url: "mailto:osman.coskun95@gmail.com",
      icon: "envelope",
      label: "Email",
    },
    { url: "mailto:me@osmancoskun.com", icon: "envelope", label: "Email" },
    { url: "https://twitter.com/mergin_sh", icon: "twitter", label: "Twitter" },
    { url: "https://github.com/osmancoskun", icon: "github", label: "Github" },
    {
      url: "https://www.linkedin.com/in/osmancoskun95/",
      icon: "linkedin",
      label: "Linkedin",
    },
  ];
  let descriptions = [
    "Thank you for visiting my contact page!",
    "I appreciate your interest in connecting with me.",
    "If you would like to get in touch, please feel free to reach out to me through the following channels:",
  ];
</script>

<main class="mypage">
  {#each descriptions as desc}
    <Message>{desc}</Message>
  {/each}

  <div class="h-10 flex flex-col justify-center gap-5 mt-5">
    {#each mails as mail}
      <a href="mailto:{mail}" class="h-10 w-10">
        <svelte:component this={Icon} name="envelope" size="2x" />
      </a>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center items-center gap-5">
    {#each accounts as account}
      <a href={account.url} class="flex items-center gap-2 h-10">
        {#if account.icon == "envelope"}
          <svelte:component this={Icon} solid name={account.icon} size="2x" />
        {:else}
          <svelte:component this={Icon} brands name={account.icon} size="2x" />
        {/if}
        <span>{account.label}</span>
      </a>
    {/each}
  </div>
</main>

<style>
  a {
    background-color: inherit;
  }
</style>
