<template>
  <div class="box task reminder" v-if="post">
    <router-link :to="{ name: 'Home', query: {limit: $route.query.limit} }">
        <button class="btn btn-right">Back</button>
    </router-link>
     <h3>Post Details</h3>
     <label class="txt-bold">ID: </label> <span>{{post.id}}</span>
     <br/>
     <label class="txt-bold">Title: </label> <span>{{post.title}}</span>
     <br/>
     <label class="txt-bold">Body: </label> <span v-html="post.body"></span>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Post",
    data() {
        return {
            post: null,
        }
    },
    async created() {
        try {
            const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
            this.post = post.data;
        } catch(e) {
            console.log(e);
            alert(e);
        }
    }, 
    methods: {}
}
</script>

<style scoped>
.box {
    border: 1px solid #333;
    padding: 10px;
    margin: 20px;
    border-radius: 5px 5px;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.txt-bold {
    font-weight: bold;
    text-decoration: underline;
}

</style>