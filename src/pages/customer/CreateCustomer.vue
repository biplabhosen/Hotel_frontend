<template>
    <div>
        <h2> Create Customer Page </h2>
        <form @submit.prevent="createCustomer">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" v-model="customer.name" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="customer.email" />
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone" v-model="customer.phone" />
            </div>
            <div>
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" v-model="customer.address" />
            </div>
            <button type="submit">Create Customer</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';


   const customer = reactive({
    name: '',
    email: '',
    phone: '',
    address: ''
   });

   const createCustomer=()=>{
    axios.post('http://localhost:8000/api/customers', customer)
      .then(response => {
        console.log('Customer created:', response.data);
        // Reset form
        customer.name = '';
        customer.email = '';
        customer.phone = '';
        customer.address = '';
      })
      .catch(error => {
        console.error('Error creating customer:', error);
      });
   };
</script>

<style scoped>

</style>