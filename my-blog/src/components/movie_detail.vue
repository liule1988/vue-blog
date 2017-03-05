<template>
  <div class="detail-page">
    <div class="detail_image">
      <img :src="movie_msg.images.large">
    </div>
    <div class="info">
      <div class="info_msg">
        <div class="title">{{movie_msg.title}}</div>
        <div>{{movie_msg.year}} / {{movie_msg.countries[0]}} / <span v-for="item in movie_msg.genres">{{item+' / '}}</span></div>
        <div>原名：{{movie_msg.original_title
          }}</div>
      </div>
      <div class="detail_rating">
          <div class="average_rating">{{movie_msg.rating.average}}</div>
        <el-rate
          v-model="rating_stars"
          disabled
          class="rating_star"
        >

        </el-rate>
        <div class="stars_num">{{movie_msg.ratings_count}}人</div>
      </div>
    </div>

    <div class="summary">
      <span class="sum_text">剧情简介</span>
      <div class="summary_content">
        {{movie_msg.summary}}
      </div>
    </div>

    <div class="actors">
      <span class="sum_text">影人</span>
      <div class="cast_scroll">
        <div class="cast_wrapper">
          <div v-for="item in movie_msg.casts" class="cast_item">
            <a :href="item.alt">
              <img :src="item.avatars.small">
            </a>
            <div class="actors_name">{{item.name}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
    export default{
        data(){
            return {
                msg:10,
            }
        },
      props:['movie_msg'],
      computed: {
        // a computed getter
        rating_stars: function () {
          // `this` points to the vm instance
          return Number((this.movie_msg.rating.average/2).toFixed(1));
        }
      },
//      created: function () {
//        var that = this;
//        $.ajax({
//          url: "https://api.douban.com/v2/movie/subject/"+this.movie_msg.id+"/photos",
//          type: 'GET',
//          dataType: 'JSONP',//here
//          success: function (data) {
////            that.movies_datas = data.subjects;
//          }
//        });
//      },

    }

</script>

<style>
.detail-page{
  position: absolute;
  top:0;
  z-index: 5;
  background: rgba(0,0,0,.04);
  width: 100%;
  overflow: scroll;

}
  .detail_image{
    width: 100%;
    text-align: center;
    background: #97e4ff;
    padding: 20px 0;
  }
  .detail_image img{
    width: 50%;
  }
  .info{
    display: flex;
    flex-direction:row ;
    align-items: center;
  }
  .detail_rating{
    padding: 5px;
    text-align: center;
    background: #fff;
    box-shadow: 5px 5px #eee;
  }
  .info_msg{
    font-size: 0.8rem;
    color: #666;
    padding: 20px;
  }
.info_msg div{
  padding-bottom: 2px;
}
 .info_msg .title{
    font-size: 1.2rem;
    color: black;
    font-weight: bold;
    padding-bottom: 8px;
  }
  .rating_star{
    width: 100%;
  }
.average_rating{
  font-size: 1.1rem;
  color: black;
  font-weight: bold;
}
  .stars_num{
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;
  }
  .summary{
    padding: 20px;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }
  .sum_text{
    font-size: 0.8rem;
    color: #666;
    margin: 10px 0;
    display: block;
  }
  .cast_wrapper{
    overflow-x: auto;
    width: 500px;

  }
  .cast_item{
    /*display: inline-block;*/
    float: left;
    padding:0 5px;
    width: 70px;
    font-size: 0.8rem;
    text-align: center;
  }
  .cast_scroll{
    overflow-x: auto;
  }
  .actors{
    padding: 20px ;
  }
</style>
