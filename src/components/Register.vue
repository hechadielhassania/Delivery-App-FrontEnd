<template>
  <div class="myform form ">
    <div class="logo mb-3">
      <div class="col-md-12 text-center">
        <h1>Signup</h1>
      </div>
    </div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          type="text"
          name="firstname"
          class="form-control"
          id="firstname"
          aria-describedby="emailHelp"
          placeholder="Enter Firstname"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          type="text"
          name="lastname"
          class="form-control"
          id="lastname"
          aria-describedby="emailHelp"
          placeholder="Enter Lastname"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
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
        />
      </div>
      <div class="col-md-12 text-center mb-3">
        <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">
          Get Started For Free
        </button>
      </div>
      <div class="col-md-12 ">
        <div class="form-group">
          <p class="text-center">
            <router-link class="nav-link" to="/login"
              >Already have an account?</router-link
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.myform {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
  margin: auto;
}
.tx-tfm {
  text-transform: uppercase;
}
.mybtn {
  border-radius: 50px;
}

.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.google {
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  outline: none;
  border: 1px solid lightgrey;
}
form .error {
  color: #ff0000;
}
</style>

<script>
export default {
  name: "Register"
};
</script>
