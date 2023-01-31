<script>
  import { Message, ProjectCard, Icon } from "$components";
  let datas = {
    desktop: [
      {
        title: "Mergin Wallpaper",
        technologies: "Python3 & QT5",
        description:
          " You can download daily BING wallpaper. General usage is settings wallpapers, randoming between these wallpapers.",
        github: "github.com",
      },
    ],
    web: [
      {
        title: "Web Test Project",
        technologies: "Svelte & Tailwind",
        description:
          " You can download daily BING wallpaper. General usage is settings wallpapers, randoming between these wallpapers.",
        github: "github.com",
        url: "google.com",
      },
    ],
  };

  let activetab = "desktop";
  let tabs = [
    { id: "desktop", icon: "desktop" },
    { id: "web", icon: "globe" },
  ];
</script>

<main class="mypage">
  <div class="btn-group mx-auto rounded-lg">
    {#each tabs as tab}
      <button
        on:click={() => (activetab = tab.id)}
        class="btn btn-ghost"
        class:text-black={activetab != tab.id}
      >
        <Icon solid name={tab.icon} size="1x" />
        <span class="ml-1">{tab.id}</span>
      </button>
    {/each}
  </div>
  <Message>
    You can find <span>{activetab}</span>
    applications here
  </Message>
  {#each datas[activetab] as app}
    <ProjectCard
      title={app.title}
      description={app.description}
      technologies={app.technologies}
      github={app.github}
      url={app.url}
    />
  {/each}
</main>
