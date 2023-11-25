<script>
	import Header from '$lib/header/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>made with love</p> |
		<a href="/about">about</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		font-size: 12px;
	}
</style>
