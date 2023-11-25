<script lang="ts">
	export let title:string;
  export let hasSubtitle: boolean = false;

  const classNames = `column ${hasSubtitle ? 'hasSubtitle' : ''}`;
</script>

<section class={classNames}>
  <h1 class='title'> {title} </h1>
  <slot/>
</section>

<style>
	section {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-self: center;
	}

  section.hasSubtitle h1 {
    margin-bottom: 15px;
  }

  :global(.hasSubtitle :nth-child(2)) {
    margin-bottom: 35px;
  }

  @media only screen and (max-width: 600px) {
    section {
      width: 90%;
    }
  }
</style>
