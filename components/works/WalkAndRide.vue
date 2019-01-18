<i18n>
  {
    "ja": {
      "title": "ウォーキング＆乗換案内",
      "description1": "「1駅先から乗るルート」と「1駅手前で降りるルート」も同時に検索するアプリケーション。",
      "description2": "フロントエンドはNuxt.js、サーバーサイドはFlaskをHerokuで動かしています。",
      "description3": "スマートフォンアプリはReact Nativeで作成しています。",

      "site": "サイト"
    },
    "en": {
      "title": "Walking and Transit Navigation",
      "description1": "The App suggests routes when walking between stations in Japan.",
      "description2": "Nuxt.js and Flask are used for web.",
      "description3": "React Native is used for native app.",

      "site": "site"
    }
  }
</i18n>

<template>
  <section>
    <!--
    <h3>ウォーキング＆乗換案内</h3>
    -->
    <h3>{{ $t('title') }}</h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>{{ $t('description3') }}</p>
      <p>
        <a href="http://walkandride.html.xdomain.jp" target="_blank">
          <font-awesome-icon :icon="['fas', 'globe']" /> Web{{ $t('site') }}
        </a>
      </p>
      <p>
        <a href="https://itunes.apple.com/jp/app/%E6%9C%80%E5%AE%89%E4%B9%97%E3%82%8A%E6%8F%9B%E3%81%88%E6%A1%88%E5%86%85-%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0/id1442101438?mt=8&uo=4" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.walk_and_ride" target="_blank">
          <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play (Android)
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
