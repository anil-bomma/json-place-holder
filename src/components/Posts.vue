<template>
<div>
    <div v-for="post in posts" :key="post.id" class="box">
        <div>
            {{post.title}}
            <router-link :to="{ name: 'Post', params: { id: post.id }, query:{limit: limit} }">
                <button class="btn btn-right">Details</button>
            </router-link>
        </div>
    </div>
    <div class="btn-center">
        <button class="btn bg-green mr-5" @click="reload">Reload</button>
        <button class="btn bg-green" @click="loadMore">Load More</button>
    </div>
</div>
</template>

<script>
export default {
    name: "Posts",
    data() {
        return{
            limit: 5,
            posts: []
        }
    },
    async created() {
        if (this.$route.query.limit) {
            this.limit = this.$route.query.limit;
        }
        await this.getPosts();
        var element = document.getElementById("app");
        element.scrollTop = element.scrollHeight;
    },
    methods: {
        loadMore() {
            this.limit = parseInt(this.limit) + 5;
            this.getPosts();
        },
         reload() {
            this.limit = 5;
             this.getPosts();
            this.$router.push({name: 'Home', query:{limit: this.limit}});
        },
        async getPosts() {
            try {
                const posts = await this.axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`);
                this.posts = posts.data;
            } catch(e) {
                console.log(e);
                alert(e);
            }
        }
    }
}
</script>

<style scoped>
.box {
    border: 1px solid #333;
    border-left: 8px solid #6e6ed6;
    border-radius: 5px 5px;
    padding: 10px;
    margin: 20px;
}

.mr-5{
    margin-right: 5px;
}
</style>