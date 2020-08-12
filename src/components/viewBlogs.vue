<template>
    <div>
      <div class="container">
            <h3 class="text-center font-weight-bold">Welcome to Wejapa Blog</h3>
            <hr class="d-block mx-auto mb-4" style="width: 10%; border: 2px solid black">
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="card-body">
                      <!-- blog body -->
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
                            <!-- blog comments -->
                            <div class="col-md-12 pl-0" v-for="(blogComment, index) in blogComments" :key="index">
                              <h6 class="font-weight-bold">{{blogComment.name}}</h6>
                              <p>{{blogComment.body}}</p>
                              <hr>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 offset-md-3 text-left">
                            <div class="card">
                              <div class="card-body">
                                <!-- comment form -->
                            <h6 class="font-weight-bold">Add Comment</h6>
                            <hr>
                            <form action="">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="">Name</label>
                                    <input type="text" class="form-control rounded-0" v-model="ucomments.name">
                                  </div>
                                </div>
                                 <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="">Comment</label>
                                    <textarea type="text" class="form-control rounded-0" v-model="ucomments.body" style="resize: none"></textarea>
                                  </div>
                                </div>
                              </div>
                              <button @click="addComment" class="btn btn-primary rounded-0">Add Comment</button>
                            </form>
                          </div>
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
            blogComments: {},
            ucomments:{
              name: '',
              body: ''
            },
        }
    },
    methods: {
      getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then((response) =>{
        this.blogPost = response.data
      })
      },
      addComment(e){
          e.preventDefault()
          this.blogComments.push(this.ucomments);
          this.ucomments = ''
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
  .btn{
    background: #041705 !important;
    color: #fff !important;
    border: none;
    box-shadow: none;
  }
  input:focus, textarea:focus, .btn:focus{
    box-shadow: none;
  }
  label{
    font-weight: bold;
  }
  span{
    font-size: 13px;
  }
</style>