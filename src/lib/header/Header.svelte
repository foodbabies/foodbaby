<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<span class='logo'>
			<a href="/">foodbaby</a>
		</span>
		<ul>
			<li aria-current={$page.url.pathname.startsWith('/food') ? 'page' : undefined}>
				<a href="/food">food</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/drink') ? 'page' : undefined}>
				<a href="/drink">drink</a>
			</li>
		</ul>
	</nav>
</header>

<style>

	nav {
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
	}

	.logo {
		font-style: italic;
		font-weight: 800;
		font-size: 20px;
		padding: 15px;
	}

	ul {
		display: flex;
		flex-direction: row;
		padding: 15px;
		margin: 0;
		gap: 15px;
		justify-content: end;
	}

	li {
		list-style-type: none;
	}

	li[aria-current] {
		font-style: italic;
		font-weight: 600;
	}
</style>
