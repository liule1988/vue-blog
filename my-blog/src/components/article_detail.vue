<template>
  <div>

{{this.article.body}}
  </div>
</template>

<script>
  import $ from 'jquery';
  import { Loading } from 'element-ui';


  export default{
        data(){
            return {
                article: null,
              fullscreenLoading:true
            }
        },
      props:['item'],
      created:function () {
        var that = this;
        let loadingInstance = Loading.service({ fullscreen: true });

        $.ajax({
          // url: "https://api.douban.com/v2/movie/in_theaters",
          data:{
//            access_token :'de14b3e7b3f33bd17928bb11f44aa17d2c4b8c60',
//            id:that.$route.params.id
          },
          url: "https://api.github.com/repos/liule1988/liule.github.io/issues/"+that.$route.params.id,
          type: 'GET',
          dataType: 'JSON',//here
          success: function (data) {
            console.log(JSON.stringify(data))
            that.article=data;
            loadingInstance.close();
          }
        });
      }

    }
</script>

<style>

</style>
