<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		foodbaby
	</h1>
	<div class="hotlink">
		<a href="/food">food</a>
		<a href="/drink">drink</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		text-align: center;
	}

	.hotlink {
		display: flex;
		flex-direction: row;
		gap: 15px;
	}
</style>
