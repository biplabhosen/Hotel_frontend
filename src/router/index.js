import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import Customer from "../pages/customer/Customer.vue";
import CreateCustomer from "../pages/customer/CreateCustomer.vue";
import EditCustomer from "../pages/customer/EditCustomer.vue";


const routes = [
    {path:'/', Component:Dashboard},
    {path:'/role', component:RoleList},
    {path:'/role/create', component: CreateRole},
    {path:'/role/edit', component: EditRole},
    {path:'/customer', component: Customer},
    {path:'/customer/create', component: CreateCustomer},
    {path:'/customer/edit/:id', component: EditCustomer},
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})