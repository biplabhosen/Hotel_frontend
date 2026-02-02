<template>
    <div>
        <h2> Edit Customer Page </h2>  
        <form @submit.prevent="updateCustomer">
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
            <button type="submit">Update Customer</button>
        </form> 
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, onMounted, ref } from 'vue'; 
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

   const customer = ref({
    name: '',
    email: '',
    phone: '',
    address: ''
   });

   const customerId = route.params.id;


   const fetchCustomer=()=>{
    axios.get(`http://localhost:8000/api/customers/${customerId}`)
      .then(response => {
        customer.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
      });
   };

   const updateCustomer=()=>{
    const id = route.params.id;
    axios.put(`http://localhost:8000/api/customers/${id}`, customer.value)
      .then(response => {
        console.log('Customer updated:', response.data);
        // Redirect to customer list page
        router.push('/customer');
      })
      .catch(error => {
        console.error('Error updating customer:', error);
      });
   };

   onMounted(()=>{
    fetchCustomer();
   });
</script>

<style  scoped>

</style>