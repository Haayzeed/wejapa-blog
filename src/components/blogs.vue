<template>
    <div>
        <div class="container">
            <h3 class="text-center font-weight-bold">Welcome to Wejapa Blog</h3>
            <hr class="d-block mx-auto mb-4" style="width: 10%; border: 2px solid black">
            <div class="col-md-12 mb-4" v-for="(blog, index) in blogs" :key="index">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <img src="@/assets/blog.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="col-md-10 text-left">
                                <router-link :to="'viewBlogs/' + blog.id" class="h5 font-weight-bold text-dark">{{blog.title}}</router-link>
                                <p>{{blog.body}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id: this.$route.params.id,
            blogs: []
        }
    },
    created(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
      this.blogs = response.data
    })
  }
}
</script>