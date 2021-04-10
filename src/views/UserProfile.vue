<template>

  <table class="table table-borderless">
    <thead>
      <tr>

        <th scope="col">Image</th>
        <th scope="col">Full Name</th>
        <th scope="col">Phone</th>
        <th scope="col">CIN</th>
        <th scope="col">Address</th>
        <th scope="col">City</th>
        <th scope="col">Pro Email</th>
        <th scope="col">Employer</th>
        <th scope="col">CNSS</th>
        <th scope="col">Work Address</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{form1.image}}</td>
        <td>{{form1.name}}</td>
        <td>{{form1.phone}}</td>
        <td>{{form1.cin}}</td>
        <td>{{form1.address}}</td>
        <td>{{form1.city}}</td>
        <td>{{form2.email}}</td>
        <td>{{form2.employer}}</td>
        <td>{{form2.cnss}}</td>
        <td>{{form2.workAddress}}</td>


      </tr>


    </tbody>
  </table>

</template>


<script>
  export default {



    data() {
      return {

        form1: {},
        form2: {},

      }
    },
    mounted() {

      this.form1 = JSON.parse(localStorage.getItem('form1'))
      this.form2 = JSON.parse(localStorage.getItem('form2'))



    }

  }
</script>