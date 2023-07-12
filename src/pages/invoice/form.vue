<template>
  <card-component>
    <template #card-header>
      <span class="list-title">{{ $t('invoices.forms.title') }}</span>
      <button class="btn btn-sm btn-primary float-end" @click="submit">{{ $t('invoices.buttons.create') }}</button>
      <button class="btn btn-sm btn-outline-secondary me-1 float-end" @click="cancelInvoice">{{ $t('invoices.buttons.cancel') }}</button>
    </template>

    <template #card-body>
      <form @submit.prevent="submit">
        <div class="col-12">
          <div class="row">
            <div class="col-6">
              <span class="list-title">{{ $t('invoices.forms.titles.bill_from') }}</span>
              <div class="col-12">
                <label for="billFromAddress" class="form-label">{{ $t('invoices.forms.address') }}</label>
                <textarea class="form-control" placeholder="Street Address " id="billFromAddress" v-model="billFrom.address" />
              </div>
              <div class="row">
                <div class="col-4">
                  <label for="billFromCity" class="form-label">{{ $t('invoices.forms.city') }}</label>
                  <input type="text" class="form-control" id="billFromCity" placeholder="City" v-model="billFrom.city">
                </div>
                <div class="col-4">
                  <label for="billFromZipCode" class="form-label">{{ $t('invoices.forms.zip_code') }}</label>
                  <input type="text" class="form-control" id="billFromZipCode" placeholder="ZipCode" v-model="billFrom.zip_code">
                </div>
                <div class="col-4">
                  <label for="billFromCountry" class="form-label">{{ $t('invoices.forms.country') }}</label>
                  <input type="text" class="form-control" id="billFromCountry" placeholder="Country" v-model="billFrom.country">
                </div>
              </div>
            </div>
            <div class="col-6">
              <span class="list-title">{{ $t('invoices.forms.titles.bill_to') }}</span>
              <div class="row">
                <div class="col-6">
                  <label for="billToName" class="form-label">{{ $t('invoices.forms.name') }}</label>
                  <input type="text" class="form-control" id="billToName" placeholder="Client's Name" v-model="billTo.name">
                </div>
                <div class="col-6">
                  <label for="billToEmail" class="form-label">{{ $t('invoices.forms.email') }}</label>
                  <input type="email" class="form-control" id="billToEmail" placeholder="Client's Email" v-model="billTo.email">
                </div>
              </div>
              <div class="col-12">
                <label for="billToAddress" class="form-label">{{ $t('invoices.forms.address') }}</label>
                <textarea class="form-control" placeholder="Street Address " id="billToAddress" v-model="billTo.address" />
              </div>
              <div class="row">
                <div class="col-4">
                  <label for="billToCity" class="form-label">{{ $t('invoices.forms.city') }}</label>
                  <input type="text" class="form-control" id="billToCity" placeholder="City" v-model="billTo.city">
                </div>
                <div class="col-4">
                  <label for="billToZipCode" class="form-label">{{ $t('invoices.forms.zip_code') }}</label>
                  <input type="text" class="form-control" id="billToZipCode" placeholder="ZipCode" v-model="billTo.zip_code">
                </div>
                <div class="col-4">
                  <label for="billToCountry" class="form-label">{{ $t('invoices.forms.country') }}</label>
                  <input type="text" class="form-control" id="billToCountry" placeholder="Country" v-model="billTo.country">
                </div>
              </div>
              <div class="col-12">
                <label for="billToInvoiceDate" class="form-label">{{ $t('invoices.forms.invoice_date') }}</label>
                <input type="text" class="form-control" id="billToInvoiceDate" disabled v-model="billTo.invoice_date">
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <span class="list-title">{{ $t('invoices.forms.titles.items') }}</span>
          <div class="row">
            <div class="col-3">
              <label for="itemName" class="form-label">{{ $t('invoices.forms.item_name') }}</label>
              <input
                  type="text"
                  class="form-control"
                  id="itemName"
                  placeholder="Item Name"
                  v-model="itemList.name"
                  :class="{'is-invalid' : !itemList.name}"
              >
            </div>
            <div class="col-3">
              <label for="itemQty" class="form-label">{{ $t('invoices.forms.item_qty') }}</label>
              <input type="number"
                     class="form-control"
                     id="itemQty"
                     placeholder="Item Qty"
                     v-model="itemList.qty"
                     min="0"
                     :class="{'is-invalid' : !itemList.qty}"
              >
            </div>
            <div class="col-3">
              <label for="itemPrice" class="form-label">{{ $t('invoices.forms.item_price') }}</label>
              <input
                  type="number"
                  class="form-control"
                  id="itemPrice"
                  placeholder="Item Price"
                  v-model="itemList.price"
                  :class="{'is-invalid' : !itemList.price}"
              >
            </div>
            <div class="col-3">
              <label class="form-label">{{ $t('invoices.forms.item_total') }}</label>
              <div>
                {{ itemList.price * itemList.qty }}
                <button type="button" class="btn btn-sm btn-primary float-end" @click="addItem">
                  <i class="fas fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <data-table :headers="headers" :visible-columns="items" no-data="No Items Found">

            <template #[`item.total`]="{ item }">
              {{ item.qty * item.price }}
            </template>

            <template #[`item.actions`]="{ item }">
              <div :id="item.id">
                <div>
                  <i class="far fa-trash-alt" style="color: #dc3545; cursor: pointer" aria-hidden="true" @click="deleteItem(item.name)" />
                </div>
              </div>
            </template>
          </data-table>
        </div>
      </form>
    </template>
  </card-component>
