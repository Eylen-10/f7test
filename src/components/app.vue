<template>
<f7-app  id='app'>
       <!-- <f7-statusbar></f7-statusbar> -->
       <f7-views tabs toolbar-through theme="black" layout="white">
         <!-- <f7-view  url='/home/'></f7-view> -->
         <f7-link href="/home/">home</f7-link>
<!-- 
         <f7-toolbar tabbar class="global-toolbar">
           <f7-link @click="loadpage($event, '/home/')" tab-link active no-link-class icon-f7="home"></f7-link>
         </f7-toolbar> -->
       </f7-views>
</f7-app>
</template>
<script>

  export default {
    data() {
      return {
      }
    },
    methods: {
      loadpage(event, page){
        console.log(this.$root.$f7);
        this.$root.$$('.global-toolbar .tab-link').removeClass('active');
        this.$root.$$(event.target).closest('a').addClass('active');
        this.$root.$f7.getCurrentView().router.loadPage({
          url: page,
          animatePages: false
        })
      }

    },
    mounted() {
    }
  }
</script>