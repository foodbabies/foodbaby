<script lang="ts">
  import { onMount } from "svelte";
	import Column from '$lib/section/Column.svelte';
  import UnorderedList from '$lib/list/UnorderedList.svelte';
  import ListItem from '$lib/list/ListItem.svelte';

  let foods:any;
  const endpoint = `${import.meta.env.VITE_API_URL}/api/v1/food`;

  onMount(async() => {
    const response = await fetch(endpoint);
    const data = await response.json();
    foods = data;
  });

</script>

<svelte:head>
	<title>food recipes</title>
	<meta name="description" content="food recipes" />
</svelte:head>

<Column title="food recipes">
  <section class="food" id=food>
    {#if foods && foods.length()}
      <UnorderedList>
        {#each foods as food}
          <ListItem><a href={`food/${food.id}`}> {food.name} </a></ListItem>
        {/each}
      </UnorderedList>
    {:else}
      <p> loading </p>
    {/if}
  </section>

</Column>
