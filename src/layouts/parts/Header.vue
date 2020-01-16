<template>
	<header class="header">
		<div class="header__inner">
			<h1 class="header__logo">
				<a href="/"><img src="../../assets/images/logo.svg" alt="$static.metadata.siteName"></a>
			</h1>
			<div class="sp-button">
				<a href="#" class="sp-button__link js-menu">
					<span class="sp-button__button">
						<span class="sp-button__icon"></span>
					</span>
				</a>
			</div><!-- /.sp-button -->
			<nav class="nav">
				<ul class="nav__list">
					<li v-for="{node} in $static.allWordPressPage.edges" :key="node.id">
						<a :href="node.path">{{ node.title }}</a>
					</li>
				</ul>
			</nav>
		</div><!-- /.header__inner -->
	</header>
</template>

<static-query>
query {
	metadata {
		siteName
	}
	allWordPressPage {
		edges {
			node {
				id
				path
				title
			}
		}
	}
}
</static-query>

<script>
export default {
	name: 'Header'
};
</script>

<style scoped>

</style>
