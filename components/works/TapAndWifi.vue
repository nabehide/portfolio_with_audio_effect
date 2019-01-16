<template>
  <section>
    <h3>電源Wifiサーチ</h3>
    <div class="descriptions">
      <p>電源（コンセント）やWifiの使用可否を地図上に表示するアプリケーション。</p>
      <p>お店の公式サイトの情報をPythonでWebスクレイピングしています。</p>
      <p>スマートフォンアプリはReact Nativeで作成しています。</p>
      <p>
        <a href="https://itunes.apple.com/jp/app/%E9%9B%BB%E6%BA%90wifi%E3%82%B5%E3%83%BC%E3%83%81-%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E6%AD%A3%E7%A2%BA%E3%81%AA%E6%83%85%E5%A0%B1%E3%82%92%E6%8E%B2%E8%BC%89/id1448125892?mt=8&ign-mpt=uo%3D4" target="_blank">
          <font-awesome-icon :icon="['fab', 'apple']" /> Apple Store (iOS)
        </a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=com.tapandwifi" target="_blank">
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
