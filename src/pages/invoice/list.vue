<template>
  <card-component>
    <template #card-header>
      <span class="list-title">{{ $t('invoices.title') }}</span>
      <button class="btn btn-sm btn-primary float-end" @click="createInvoice">{{ $t('invoices.buttons.create') }}</button>
    </template>

    <template #card-body>
      <data-table :headers="headers" :visible-columns="invoicesOptions">
        <template #[`item.name`]="{ item }">
          <a href="#" style="cursor: pointer" @click="editInvoice(item.id)">{{ item.name }}</a>
        </template>

        <template #[`item.actions`]="{ item }">
          <div :id="item.id">
            <div>
              <i
                  class="fas fa-pen me-1"
                  aria-hidden="true"
                  style="cursor: pointer; color: #53866e"
                  @click="editInvoice(item.id)"
                  data-bs-toggle="tooltip"
                  :data-bs-title="$t('invoices.buttons.edit')"
              />
              <i
                  v-if="showDeleteIcon"
                  class="fas fa-trash-alt"
                  style="cursor: pointer; color: #dc3545"
                  aria-hidden="true"
                  @click="showDeleteIcon = false"
                  data-bs-toggle="tooltip"
                  :data-bs-title="$t('invoices.buttons.delete')"
              />
              <i
                  v-if="!showDeleteIcon"
                  class="fas fa-times me-1"
                  style="cursor: pointer; color: #a19e9e"
                  @click="showDeleteIcon = true"
                  data-bs-toggle="tooltip"
                  :data-bs-title="$t('invoices.buttons.no')"
              />
              <i
                  v-if="!showDeleteIcon"
                  class="fas fa-check"
                  style="cursor: pointer; color: #dc3545"
                  @click="deleteInvoice(item.id)"
                  data-bs-toggle="tooltip"
                  :data-bs-title="$t('invoices.buttons.yes')"
              />
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

  data: (self = this) => ({
    invoicesOptions: [],
    headers: [
      { text: self.$t('invoices.forms.name'), value: 'name', },
      { text: self.$t('invoices.forms.email'), value: 'email', },
      { text: self.$t('invoices.forms.address'), value: 'address', },
      { text: '', value: 'actions', width: 150 }
    ],
    showDeleteIcon: true
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    async fetch() {
      const response = await axios.get('invoices');
      this.invoicesOptions = response.data;
    },

    createInvoice() {
      this.$router.push({ name: 'invoice.create' });
    },

    editInvoice(id) {
      this.$router.push({ name: 'invoice.edit', params: { invoice_id: id } });
    },

    async deleteInvoice(item) {
      try {
        await axios.delete('invoices/' + item);
        this.fetch()
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>