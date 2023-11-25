<script context="module" lang="ts">
	export const prerender = true;
  import RecipeRenderer from '$lib/recipe/RecipeRenderer.svelte';
	import recipe from '$lib/data/food/sweetpotato.json';
	import Column from '$lib/section/Column.svelte';
	// this should call an api and get back data for the receipe and pass it to the list
</script>

<svelte:head>
	<title>recipe</title>
	<meta name="recipe | foodbaby" content="twotop recipes" />
</svelte:head>

<Column title={recipe.name} hasSubtitle>
	<RecipeRenderer recipe={recipe}/>
</Column>

<style>

</style>
