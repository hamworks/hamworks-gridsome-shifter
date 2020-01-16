<template>
	<footer class="footer">
		<div class="footer__nav">
			<div class="footer__inner">
				<div class="footer__inner">
					<div class="fnav">
						<PageLinks class="fnav__list" />
					</div>
					<div class="sns">
						<ul id="sns-nav" class="sns__list">
							<li class="twitter">
								<a target="_blank" rel="noopener noreferrer"
								href="https://twitter.com/hamworks">Twitter</a></li>
							<li class="facebook">
								<a target="_blank" rel="noopener noreferrer"
								href="https://www.facebook.com/hamworks.co.ltd/">facebook</a></li>
						</ul>
					</div>
				</div>
			</div><!-- /.footer__inner -->
		</div><!-- /.footer__nav -->

		<div class="footer__bottom">
			<div class="top-back">
				<a href="#top" class="js-goto-pagetop"></a>
			</div>
			<div class="footer__inner">
				<div class="copyright"><small>© HAMWORKS Co., Ltd.</small></div>
				<div class="footer__hamrobo"><img src="../assets/images/hamrobo.svg" alt=""></div>
			</div><!-- /.footer__inner -->
		</div><!-- /.footer__bottom -->
	</footer>
</template>

<script>
import PageLinks from './PageLinks';
export default {
	name: 'Footer',
	components: { PageLinks }
};
</script>

<style scoped>

</style>
