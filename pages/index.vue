<template>
  <div>
    <Gui/>
    <div :class="{'container': true, 'isColorInverted': isColorInverted}">
      <div class="intro">
        <p>nabehide / Engineer</p>
        <p>Tokyo, Japan</p>
        <p>Love: Programming, Music</p>

        <table>
          <tbody>
          <tr>
            <td class="icon"> <a href="https://github.com/nabehide" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a> </td>
            <td> <a href="https://github.com/nabehide" target="_blank">Github</a> </td>
          </tr>

          <tr>
            <td class="icon"> <a href="https://twitter.com/____nabehide" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a> </td>
            <td> <a href="https://twitter.com/____nabehide" target="_blank">Twitter</a> </td>
          </tr>

          <tr>
            <td class="icon"> <a href="https://soundcloud.com/nabehide" target="_blank">
              <font-awesome-icon :icon="['fab', 'soundcloud']" />
            </a> </td>
            <td> <a href="https://soundcloud.com/nabehide" target="_blank">Soundcloud</a> </td>
          </tr>

          <!--
          <tr>
            <td> <a href="https://suzuri.jp/____nabehide" target="_blank" class="icon"><img src="/surisurikun.png" width="36px" height="36px" ></a> </td>
            <td> <a href="https://suzuri.jp/____nabehide" target="_blank">Suzuri</a> </td>
          </tr>

          <tr>
            <td> <a href="https://qiita.com/nabehide" target="_blank" class="icon"><i></i></a> </td>
            <td> <a href="https://qiita.com/nabehide" target="_blank">Qiita</a> </td>
          </tr>

          <tr>
            <td> <a class="icon"></a> </td>
            <td> <a href="https://www.shadertoy.com/user/nabehide" class="text" target="_blank">Shadertoy</a> </td>
          </tr>

          <tr>
            <td> <a href="https://medium.com/@nabehide" target="_blank" class="icon"><i class="fab fa-medium"></i></a> </td>
            <td> <a href="https://medium.com/@nabehide" target="_blank">Medium</a> </td>
          </tr>

          <tr>
            <td> <a href="https://www.linkedin.com/nabehide" target="_blank" class="icon"><i class="fab fa-linkedin"></i></a> </td>
            <td> <a href="https://www.linkedin.com/nabehide" target="_blank">Linkedin</a> </td>
          </tr>

          -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Gui from '~/components/Gui'
export default {
  components: {
    Gui,
  },
  computed: {
    isColorInverted () { return this.$store.state.uniforms.color.isColorInverted.value }
  },
}
</script>

<style scoped lang="scss">
#button {
  display: none;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .intro {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      margin: 8px 0px;
    }

    .subContainer {
      padding: 10px 30px 0px 30px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    table {
      padding: 5px;
      * {
        padding: 2px;
      }
      .icon {
        text-align: center;
      }
    }
  }
}
</style>
