<template>
    <div>
        <h2> Customer Page </h2>
        <input type="text" placeholder="Search..." v-model="searchTerm" />
        <table >
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in filteredCustomers" :key="customer.id">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.address }}</td>
                    <td>
                        <router-link :to="`/customer/edit/${customer.id}`" class="btn btn-primary">Edit</router-link>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { router } from '../../router';

    const customers = ref([]);
    const searchTerm = ref('');

    const filteredCustomers = computed(()=>{
        let q = searchTerm.value.toLocaleLowerCase();
        if (!q) {
            return customers.value;
        }

        return customers.value.filter((customer)=>{
            return customer.name.toLowerCase().includes(q) || customer.email.toLowerCase().includes(q) || customer.phone.toLowerCase().includes(q);
        })
    })

   const fetchCustomer=()=>{
    axios.get('http://127.0.0.1:8000/api/customers')
    .then(res=>{
    customers.value = res.data;
    console.log(res.data);
    
   })
   .catch(err=>{
    console.log(err)
   })
   }

   onMounted(()=>{
    fetchCustomer()
   })
   
</script>

<style  scoped>

</style>