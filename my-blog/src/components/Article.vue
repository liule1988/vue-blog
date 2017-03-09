<template>
  <div>
    <div v-for="item in articles" style="margin: 0 auto">
        <router-link :to="{name:'aa',params:{id:item.number}}" :item="item">
          <item-article :item="item"></item-article>

        </router-link>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
  import item_article from './Item_article.vue';
  import { Loading } from 'element-ui';

  export default{
        data(){
            return {
                articles:[] ,
            }
        },
      components:{
            'item-article':item_article
      },

      created:function () {
        var that = this;
        let loadingInstance = Loading.service({ fullscreen: true });

        $.ajax({
          // url: "https://api.douban.com/v2/movie/in_theaters",
           data:{
                access_token :'de14b3e7b3f33bd17928bb11f44aa17d2c4b8c60',
           },
          url: "https://api.github.com/repos/liule1988/liule.github.io/issues",
          type: 'GET',
          dataType: 'JSON',//here
          beforeSend: function(xhr) {

            xhr.setRequestHeader("Accept", "application/vnd.github.v3.html");

          },
          success: function (data) {
             console.log(JSON.stringify(data))
            that.articles=data;
            loadingInstance.close();
          }
        });
      }

    }
</script>

<style>

</style>
