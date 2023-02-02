<script>
  import { Message } from "$components";
  let datas = [
    {
      id: "pardus",
      title: "Software Engineer",
      active: true,
      time: "( Jan 2023 - present )",
      company: "Tubitak - Pardus",
      country: ["Turkey", "TR"],
      projects: [
        {
          title: "Layout Switcher",
          description:
            "Users will be able to change the appearance of their desktop with predefined layout options.",
          technologies: ["Python", "GTK3", "GTK4"],
          tasks: [
            "A subprocess was utilized for command-line executions.",
            "Glade was utilized for the GTK3 user interface.",
            "Cambalache was utilized for the GTK4 user interface.",
            "Extensions were enabled, disabled, and configurations were applied.",
          ],
        },
      ],
    },
    {
      id: "adonis",
      title: "Software Engineer",
      active: true,
      time: "( Dec 2022 - present )",
      company: "Adonis Tech",
      country: ["Cyprus", "CYP"],

      projects: [
        {
          title: "Landing Page",
          description:
            "I developed a landing page using the latest technologies.",
          technologies: ["SvelteKit", "Tailwind"],
          tasks: [
            "SvelteKit was utilized as the primary JavaScript framework",
            "Tailwind was employed as the CSS framework",
            "The design was made responsive",
            "Inclusions of Medium blog posts were integrated",
          ],
        },
      ],
    },
    {
      id: "arniva",
      title: "Software Engineer",
      active: false,
      time: "( Dec 2021 - Sep 2022 )",
      company: "Arniva Software",
      country: ["Turkey", "TR"],

      projects: [
        {
          title: "Tourism Customer Panel",
          description:
            "I developed a full-stack PWA application that operates in the web view of an Android application.",
          technologies: ["Svelte", "Framework7", "Nodejs", "MySQL", "Express"],
          tasks: [
            "Used Svelte and Framework7.",
            "Customers were able to create an account and log in.",
            "Could view destinations and companies filtered by regions and categories.",
            "Could view product details and create reservations.",
            "Could view reservation details and cancellation options.",
            "Implemented online chat support.",
            "Allowed for adding companies and services to a wishlist.",
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
            "Used Svelte and a custom UI library.",
            "Implemented CRUD operations.",
            "Admin users were able to view, add, and edit the details of companies, customers, and definitions.",
            "Implemented online chat support with socket.io.",
            "Preferred using Node.js, Express, and MySQL for the backend.",
          ],
        },
        {
          title: "Company Licence Application",
          description:
            "Developed a fullstack application that controls licences given by our company to our work partners and customers",
          technologies: ["Svelte", "Nodejs", "PostgreSQL", "Express"],
          tasks: [
            "Used Svelte and a custom UI library.",
            "Admin users could create applications, modules, versions, and other required information.",
            "Allowed for generating random license keys based on selected applications, modules, and versions.",
            "Provided the ability to define definitions based on current applications.",
            "Preferred using Node.js, Express, and PostgreSQL for the backend with an MVC structure.",
          ],
        },
      ],
    },
    {
      id: "artemis",
      title: "IT Specialist",
      active: false,
      time: "( Jun 2021 - Oct 2021 )",
      company: "Kaya Artemis",
      country: ["Cyprus", "CYP"],

      projects: [
        {
          title: "Maintain Devices",
          description:
            "As an IT Specialist, I was responsible for ensuring that all the devices at the casino and hotel were functioning properly and connected to the internet. This included approximately 80 computers, 40 printers, 25 HP Switches, and various modems and access points.",
          technologies: ["SvelteKit", "Tailwind"],
          tasks: [
            "Repairing printers.",
            "Reinstalling and formatting computers as necessary.",
            "Configuring modems, access points, routers, and switches.",
          ],
        },
      ],
    },
  ];
  let descriptions = [
    "Welcome to my experience page! I am a full-stack developer with expertise in using Svelte, Tailwind, Nodejs, Express, MySQL, PostgreSQL, and Firebase",
    "I have worked on several projects that have allowed me to demonstrate my skills and gain valuable experience in the field",
    "Currently, I am working as a core desktop application developer in a Linux distribution",
    "I am excited to share my journey and experiences with you on this page",
    "Thank you for visiting!",
  ];
  let activetab = datas[0];
</script>

<main class="mypage">
  <div class="btn-group mx-auto" />
  {#each descriptions as desc}
    <Message>
      {desc}
    </Message>
  {/each}
  <div class="flex flex-col md:flex-row mt-10">
    <ul
      class="steps steps-horizontal md:steps-vertical md:w-4/12 h-1/2 overflow-auto"
    >
      {#each datas as data}
        <li on:click={() => (activetab = data)} class="step cursor-pointer">
          <div class="p-3 rounded-md hover:bg-base-300">
            {data.company} <br />
            <span class="hidden md:block">{data.time}</span>
          </div>
        </li>
      {/each}
    </ul>

    <div class="w-1/1 md:w-8/12 p-3 flex flex-col">
      <span class="mx-auto text-lg">
        I {activetab.active ? "am working" : "worked"} as
        <b>
          {activetab.title}
        </b>
      </span>
      <span> <b> Company: </b>{activetab.company}</span>
      <span> <b> Dates: </b>{activetab.time}</span>
      <span><b>Country:</b>{activetab.country[0]}</span>
      <span> <b> Projects: </b> </span>

      <ul class="ml-4 list-decimal projectdetails overflow-auto">
        {#each activetab.projects as project}
          <li>
            <div class="flex flex-col mt-5">
              <span> <b> Project: </b>{project.title}</span>
              <span> <b> Description: </b>{project.description}</span>
              {#if project.technologies && project.technologies.length > 0}
                <span>
                  <b>Technologies : </b>
                  {#each project.technologies as technology}
                    &nbsp;{technology},
                  {/each}
                </span>
              {/if}
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
