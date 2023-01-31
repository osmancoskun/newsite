<script>
  import { current_page, current_dimension, current_theme } from "$store";
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
  let theme = document.querySelector("html").getAttribute("data-theme");
  let dimension = document.querySelector("html").getAttribute("data-dimension");
  function change_theme() {
    let newTheme = theme == "light" ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", newTheme);
    theme = newTheme;
    $current_theme = newTheme;
  }
  function change_dimension() {
    let newDimension = dimension == "2d" ? "3d" : "2d";
    document.querySelector("html").setAttribute("data-dimension", newDimension);
    dimension = newDimension;
    $current_dimension = newDimension;
  }

  function set_page(page_id = "") {
    $current_page = page_id;
  }
</script>

<div class="navbar">
  <div class="menu menu-horizontal px-1 gap-2 flex-1">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      class:floating={$current_page == "/" &&
        dimension == "3d" &&
        theme == "light"}
      class:floating-dark={$current_page == "/" &&
        dimension == "3d" &&
        theme == "dark"}
      class:border={theme == "light"}
      class:border-invisible={theme == "dark"}
      class="font-bold rounded-lg cursor-pointer"
      on:click={() => set_page("/")}
    >
      <Hover>Osman Coskun</Hover>
    </li>
  </div>
  <ul class="menu menu-horizontal px-1 gap-2 flex">
    {#each routes as route}
      <!-- svelte-ignore a11y-click-events-have-key-events class:border={dimension == "3d"} -->
      <li
        class="rounded-lg cursor-pointer"
        class:border={theme == "light"}
        class:border-invisible={theme == "dark"}
        class:floating={$current_page == route.id &&
          dimension == "3d" &&
          theme == "light"}
        class:floating-dark={$current_page == route.id &&
          dimension == "3d" &&
          theme == "dark"}
        on:click={() => set_page(route.id)}
      >
        <Hover>
          {route.label}
        </Hover>
      </li>
    {/each}
    <label class="swap swap-rotate">
      <!-- CUBE -->
      <input type="checkbox" on:click={change_dimension} />

      <svg
        class="swap-off fill-current w-6 h-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier"
          ><path
            d="M2.594,18.914l9,4H11.6a.974.974,0,0,0,.8,0h.008l9-4A1,1,0,0,0,22,18V6a1.04,1.04,0,0,0-.594-.914l-9-4a1,1,0,0,0-.812,0l-9,4A1.041,1.041,0,0,0,2,6V18A1,1,0,0,0,2.594,18.914ZM4,7.539l7,3.111v9.811L4,17.35ZM20,17.35l-7,3.111V10.65l7-3.111ZM12,3.094,18.538,6,12,8.906,5.462,6Z"
          /></g
        ></svg
      >
      <!--input type="checkbox" class="toggle" checked /-->
      <!-- SQUARE -->
      <svg
        class="swap-on fill-current w-6 h-6"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier">
          <rect
            id="Icons"
            x="-1152"
            y="-64"
            width="1280"
            height="800"
            style="fill:none;"
          />
          <g id="Icons1">
            <g id="Strike" /> <g id="H1" /> <g id="H2" /> <g id="H3" />
            <g id="list-ul" /> <g id="hamburger-1" /> <g id="hamburger-2" />
            <g id="list-ol" /> <g id="list-task" /> <g id="trash" />
            <g id="vertical-menu" /> <g id="horizontal-menu" />
            <g id="sidebar-2" /> <g id="Pen" /> <g id="Pen1" />
            <g id="clock" /> <g id="external-link" /> <g id="hr" />
            <g id="info" /> <g id="warning" /> <g id="plus-circle" />
            <g id="minus-circle" /> <g id="vue" /> <g id="cog" />
            <g id="logo" /> <g id="radio-check" /> <g id="eye-slash" />
            <g id="eye" /> <g id="toggle-off" />
            <path
              id="square"
              d="M50.005,56l-35.989,0c-3.309,0 -5.995,-2.686 -5.995,-5.995l0,-36.011c0,-3.308 2.686,-5.995 5.995,-5.995l35.989,0c3.309,0 5.995,2.687 5.995,5.995l0,36.011c0,3.309 -2.686,5.995 -5.995,5.995Zm-0.993,-4.001c1.65,0 2.989,-1.339 2.989,-2.989l0,-34.021c0,-1.649 -1.339,-2.989 -2.989,-2.989l-34.003,0c-1.65,0 -2.989,1.34 -2.989,2.989l0,34.021c0,1.65 1.339,2.989 2.989,2.989l34.003,0Z"
            /> <g id="shredder" />
            <g id="spinner--loading--dots-" /> <g id="react" />
            <g id="check-selected" /> <g id="turn-off" />
            <g id="code-block" /> <g id="user" /> <g id="coffee-bean" />
            <g id="coffee-beans">
              <g id="coffee-bean1" />
            </g> <g id="coffee-bean-filled" />
            <g id="coffee-beans-filled">
              <g id="coffee-bean2" />
            </g> <g id="clipboard" /> <g id="clipboard-paste" />
            <g id="clipboard-copy" /> <g id="Layer1" />
          </g>
        </g></svg
      >
    </label>
    <div class="divider divider-vertical" />
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" on:click={change_theme} />

      <!-- sun icon -->
      <svg
        class="swap-on fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
        /></svg
      >

      <!-- moon icon -->
      <svg
        class="swap-off fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
        /></svg
      >
    </label>
  </ul>
</div>
