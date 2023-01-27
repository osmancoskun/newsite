<script>
  import { Message, ProjectCard, Icon } from "$components";
  let datas = [
    {
      id: "pardus",
      title: "Software Engineer",
      active: true,
      time: "( Jan 2023 - present )",
      company: "Tubitak - Pardus / TR",
      projects: [
        {
          title: "Layout Switcher",
          description:
            "Users will be able to change the looking of their desktop between predefined layouts.",
          technologies: ["Python", "GTK3", "GTK4"],
          tasks: [
            "Subprocess used for commandline executions.",
            "Glade used for GTK3 UI.",
            "Cambalache used for GTK4 UI.",
            "Extensions are enabled, disabled and configs are applied.",
          ],
        },
      ],
    },
    {
      id: "adonis",
      title: "Software Engineer",
      active: true,
      time: "( Dec 2022 - present )",
      company: "Adonis Tech / CYP",
      projects: [
        {
          title: "Landing Page",
          description: "Landing page developed with latest technologies.",
          technologies: ["SvelteKit", "Tailwind"],
          tasks: [
            "SvelteKit used as main JS framework",
            "Tailwind used as CSS framework",
            "Responsive design applied.",
            "Medium blog posts are included",
          ],
        },
      ],
    },
    {
      id: "arniva",
      title: "Software Engineer",
      active: false,
      time: "( Dec 2021 - Sep 2022 )",
      company: "Arniva Software / TR",
      projects: [
        {
          title: "Tourism Customer Panel",
          description:
            "Developed a fullstack pwa application which is working in web view in android application .",
          technologies: ["Svelte", "Framework7", "Nodejs", "MySQL", "Express"],
          tasks: [
            "We used Svelte and Framework7.",
            "Customers was able to create account and login.",
            "Viewing destinations and companies that filtered with regions and categories.",
            "Viewing product details and creating reservations.",
            "View reservation details and cancellation options.",
            "Online chat support.",
            "Adding companies and services to wishlist.",
          ],
        },
        {
          title: "Tourism Company Panel",
          description:
            "Developed a fullstack pwa application which is working in web viewer in android application that let company owners control their companies over application.",
          technologies: ["Svelte", "Framework7", "Nodejs", "MySQL", "Express"],
          tasks: [
            "We used Svelte, Framework7 and custom components.",
            "Company owners or responsible person was able to add their company to system with informations that we needed.",
            "Company owner can see their reservations, earnings and support customers with online chat support.",
            "Getting reservation outputs as PDF on desired dates.",
          ],
        },
        {
          title: "Tourism Admin Panel",
          description:
            "Developed a fullstack application that lets admins control everything about whole system.",
          technologies: ["Svelte", "Framework7", "Nodejs", "MySQL", "Express"],
          tasks: [
            "Used Svelte and custom ui library.",
            "CRUD operations.",
            "Admin users was able to view, add and edit every detail of companies, customers and definitions.",
            "Online chat support implemented with socket.io",
            "We prefered using Nodejs, Express and MySQL on backend",
          ],
        },
        {
          title: "Company Licence Application",
          description:
            "Developed a fullstack application that controls licences given by our company to our work partners and customers",
          technologies: ["Svelte", "Nodejs", "PostgreSQL", "Express"],
          tasks: [
            "We used Svelte and custom ui library.",
            "Admin users can create applications, modules, versions and other informations that needed.",
            "Creating random licence key depends on selected applications, modules and versions.",
            "User can define definitions depends on the current applications.",
            "Prefered Nodejs, Express and PostgreSQL for backend with MVC structure.",
          ],
        },
      ],
    },
  ];

  let activetab = datas[0];
  console.log(activetab);
</script>

<main class="mypage">
  <div class="btn-group mx-auto" />
  <Message>You can find the my previous experiences and details here.</Message>
  <Message>For more details, click company name on the list</Message>
  <div class="flex mt-10">
    <ul class="steps steps-vertical w-4/12 border h-1/2">
      {#each datas as data}
        <li
          on:click={() => (activetab = data)}
          class="step cursor-pointer"
          class:step-neutral={data.active}
        >
          <div class="p-3 rounded-md hover:bg-base-300">
            {data.company} <br />{data.time}
          </div>
        </li>
      {/each}
    </ul>

    <div class="w-8/12 border p-3 flex flex-col">
      <span class="mx-auto text-lg">
        I {activetab.active ? "am working" : "worked"} as
        <b>
          {activetab.title}
        </b>
      </span>
      <span> <b> Company: </b>{activetab.company}</span>
      <span> <b> Dates: </b>{activetab.time}</span>
      <span> <b> Projects: </b> </span>

      <ul class="ml-4 list-decimal projectdetails overflow-auto">
        {#each activetab.projects as project}
          <li>
            <div class="flex flex-col mt-5">
              <span> <b> Project: </b>{project.title}</span>
              <span> <b> Description: </b>{project.description}</span>
              <span><b>Tasks:</b></span>

              <ul class=" ml-4 list-disc">
                {#each project.tasks as task}
                  <li>{task}</li>
                {/each}
              </ul>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  .projectdetails {
    max-height: calc(100vh - 37vh);
  }
</style>
