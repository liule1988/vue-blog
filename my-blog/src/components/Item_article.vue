<template>
  <div class="item_article">
    <h3>{{item.title}}</h3>
    <div class="type_wrapper">
      <div class="labels">
        <el-button type="primary" size="small" v-for="label in item.labels" :key="label.id">{{label.name}}</el-button>
      </div>
      <div>
        <span class="time_article">{{item.created_at.substring(0,10)}}</span>
      </div>
    </div>

    <div class="article_summary" v-html="item.body_html.substring(0,60)">
      <!--{{item.body_html.substring(0,60)}}...-->
      ...
    </div>
    <div style="text-align: center">
      <router-link :to="{name:'aa',params:{id:item.number}}">

      <el-button>查看全文</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
            }
        },
        props:['item'],


    }
</script>

<style>
.article_summary{
  margin: 0 auto;
  width: 90%;
  padding: 10px 0;
}
  .item_article{
    margin: 0 auto;
    /*margin: 10px 0;*/
    border-bottom: 1px solid #eeeeee;
    padding: 20px;
    max-width: 960px;
    color: #8c939d;
  }
  .labels{
    margin: 5px;
    flex: 1;
  }
  .type_wrapper{
    display: flex;
    flex-direction:row ;
    align-items: center;
    align-self: center;
  }

</style>
