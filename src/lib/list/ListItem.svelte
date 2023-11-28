<script lang="ts">
  export let item:string | undefined = undefined;
</script>

<li class="listItem">
  {#if item}
    {item}
  {/if}
  <slot/>
</li>

<style>
  .listItem{
    margin-bottom: 10px;
  }
</style>
