<script>
  import { current_page } from "$store";
  import { Hover } from "$components";
  let routes = [
    {
      id: "contact",
      label: "Contact",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "experiences",
      label: "Experiences",
    },
  ];
  function set_page(page_id = "") {
    $current_page = page_id;
  }
</script>

<div class="navbar">
  <div class="menu menu-horizontal px-1 gap-2 flex-1">
    <li
      class:myhover={$current_page == "/"}
      class="font-bold rounded-lg border"
      on:click={() => set_page("/")}
    >
      <Hover>Osman Coskun</Hover>
    </li>
  </div>
  <ul class="menu menu-horizontal px-1 gap-2 flex">
    <div class="flex items-center gap-2">
      <i class="fa-regular fa-square text-2xl" />
      <input type="checkbox" class="toggle" checked />
      <i class="fa-solid fa-cube text-2xl" />
    </div>
    <div class="divider divider-vertical" />
    <div class="flex items-center gap-2">
      <i class="fa-regular fa-sun text-2xl" />
      <input type="checkbox" class="toggle" checked />
      <i class="fa-regular fa-moon text-2xl" />
    </div>

    {#each routes as route}
      <li
        class="rounded-lg border"
        class:myhover={$current_page == route.id}
        on:click={() => set_page(route.id)}
      >
        <Hover>
          {route.label}
        </Hover>
      </li>
    {/each}
  </ul>
</div>
