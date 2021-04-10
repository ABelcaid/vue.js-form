<template>
  <h2>Personal Information</h2>

  <form @submit.prevent="handelSubmit">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="form1.name"
        placeholder="Full Name "
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        v-model="form1.phone"
        placeholder="Phone"
      />
    </div>

    <div class="form-group">
      <label for="cin">CIN</label>
      <input
        type="text"
        class="form-control"
        id="cin"
        v-model="form1.cin"
        placeholder="CIN"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <input
        type="text"
        class="form-control"
        id="image"
        v-model="form1.image"
        placeholder="image"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        v-model="form1.address"
        placeholder="Address"
      />
    </div>

    <div class="form-group">
      <label for="city">City</label>
      <input
        type="text"
        class="form-control"
        id="city"
        v-model="form1.city"
        placeholder="City"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

      form1: {

      name: "",
      phone: "",
      cin: "",
      image: "",
      address: "",
      city: "",

      }

     
    };
  },
  methods : {
    handelSubmit(){

       localStorage.setItem('form1',JSON.stringify(this.form1));
       redirect('/ProInfo')
    }
  }
};
</script>
