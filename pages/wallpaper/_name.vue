<template>
  <div class="subContainer">
    <img :src="'/wallpapers/'+name+'/'+name+'_256x256.png'" />
    <ul>
      <li> <a :href="'/wallpapers/'+name+'/'+name+'_2560x1440.png'">2560x1440</a> </li>
      <li> <a :href="'/wallpapers/'+name+'/'+name+'_1920x1080.png'">1920x1080</a> </li>
      <li> <a :href="'/wallpapers/'+name+'/'+name+'_890x1590.png'">890x1590</a> </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ params, env, error }){
    const wallpaper = env.wallpapers.find(wallpaper => wallpaper.name === params.name)
    if (wallpaper) {
      return wallpaper
    } else {
      return error({ message: 'not found', statusCode: 404 })
    }
  },
}
</script>

<style scoped lang="scss">
.subContainer {
  ul: {
    list-style: none;
  }
}
</style>