</template>

<script>
import axios from 'axios';
import CardComponent from '../../components/card.vue';
import DataTable from '../../components/datatable.vue';

export default {
  name: 'InvoiceForm',

  components: {
    DataTable,
    CardComponent
  },

  data: (self = this) => ({
    invoiceId: null,
    billFrom: {
      address: null,
      city: null,
      zip_code: null,
      country: null,
    },

    billTo: {
      name: null,
      email: null,
      address: null,
      city: null,
      zip_code: null,
      country: null,
      invoice_date: new Date().toLocaleDateString('tr-TR'),
      product_description: null
    },

    items: [],

    itemList: {
      name: null,
      qty: null,
      price: null
    },

    headers:[
      { text: self.$t('invoices.forms.item_name'), value: 'name' },
      { text: self.$t('invoices.forms.item_qty'), value: 'qty' },
      { text: self.$t('invoices.forms.item_price'), value: 'price' },
      { text: self.$t('invoices.forms.item_total'), value: 'total' },
      { text: '', value: 'actions' }
    ],
  }),

  mounted() {
    if (this.$route.params.invoice_id) {
      this.fetch();
    }
  },

  methods: {
    async fetch() {
      this.invoiceId = this.$route.params.invoice_id;
      const response = await axios.get('invoices/' + this.invoiceId);
      this.formPopulate(response);
    },

    formPopulate(data) {
      this.billFrom = data.data.billFrom;
      this.billTo = data.data.billTo;
      this.items = data.data.items;
    },

    async submit() {
      if (this.invoiceId) {
        await this.saveInvoice('put');
      } else {
        await this.saveInvoice('post');
      }
    },

    async saveInvoice(method) {
      const params = {
        billFrom: {
          address: this.billFrom.address,
          city: this.billFrom.city,
          zip_code: this.billFrom.zip_code,
          country: this.billFrom.country,
        },
        billTo: {
          name: this.billTo.name,
          email: this.billTo.email,
          address: this.billTo.address,
          city: this.billTo.city,
          zip_code: this.billTo.zip_code,
          country: this.billTo.country,
          invoice_date: this.billTo.invoice_date,
          product_description: this.billTo.product_description
        },
        items: this.items
      };

      await axios[method]('invoices', params);
      this.cancelInvoice();
    },

    cancelInvoice() {
      this.$router.push({ name: 'invoice.list' });
    },

    addItem() {
      if (this.itemList.name && this.itemList.qty && this.itemList.price) {
        this.items.push({
          name: this.itemList.name,
          qty: this.itemList.qty,
          price: this.itemList.price,
        })
        this.itemList.name = null;
        this.itemList.qty = null;
        this.itemList.price = null;
      }
    },

    deleteItem(name) {
      const index = this.items.findIndex(item => item.name === name);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
}
</script>