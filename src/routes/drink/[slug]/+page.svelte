<script context="module" lang="ts">
	export const prerender = true;
  import RecipeList from '$lib/recipe/RecipeRenderer.svelte';
</script>

<svelte:head>
	<title>Recipes</title>
	<meta name="Recipes | twotop" content="twotop recipes" />
</svelte:head>

<section>
	<RecipeList />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
</style>
