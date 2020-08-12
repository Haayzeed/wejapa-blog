<template>
    <div>
        <div class="container pb-5">
            <h3 class="text-center font-weight-bold">Welcome to Wejapa Blog</h3>
            <hr class="d-block mx-auto mb-4" style="width: 10%; border: 2px solid black">
            <paginate name="blogs" :list="blogs" :per="10" v-if="shown">
            <div class="col-md-12 mb-4" v-for="(blog, index) in paginated('blogs')" :key="index">
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
            </paginate>
            <!-- pagination -->
            <div class="col-md-12">
                <div class="pagination text-center">
                    <paginate-links for="blogs" :async="true" :show-step-links="true" :step-links="{
                        next: 'Next',
                        prev: 'Prev' }" class="page-links pagination text-center">
                    </paginate-links>
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
            blogs: [],
            paginate: ['blogs'],
            shown: false
        }
    },
    methods:{
    },
    created(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
      this.blogs = response.data
      this.shown = true
    })
  }
}
</script>
<style>
.pagination{
    margin: 0 auto !important;
}
.page-links{
    text-align: center !important;
}
    .pagination .left-arrow a, .pagination .right-arrow a{
        background: #041705 !important;
        color: #fff !important;
        padding: 8px 10px !important;
        cursor: pointer !important;
    }
    .pagination .right-arrow a{
        margin-left: 8px;
    }
    .number a{
        color: #041705 !important;
        margin-left: 10px;
        cursor: pointer !important;
    }
    .number.active a{
         background: #041705 !important;
        color: #fff !important;
        padding: 4px;
    }
</style>