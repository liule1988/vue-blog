<template>
  <div>
    <div v-for="item in articles">
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
import axios from 'axios'
  export default{
        data(){
            return {
                articles:null,
            }
        },
      components:{
            'item-article':item_article
      },

      mounted:function () {
        var that = this;
        axios.get('https://api.github.com/repos/liule1988/liule.github.io/issues',{
          headers: {'Accept': 'application/vnd.github.v3.html',
            'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .then(function (response) {
            alert(response.data);
            that.articles=response.data;

          })
          .catch(function (error) {
            alert(error);
          });

//        let loadingInstance = Loading.service({ fullscreen: true });

//        $.ajax({
//          // url: "https://api.douban.com/v2/movie/in_theaters",
//           data:{
//                access_token :'1af7d431e31c3bac53d79a9385f5f20ff67788b7',
//           },
//          url: "https://api.github.com/repos/liule1988/liule.github.io/issues",
//          type: 'GET',
////          dataType: 'JSON',//here
//          beforeSend: function(xhr) {
//
//            xhr.setRequestHeader("Accept", "application/vnd.github.v3.html");
//
//          },
//          success: function (data) {
//             alert(JSON.stringify(data))
//            that.articles=data;
////            loadingInstance.close();
//          },
//          error:function (e) {
//            alert(e.responseText);
//          }
//        });
      }

    }
</script>

<style>

</style>
