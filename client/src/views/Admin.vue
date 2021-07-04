<template>
  <div>
    <h1>Admin Dashboard</h1>
      <div class="box">
        <div class="left">
          <p>Admin</p>
          <hr>
          <p>Doctor</p>
        </div>
        <div class="right">
          <p>Dashboard</p>
          <hr>
          <section class="card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Add a doctor</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                  <div class="form-group">
                    <label class="sr-only" for="message">post</label>
                      <textarea 
                        v-model="form.name" 
                        class="form-control" 
                        id="message" rows="1" 
                        @input="validateContent"
                        placeholder="Enter doctor's name...">
                      </textarea>
                      <textarea 
                        v-model="form.department" 
                        class="form-control" 
                        id="message" rows="1" 
                        @input="validateContent"
                        placeholder="Enter doctor's department...">
                      </textarea>
                      <span v-if="hasError" class="form-error-message">{{error.message}}</span>
                    </div>
                  </div>
                </div>
                <div class="text-right">
                  <button @click="submitPost" type="button" class="btn btn-primary">Add</button>
                </div>
              </div>
            </section>
            <section v-for="post in getPosts" :key="post.id" class="card mt-4">
              <div class="border p-2">
                <div class="row m-0">
                  <div class="">
                    <a class="text-decoration-none" href="#">
                      <img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
                    </a>
                  </div>
                  <div class="flex-grow-1 pl-2">
                    <a class="text-decoration-none" href="#">
                      <h2 class="text-capitalize h5 mb-0">{{post.name}}</h2>
                    </a> 
                      <p class="small text-secondary m-0 mt-1">{{post.department}}</p>
                    </div>
                    <div class="dropdown">
                      <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-chevron-down"></i>
                      </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item text-primary" href="#">Edit</a>
                      <a class="dropdown-item text-primary" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data() {
      return {
        form: {
          name: '',
          department: ''
        },
        error: {}
      }
    },
    props: {
        msg: String
    },
    methods: {
      validateContent() {
        if (this.form.name && this.form.department != "") {
          this.error.message = null
        }
      },
      submitPost() {
        // Validation content
        if (this.form.name && this.form.department == "") {
          this.error.message = "Name and department should not be empty"
        }
        // Post content to server
        axios.post('http://localhost:4000/posts', this.form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    computed: {
        hasError() {
            if(this.error.message) return true
            return false
        },
        ...mapGetters([
            "getPosts"
        ]), // mapGetters() will return ["getPosts"] => "getPosts"
    }
}
</script>

<style scoped>
.box {
    width: 1000px;
    height: 100%;
    border: 1px solid;
    margin: auto;
    display: flex;
}

.left {
    left: 0px;
    width: 200px;
    border-right: 1px solid;
}

hr {
    margin: 0;
    border-top: 1px solid black;
}

.right {
    width: 100%;
}
.form-error-message {
    color: red
  }
</style>
