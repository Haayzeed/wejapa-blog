<template>
    <div>
      <div class="container">
            <h3 class="text-center font-weight-bold">Welcome to Wejapa Blog</h3>
            <hr class="d-block mx-auto mb-4" style="width: 10%; border: 2px solid black">
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="@/assets/blog.jpg" alt="" class="mb-3">
                            </div>
                            <div class="col-md-12 text-left">
                                <h4 class="font-weight-bold text-dark">{{blogPost.title}}</h4>
                                <p>{{blogPost.body}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                          <div class="col-md-12 text-left">
                            <h5 class="font-weight-bold">Comments</h5>
                            <hr>
                            <div class="col-md-12 pl-0" v-for="(blogComment, index) in blogComments" :key="index">
                              <p>{{blogComment.body}}</p>
                              <hr>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data: function(){
        return{
            id: this.$route.params.id,
            blogPost: [],
            blogComments: {}
        }
    },
    methods: {
      getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then((response) =>{
        this.blogPost = response.data
      })
      }
    },
    created(){
        this.getBlogs();
      axios.get('https://jsonplaceholder.typicode.com/comments?postId='+ this.id).then((response) =>{
        this.blogComments = response.data
        }
      ) 
  }
}
</script>
<style scoped>
  img{
    width: 100%;
    height: 200px;
  }
</style>