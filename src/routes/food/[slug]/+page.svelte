<script lang="ts">
	import { onMount } from "svelte";
	import { page } from '$app/stores';
  import RecipeRenderer from '$lib/recipe/RecipeRenderer.svelte';
	import Column from '$lib/section/Column.svelte';

	let urlId = $page.params.slug;
	
	let recipe:any;
  const endpoint = `${import.meta.env.VITE_API_URL}/api/v1/food/${urlId}`;

	onMount(async() => {
    const response = await fetch(endpoint);
    const data = await response.json();
    recipe = data[0];
  });

</script>

<svelte:head>
	<title>recipe</title>
	<meta name="recipe | foodbaby" content="twotop recipes" />
</svelte:head>

{#if recipe}
	<Column title={recipe.name} hasSubtitle>
		<RecipeRenderer recipe={recipe}/>
	</Column>
{:else}
	<p> loading </p>
{/if}
<style>

</style>
