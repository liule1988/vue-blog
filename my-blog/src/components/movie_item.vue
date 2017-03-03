<template>
  <div class="movie_item">
    <div class="avatar">
      <img :src="movie.images.medium">
    </div>
    <div class="item_info">
        <div class="title">{{movie.title}}</div>



        <div class="director">导演:{{movie.directors[0].name}}</div>
      <div class="casts"><span v-for="cast in movie.casts">{{cast.name+' / '}}</span></div>
    </div>

  </div>
</template>
<style>
  .movie_item{
    display: flex;
    flex-direction: row;
    /*align-items: center;*/
    align-self: center;
  }
  .avatar{
    flex:1;
  }
  .item_info{
    flex: 2;
    padding-left: 20px;
  }
  .title{
    font-size: 1.1rem;
    font-weight: bold;
  }
</style>
<script>
  export default{
    data(){
      return{
        msg:'hello movie',
        movies_datas:[],
        rat:3.7
      }
    },
    props: ['movie'],


  }
</script>
