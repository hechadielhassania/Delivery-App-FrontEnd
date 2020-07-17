/* eslint-disable no-unused-vars */
<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div id="first">
        <div class="myform form ">
          <div class="logo mb-3">
            <div class="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <form action="" method="post" name="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <p class="text-center">
                By signing up you accept our <a href="#">Terms Of Use</a>
              </p>
            </div>
            <div class="form-group">
              <p class="text-center alert-danger" v-if="hasErrors">
                {{ errors }}
              </p>
            </div>
            <div class="col-md-12 text-center ">
              <button
                type="button"
                class=" btn btn-block mybtn btn-primary tx-tfm"
                @click="login"
              >
                Login
              </button>
            </div>
            <div class="col-md-12 ">
              <div class="login-or">
                <hr class="hr-or" />
                <span class="span-or">or</span>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <p class="text-center">
                <a href="javascript:void();" class="google btn mybtn"
                  ><i class="fa fa-google-plus"> </i> Signup using Google
                </a>
              </p>
            </div>
            <div class="form-group">
              <p class="text-center">
                Don't have account?
                <router-link class="nav-link" to="/signup" id="signup"
                  >Sign up here</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ApiService from "../services/api.service";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      hasErrors: false
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      // console.log(this.$store);
      this.$store
        .dispatch("login", { email, password })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          this.hasErrors = true;
          this.errors = "The email or password is incorrect";
          console.log(error);
        });
    }
  }
};
</script>
