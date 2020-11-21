<template>
  <Layout>
    <template v-if="$store.state.user.sidebar === '/user/new'">
      <new></new>
    </template>
    <template v-else-if="$store.state.user.sidebar === '/user/social'">
      <blog></blog>
    </template>
    <template v-else-if="$store.state.user.sidebar === '/user/blog'">
      <social></social>
    </template>
    <template v-else-if="$store.state.user.sidebar === '/user/project'">
      <project></project>
    </template>
  </Layout>
</template>

<script>
import New from '@/components/new/Main.vue'
import Blog from '@/components/blog/Main.vue'
import Social from '@/components/social/Main.vue'
import Project from '@/components/project/Main.vue'
export default {
  metaInfo: {
    title: ''
  },
  components: {
    New,
    Blog,
    Social,
    Project
  },
  created () {
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
