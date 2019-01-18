<i18n>
  {
    "ja": {
      "title": "ポートフォリオ（このサイト）",
      "description1": "フロントエンドはNuxt.js, THREE.js(WebGL, GLSL)で作成しています。",

      "site": "サイト"
    },
    "en": {
      "title": "Portfolio(this site)",
      "description1": "The website is created with Nuxt.js and Three.js(WebGL, GLSL).",

      "site": "site"
    }
  }
</i18n>

<template>
  <section>
    <h3>{{ $t('title') }}</h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>
        <a href="https://nabehide.github.io" target="_blank">
          <font-awesome-icon :icon="['fas', 'globe']" /> Web{{ $t('site') }}
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.descriptions {
  padding: 0px 0px 0px 10px;
}
</style>
