import { createRouter, createWebHistory } from 'vue-router'

import DashboardIndex from './pages/dashboard/index.vue';

import InvoiceIndex from './pages/invoice/index.vue';
import InvoiceList from './pages/invoice/list.vue';
import InvoiceForm from './pages/invoice/form.vue';

import NotFound from './pages/not-found.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: DashboardIndex
        },

        {
            path: '/invoice',
            name: 'invoice',
            component: InvoiceIndex,
            children: [
                {
                    path: 'list',
                    name: 'invoice.list',
                    component: InvoiceList,
                },

                {
                    path: 'edit/:invoice_id',
                    name: 'invoice.edit',
                    component: InvoiceForm,
                },

                {
                    path: 'create',
                    name: 'invoice.create',
                    component: InvoiceForm,
                }
            ]
        },

        { path: '/:pathMatch(.*)*', component: NotFound }
    ],
})
