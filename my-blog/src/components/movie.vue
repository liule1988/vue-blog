<template>

  <div class="movie">
    <div v-for="item in movies_datas" v-show="!showdetail">
        <movie-item :movie="item" @show-detail="showDetail"></movie-item>
    </div>
    <movie-detail v-if="showdetail" :movie_msg="movie_msg"></movie-detail>
  </div>
</template>
<style>
  .movie {
    margin: 10px 0;
  }
</style>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import movie_item from './movie_item.vue'
  import movie_detail from './movie_detail.vue'
  export default{
    data(){
      return {
        msg: 'hello movie',
        movies_datas: [],
        rate:3.7,
        showdetail:false,
        movieId:'',
        movie_msg:[]
      }
    },
    components: {
      'movie-item': movie_item,
      'movie-detail':movie_detail
    },
    mounted: function () {
      var that = this;
//      axios.get('https://api.douban.com/v2/movie/in_theaters',{
//        responseType: 'jsonp',
//      })
//        .then(function (response) {
//          console.log(response);
//          that.movies_datas = response.data.subjects;
//
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
      $.ajax({
        url: "https://api.douban.com/v2/movie/in_theaters",
        type: 'GET',
        dataType: 'JSONP',//here
        success: function (data) {
          that.movies_datas = data.subjects;
        }
      });
    },
    beforeUpdate: function () {
      console.log(this.movieId.length)


    },
    methods:{
        showDetail(msg){
            this.movieId=msg;
            console.log(msg+"  "+this.movieId);
            var that=this;
          if (this.movieId.length>0){
            $.ajax({
              url: "https://api.douban.com/v2/movie/subject/"+this.movieId,
              type: 'GET',
              dataType: 'JSONP',//here
              success: function (data) {
                that.movie_msg=data;
                that.showdetail=true;

                console.log(that.movie_msg)
              }
            });
          }
        }
    }

  }
</script>
