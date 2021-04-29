<template>
  <div class="container">
    <h1>JSON Placeholder</h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components:{}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 50%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.bg-green {
   background: rgb(35, 205, 86) !important;
}
.btn {
  display: inline-block;
  color: #fff;
  border: none;
  background: #000;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-right {
  float: right;
  margin-top: -4px;
}

.btn-center{
  margin: 0 auto;
  text-align:center;
}
</style>
