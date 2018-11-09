<template>
  <div :class="{'container': true, 'isColorInverted': isColorInverted}">
    <div class="intro">
      <p>nabehide / Engineer</p>
      <p>Tokyo, Japan</p>
      <p>Love: Programming, Music</p>

      <table>
        <tr>
          <td> <a href="https://github.com/nabehide" target="_blank" class="icon"><i class="fab fa-github" aria-hidden=true></i></a> </td>
          <td> <a href="https://github.com/nabehide" target="_blank">Github</a> </td>
        </tr>

        <tr>
          <td> <a href="https://twitter.com/____nabehide" target="_blank" class="icon"><i class="fab fa-twitter"></i></a> </td>
          <td> <a href="https://twitter.com/____nabehide" target="_blank">Twitter</a> </td>
        </tr>

        <tr>
          <td> <a href="https://soundcloud.com/nabehide" target="_blank" class="icon"><i class="fab fa-soundcloud"></i></a> </td>
          <td> <a href="https://soundcloud.com/nabehide" target="_blank">Soundcloud</a> </td>
        </tr>
        <!--
        <tr>
          <td> <a class="icon"></a> </td>
          <td> <a href="https://www.shadertoy.com/user/nabehide" class="text" target="_blank">Shadertoy</a> </td>
        </tr>
        -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isColorInverted () { return this.$store.state.parameters.invertColor.isColorInverted.isColorInverted }
  },
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /*
  color: black;
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: black;
  }
  */

  .intro {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      margin: 8px 0px;
    }

    table {
      margin: 16px 0px;
      .icon {
        display: inline-block;
        width: 100%;
        text-align: center;

        margin: 5px;
      }
      .text {
        padding: 10px 0px;
      }
    }
  }
}
/*
.isColorInverted {
  color: white;
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: white;
  }
}
*/
</style>
