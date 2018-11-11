<template>
  <div id="app">
    <Header/>
    <router-view/>
    <FooterMenu/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import FooterMenu from '@/components/FooterMenu'

export default {
  name: 'App',
  components: { Header, FooterMenu }
}
</script>

<style>

</style>
