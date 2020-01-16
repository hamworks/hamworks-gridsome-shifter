<template>
	<div class="wrap">
		<Header />
		<slot />
		<Footer />
	</div><!-- /.wrap -->
</template>

<style type="text/css">
	@import url('../assets/css/main.css');
</style>
<page-query>
query Metadata {
	metadata{
		siteName
		siteDescription
	}
}
</page-query>
<script>
import Header from './parts/Header';
import Footer from './parts/Footer';

export default {
	components: { Footer, Header }
};
</script>
