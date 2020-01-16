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
    metadata {
      siteName
      siteDescription
    }
  }
</page-query>
<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
	components: { Footer, Header }
};
</script>
