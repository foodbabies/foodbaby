<script lang="ts">
  export let item:string;
  export let hideListStyle:boolean = false;
  let isChecked = false;
</script>

<li class={`checkboxListItem ${hideListStyle ? 'hideListStyle' : ''}`}>
  <label class={`${isChecked ? 'checked' : ''}`}>
    <input type="checkbox" bind:checked={isChecked}/>
      {item}
  </label>
</li>

<style>
  .checkboxListItem{
    margin-bottom: 10px;
  }

  .hideListStyle {
    list-style-type: none;
    margin-left: -20px;
  }

  .checked {
    text-decoration: line-through;
    text-decoration-thickness: 1px;
    color: var(--color-theme-2);
  }
</style>
