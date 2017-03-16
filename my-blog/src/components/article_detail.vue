<template>
  <div class="md">
  <div v-html="article.body_html">

  </div>
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
            access_token :'1af7d431e31c3bac53d79a9385f5f20ff67788b7',
//            id:that.$route.params.id
          },
          beforeSend: function(xhr) {

            xhr.setRequestHeader("Accept", "application/vnd.github.v3.html");

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
  .md{
    margin: 0 auto;
    max-width: 720px;
    padding: 20px;
  }
  .md p{

  }

</style>
