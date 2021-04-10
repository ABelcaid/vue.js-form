<template>
<h2>Professionnelles Informations </h2>

  <form @submit.prevent="handelSubmit">

    <div class="form-group">
        <label for="email">PRO Email</label>
        <input type="text" class="form-control" id="email"  placeholder="Email"  v-model="form2.email">
        
      </div>

      <div class="form-group">
        <label for="employer">Employer</label>
        <input type="text" class="form-control" id="employer" placeholder="employer"  v-model="form2.employer">
      </div>

        <div class="form-group">
        <label for="cnss">CNSS</label>
        <input type="text" class="form-control" id="cnss" placeholder="cnss"  v-model="form2.cnss">
      </div>

        <div class="form-group">
        <label for="work-address">Work Address</label>
        <input type="text" class="form-control" id="work-address" placeholder="Work Address"  v-model="form2.workAddress">
      </div>



      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" placeholder="City"  v-model="form2.city">
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ProInfoForm",
  data() {
    return {

      form2: {

      email: "",
      employer: "",
      cnss: "",
      workAddress: "",
      city: "",

      }

     
    };
  },
  methods : {
    handelSubmit(){

       localStorage.setItem('form2',JSON.stringify(this.form2))
    }
  }
};
</script>
