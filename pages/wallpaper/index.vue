<template>
  <div class="subContainer">
    <div v-for="wallpaper in wallpapers" :key="wallpaper.name" >
      <h2>{{ wallpaper.name }}</h2>
      <img :src="'wallpapers/'+wallpaper.name+'/'+wallpaper.name+'_256x256.png'" />
      <div class="download">
        <div><a :href="'wallpapers/'+wallpaper.name+'/'+wallpaper.name+'_2560x1440.png'">2560x1440</a></div>
        <div><a :href="'wallpapers/'+wallpaper.name+'/'+wallpaper.name+'_1920x1080.png'">1920x1080</a></div>
        <div><a :href="'wallpapers/'+wallpaper.name+'/'+wallpaper.name+'_890x1590.png'">890x1590</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ env }) {
    return {
      wallpapers: env.wallpapers,
      baseURL: env.baseURL,
    }
  },
}
</script>

<style scoped lang="scss">
.subContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.download {
  div {
    margin: 5px;
  }
}
</style>
