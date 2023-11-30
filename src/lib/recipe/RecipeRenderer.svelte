<script lang="ts">
  // import entire JSON file as a default import
  import UnorderedList from '$lib/list/UnorderedList.svelte';
  import ListItem from '$lib/list/ListItem.svelte';
  import OrderedList from '$lib/list/OrderedList.svelte';
  import CheckboxListItem from '$lib/list/CheckboxListItem.svelte';
  import type {ReceipeInterface} from '$lib/data/recipe';
	export let recipe:ReceipeInterface;
  export let showTitle:boolean = false;
</script>

<!-- Title -->
{#if showTitle}
  <h1>{recipe.name}</h1>
{/if}

<!-- Author information -->
{#if recipe.author }
  <a href={recipe.reference} class="author">{recipe.author}</a> 
{/if}

<!-- Ingredients -->
<section>
  <h2>Ingredients</h2>
  <UnorderedList>
    {#each recipe.ingredients as ingredient}
      <CheckboxListItem item={ingredient} hideListStyle/>
    {/each}
  </UnorderedList>
</section>

<!-- Instructions -->
<section>
  <h2>Instructions</h2>
  <OrderedList>
    {#each recipe.instructions as instruction}
      <CheckboxListItem item={instruction}/>
    {/each}
  </OrderedList>
</section>

<style>
  section {
    margin-bottom: 24px;
  }

  .author {
    text-align: center;
    font-style: italic;
  }

  h2:after {
    width: 250px;
    height: 1px;
    background-color: var(--color-theme-2);
    position: relative;
    content: "";
    bottom: 0;
    display: block;
  }

</style>
