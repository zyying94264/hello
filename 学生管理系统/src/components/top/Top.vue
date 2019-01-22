<template>
  <div class="top">
    <Badge>
      <Avatar :src="userAvator" />
    </Badge>
    <div><Button @click="clickLogOut" type="error" size="small">退出</Button></div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: {
      userAvator: {
        type: String,
        default: ''
      },
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'handleLogOut',
      ]),
      clickLogOut() {
        // this.handleLogOut().then(() => {
          //   this.$router.push('/login')
          // })\
          this.$store.commit('setToken','');
          this.$router.push('/login');
      },
    }
}
</script>

<style scoped>
.top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.top div{
    /* margin: 0 10px; */
}
</style>
