<template>

  <div class="movie">


    <div v-for="item in movies_datas">
      <movie-item :movie="item"></movie-item>
    </div>
  </div>
</template>
<style>
  .movie {
    margin: 10px;
  }
</style>
<script>
  import $ from 'jquery'
  import movie_item from './movie_item.vue'
  export default{
    data(){
      return {
        msg: 'hello movie',
        movies_datas: [],
        rate:3.7
      }
    },
    components: {
      'movie-item': movie_item
    },
    created: function () {
      var that = this;
      $.ajax({
        url: "https://api.douban.com/v2/movie/in_theaters",
        type: 'GET',
        dataType: 'JSONP',//here
        success: function (data) {
          that.movies_datas = data.subjects;

        }
      });

    },
  }
</script>
