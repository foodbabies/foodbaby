<script lang="ts">
  export let item:string;
</script>

<li class="listItem">{item}<slot/></li>

<style>
  .listItem{
    margin-bottom: 10px;
  }
</style>
