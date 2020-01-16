<template>
  <Layout>
<!--    <div class="subvisual">-->
<!--      <div class="subvisual__img"><img src="/wp-content/uploads/2019/12/subvisual.jpg" alt=""></div>-->
<!--      <div class="subvisual__inner">-->
<!--        <div class="subvisual__text">-->
<!--          <h2 class="subvisual__title" v-html="$page.wordPressPage.title" />-->
<!--          <p class="subvisual__subtitle"></p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <img-->
<!--      v-if="$page.wordPressPage.featuredMedia"-->
<!--      :src="$page.wordPressPage.featuredMedia.sourceUrl"-->
<!--      :width="$page.wordPressPage.featuredMedia.mediaDetails.width"-->
<!--      :alt="$page.wordPressPage.featuredMedia.altText"-->
<!--    />-->
    <div v-html="$page.wordPressPage.content"/>
  </Layout>
</template>

<page-query>
  query WordPressPage($id: ID!) {
    wordPressPage(id: $id) {
      title
      content

    }
  }
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title
    }
  }
}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
