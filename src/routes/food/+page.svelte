<script context="module" lang="ts">
	import Column from '$lib/section/Column.svelte';
  import foods from '$lib/data/food/all.json';
    import UnorderedList from '$lib/list/UnorderedList.svelte';
    import ListItem from '$lib/list/ListItem.svelte';
</script>

<svelte:head>
	<title>food recipes</title>
	<meta name="description" content="food recipes" />
</svelte:head>

<Column title="food recipes">
  <section class="food" id=food>
    <UnorderedList>{#each foods as food}
      <ListItem><a href={`food/${food.id}`}> {food.name} </a></ListItem>
    {/each}
    </UnorderedList>
  </section>
</Column>
