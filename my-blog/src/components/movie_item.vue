<template>
  <div class="movie_item" @click="showDetail">
    <div class="avatar">
      <img :src="movie.images.medium">
    </div>
    <div class="item_info">
        <div class="title">{{movie.title}}</div>
      <div class="rating">
        <el-rate
          v-model="rating_stars"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}"
        >

        </el-rate>
      </div>




      <div class="director">导演:<span>{{movie.directors[0].name}}</span></div>
      <div class="casts">主演: <span v-for="cast in movie.casts">{{cast.name+' / '}}</span></div>
    </div>

  </div>
</template>
<style>
  .movie_item{
    display: flex;
    flex-direction: row;
    /*align-items: center;*/
    align-self: center;
    border-bottom: 1px solid #eee;
    padding: 10px;
  }
  .avatar{
    flex:1;
    align-items: center;
    text-align: center;
  }
  .item_info{
    flex: 2;
    padding-left: 20px;
    padding-top: 5px;
  }
  .title{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .rating{
    padding: 5px 0;
  }
  .director,.casts{
    font-size: 0.9rem;
    margin: 5px 0;
    color: #666;
  }
</style>
<script>
  import Vue from 'vue'
  import ElmentUI from 'element-ui'

  Vue.use(ElmentUI);
  export default{
    data(){
      return{
        msg:'hello movie',
        movies_datas:[],
        rat:3.5
      }
    },
    props: ['movie'],
    computed: {
      // a computed getter
      rating_stars: function () {
        // `this` points to the vm instance
        return Number((this.movie.rating.average/2).toFixed(1));
      }
    },
    methods:{
        showDetail:function () {
          this.$emit('show-detail',this.movie.id)
        }
    }


  }
</script>
