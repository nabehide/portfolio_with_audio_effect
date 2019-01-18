<i18n>
  {
    "ja": {
      "title": "エンドレス・クラッカー",
      "description1": "無限に鳴らせるシンプルなクラッカーのアプリケーション。",
      "description2": "React Nativeで作成しています。"
    },
    "en": {
      "title": "Endless Popper",
      "description1": "The simple popper app on iOS and Android.",
      "description2": "The app is created with react native."
    }
  }
</i18n>

<template>
  <section>
    <h3>{{ $t('title') }}</h3>
    <div class="descriptions">
      <p>{{ $t('description1') }}</p>
      <p>{{ $t('description2') }}</p>
      <p>
        <a href="https://itunes.apple.com/jp/app/%E3%82%A8%E3%83%B3%E3%83%89%E3%83%AC%E3%82%B9-%E3%82%AF%E3%83%A9%E3%83%83%E3%82%AB%E3%83%BC/id1445536136?mt=8&ign-mpt=uo%3D4" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.cracker" target="_blank">
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
