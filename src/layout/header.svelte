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
      class="font-bold rounded-lg hover:border"
      on:click={() => set_page("/")}
    >
      <Hover>Osman Coskun</Hover>
    </li>
  </div>
  <ul class="menu menu-horizontal px-1 gap-2 flex ">
    {#each routes as route, index}
      <li
        class="rounded-lg hover:border"
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
