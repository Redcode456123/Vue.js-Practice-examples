<template>
<div id="another">
  <div v-html="legacy">
  </div>
</div>
</template>

<script>
export default {
  name: "Another",
  data(){
    return{
      legacy:
   ' <p>another</p>'
    }
  }
}
</script>

<style scoped>

</style>