<script>
  import { Me } from "$assets";
  import { current_theme } from "$store";
  $: isDark = $current_theme == "dark" ? true : false;
</script>

<div class="chat chat-end">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img src={Me} alt="Osman Coskun" />
    </div>
  </div>
  <div
    class:text-black={!isDark}
    class:bg-base-200={isDark}
    class:bg-base-300={!isDark}
    class="chat-bubble"
  >
    <slot />
  </div>
</div>
