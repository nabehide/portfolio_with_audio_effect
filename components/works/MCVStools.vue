<i18n>
  {
    "ja": {
      "description1": "スマートフォンFPSゲームのモダンコンバットVSのツールを提供するWebサイト。",
      "description2": "2体のキャラクターが撃ちあった時の勝敗をシミュレートします。",
      "description3": "フロントエンドはNuxt.jsで作成しています。",

      "site": "サイト"
    },
    "en": {
      "description1": "The web app provides some tools for 'Modern Conbat Versus', FPS game on smartphone.",
      "description2": "The app simulates two character shoot each other.",
      "description3": "Nuxt.js is used for development.",

      "site": "site"
    }
  }
</i18n>

<template>
  <section>
    <h3>MCVS tools</h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>{{ $t('description3') }}</p>
      <p>
        <a href="https://mcvs-8422c.firebaseapp.com" target="_blank">
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
