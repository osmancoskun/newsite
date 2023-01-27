<script>
  import { Icon } from "$components";
  export let title = "";
  export let technologies = "";
  export let description = "";
  export let github = "";
  export let url = "";
</script>

<div class="mockup-window border bg-base-300 w-1/2">
  <div class="px-4 py-3 bg-base-200 flex  flex-col">
    <b> {title} </b>
    <br />
    <span> <b>Technologies:</b> {technologies} </span>
    <span>
      <b>Description: </b>
      {description}
    </span>
    <span class="flex justify-between items-center">
      <b>Links:</b>
      <div>
        {#if url && url.length > 0}
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            class="h-10 w-10 myicon"
          >
            <Icon solid name="globe" size="2x" />
          </a>
        {/if}
        {#if github && github.length > 0}
          <a
            href={github}
            rel="noreferrer"
            target="_blank"
            class="h-10 w-10 myicon"
          >
            <Icon brands name="github" size="2x" />
          </a>
        {/if}
      </div>
    </span>
  </div>
</div>
