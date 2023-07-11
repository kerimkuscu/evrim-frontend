<template>
  <card-component>
    <template #card-header>
      <span class="list-title">Invoices</span>
      <button class="btn btn-sm btn-primary float-end" @click="createInvoice">Create</button>
    </template>

    <template #card-body>
      <data-table :headers="headers" :visible-columns="invoicesOptions">
        <template #[`item.email`]="{ item }">
          <a href="#" style="cursor: pointer" @click="editInvoice(item.id)">{{ item.email }}</a>
        </template>

        <template #[`item.actions`]="{ item }">
          <div :id="item.id">
            <div>
              <i class="bi bi-pen me-1" aria-hidden="true" style="cursor: pointer; color: #53866e" @click="editInvoice(item.id)" />
              <i class="bi bi-trash" style="color: #dc3545; cursor: pointer" aria-hidden="true" @click="deleteInvoice(item.id)" />
            </div>
          </div>
        </template>
      </data-table>
    </template>
  </card-component>
</template>

<script>
import CardComponent from '../../components/card.vue';
import axios from 'axios';
import DataTable from '../../components/datatable.vue';

export default {
  name: 'InvoiceList',

  components: {
    CardComponent,
    DataTable
  },

  data: () => ({
    invoicesOptions: [],
    headers: [
      { text: 'Email', value: 'email' },
      { text: 'Name', value: 'full_name' },
      { text: '', value: 'actions' }
    ]
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    async fetch() {
      const response = await axios.get('http://localhost:3000/invoices');
      this.invoicesOptions = response.data;
    },

    createInvoice() {
      console.log('create')
    },

    editInvoice(item) {
      console.log(item)
    },

    deleteInvoice(item) {
      console.log(item)
    }
  }
}
</script>