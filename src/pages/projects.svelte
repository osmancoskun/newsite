<script>
  import { Message, ProjectCard, Icon } from "$components";
  let datas = {
    desktop: [
      {
        title: "Mergin Wallpaper",
        technologies: "Python3 & QT5",
        description:
          "Introducing Mergin Wallpaper, a cutting-edge desktop application designed to enhance your desktop experience. With Mergin Wallpaper, you can easily pick a wallpaper from a curated list of high-quality images, or choose to download the daily Bing wallpaper. The application also offers a random wallpaper feature and an updating list to keep your desktop fresh and exciting. Preview your selected wallpaper with the convenient Gnome notifications feature and enjoy a personalized and dynamic desktop environment. Download Mergin Wallpaper now to transform your desktop experience!",
        github: "github.com",
      },
    ],
    web: [
      {
        title: "Svelte To-DO",
        technologies: "Svelte",
        description:
          "Introducing Svelte TO-DO, a sleek and efficient to-do application built with Svelte, HTML, and CSS. With Svelte TO-DO, you have the power to keep track of your tasks and stay organized in style. The application offers three options for each task: pending, done, and deleted, giving you full control over your to-do list. And for added customization, you can even pick the background color before adding a task! All your information is securely stored in localstorage, so you can access it anytime, anywhere.",
        github: "https://github.com/osmancoskun/svelte-todo-localstorage",
        url: "https://todo.osmancoskun.com",
      },

      {
        title: "Exchange Automation",
        technologies: "Svelte,Attractions,Firebase",
        description:
          "Introducing Exchange Automation, the perfect solution for exchange offices. Stay on top of the market with real-time exchange rates updated every minute, all powered by the latest technology including Svelte, Attractions, and Firebase. With the ability to perform CRUD operations, you can easily record every selling and buying transaction, ensuring accurate record keeping for your business. User authentication is also required to ensure secure access to your sensitive information. Exchange Automation is designed to meet the unique needs of exchange offices, offering the tools and features you need to succeed in today's fast-paced market. Sign up now and take control of your exchange operations with ease.",
      },
      {
        title: "Income Expense Automation",
        technologies: "Svelte",
        description:
          "Introducing Income Expense Automation, a web-based automated income and expense management application built with Vue.js v2, Buefy, and Firebase. With Income Expense Automation, you can easily manage your finances and gain insights into your spending habits with the power of cutting-edge technology. The application offers CRUD operations for both income and expenses, allowing you to keep track of all your financial transactions. You can even select the company to categorize your finances. The application also features 3 types of graphs: bar, line, and pie charts, so you can visualize your data in a way that makes sense to you. And with the option to preview and download your data as an Excel or PDF file, between selected dates, you can easily share your financial information with others. Compare your income and expenses, change your company, and even your password. Get complete control over your finances with Income Expense Automation. Start using it today!",
      },
    ],
  };
  let activetab = "web";
  let tabs = [
    { id: "desktop", icon: "desktop" },
    { id: "web", icon: "globe" },
  ];
  let tabDescriptions = {
    desktop: [
      "As a software engineer, I have a passion for building high-quality and user-friendly desktop applications.",
      "With a focus on efficient code and seamless user experience, I strive to create desktop applications that meet the unique needs of my clients.",
      "Whether it's a business application or a personal project, I am committed to delivering a product that exceeds expectations.",
    ],
    web: [
      "With my expertise in front-end and full-stack development, I am equipped to bring your web application ideas to life.",
      "From concept to deployment, I work closely with my clients to understand their vision and create a web application that not only functions beautifully, but also provides a memorable user experience.",
      "Whether it's a website, web app, or e-commerce platform, I am dedicated to delivering a product that exceeds your expectations.",
    ],
  };
</script>

<main class="mypage">
  <div class="btn-group mx-auto rounded-lg">
    {#each tabs as tab}
      <button on:click={() => (activetab = tab.id)} class="btn btn-ghost">
        <Icon solid name={tab.icon} size="1x" />
        <span class="ml-1">{tab.id}</span>
      </button>
    {/each}
  </div>
  {#each tabDescriptions[activetab] as tabData}
    <Message>
      {tabData}
    </Message>
  {/each}
  <div class="mt-5 mx-2 md:mx-auto flex flex-wrap">
    {#each datas[activetab] as app}
      <ProjectCard
        title={app.title}
        description={app.description}
        technologies={app.technologies}
        github={app.github}
        url={app.url}
      />
    {/each}
  </div>
</main>
