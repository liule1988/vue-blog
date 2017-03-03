<template>
  <div>
    <div class="header-wrapper">
      <ul class="header-ul">
        <li><a href="#">首页</a>
        </li>
        <li><a href="#/article">文章</a>
        </li>
        <li><a href="#/movie">电影</a>
        </li>
        <li><a href="#/me">我</a>
        </li>


      </ul>
    </div>
    <img src="../assets/logo.png" class="header-img">
    <div class="header-text">
      <P>开始Vue</P>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        msg: 'hello movie',
      }
    },

  }
</script>
<style>

  .header {
    background-color: #42b983;
  }

  .header-wrapper {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
    top: 2%
  }

  .header-ul {
    text-decoration: none;
    list-style: none;
    text-align: center;
  }

  .header-ul li {
    display: inline-block;
    padding: 10px;
    width: 50px;
    color: #fff;
  }
  a{
    text-decoration: none;
    color: #fff;

  }
  .header-img {
    width: 100%;
    /*position: absolute;*/
    /*top: 0;*/
    height: 210px;
    background-color: #000;
  }

  .header-text {
    position: absolute;
    width: 100%;
    text-align: center;
    color: #fff;
    top: 15%;
    font-size: 25px;
  }
</style>
