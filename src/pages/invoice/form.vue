<template>
  <card-component>
    <template #card-header>
      <span class="list-title">Create Invoice</span>
      <button class="btn btn-sm btn-primary float-end" @click="createInvoice">Create</button>
      <button class="btn btn-sm btn-primary float-end" @click="cancelInvoice">Cancel</button>
    </template>

    <template #card-body>
      <form @submit.prevent="createInvoice">
        <div class="col-12">
          <div class="row">
            <div class="col-6">
              <span class="list-title">Bill From</span>
              <div class="col-12">
                <label for="billFromAddress" class="form-label">Address</label>
                <textarea class="form-control" placeholder="Street Address " id="billFromAddress" v-model="billFrom.address" />
              </div>
              <div class="row">
                <div class="col-4">
                  <label for="billFromCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="billFromCity" placeholder="City" v-model="billFrom.city">
                </div>
                <div class="col-4">
                  <label for="billFromZipCode" class="form-label">Zip Code</label>
                  <input type="text" class="form-control" id="billFromZipCode" placeholder="ZipCode" v-model="billFrom.zip_code">
                </div>
                <div class="col-4">
                  <label for="billFromCountry" class="form-label">Country</label>
                  <input type="text" class="form-control" id="billFromCountry" placeholder="Country" v-model="billFrom.country">
                </div>
              </div>
            </div>
            <div class="col-6">
              <span class="list-title">Bill To</span>
              <div class="row">
                <div class="col-6">
                  <label for="billToName" class="form-label">Client's Name</label>
                  <input type="text" class="form-control" id="billToName" placeholder="City" v-model="billTo.name">
                </div>
                <div class="col-6">
                  <label for="billToEmail" class="form-label">Client's Email</label>
                  <input type="text" class="form-control" id="billToEmail" placeholder="ZipCode" v-model="billTo.email">
                </div>
              </div>
              <div class="col-12">
                <label for="billToAddress" class="form-label">Address</label>
                <textarea class="form-control" placeholder="Street Address " id="billToAddress" v-model="billTo.address" />
              </div>
              <div class="row">
                <div class="col-4">
                  <label for="billToCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="billToCity" placeholder="City" v-model="billTo.city">
                </div>
                <div class="col-4">
                  <label for="billToZipCode" class="form-label">Zip Code</label>
                  <input type="text" class="form-control" id="billToZipCode" placeholder="ZipCode" v-model="billTo.zip_code">
                </div>
                <div class="col-4">
                  <label for="billToCountry" class="form-label">Country</label>
                  <input type="text" class="form-control" id="billToCountry" placeholder="Country" v-model="billTo.country">
                </div>
              </div>
              <div class="col-12">
                <label for="billToInvoiceDate" class="form-label">Invoice Date</label>
                <input type="text" class="form-control" id="billToInvoiceDate" disabled v-model="billTo.invoice_date">
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <span class="list-title">Items</span>
          <div class="row">
            <div class="col-3">
              <label for="itemName" class="form-label">Item Name</label>
              <input type="text" class="form-control" id="itemName" placeholder="Item Name" v-model="items.name">
            </div>
            <div class="col-3">
              <label for="itemQty" class="form-label">Item Qty</label>
              <input type="number" class="form-control" id="itemQty" placeholder="Item Name" v-model="items.qty">
            </div>
            <div class="col-3">
              <label for="itemPrice" class="form-label">Item Price</label>
              <input type="number" class="form-control" id="itemPrice" placeholder="Item Name" v-model="items.price">
            </div>
            <div class="col-3">
              <label class="form-label">Item Total</label>
            </div>
          </div>
        </div>
      </form>
    </template>
  </card-component>
</template>

<script>
import axios from 'axios';
import CardComponent from '../../components/card.vue';

export default {
  name: 'InvoiceForm',

  components: {
    CardComponent
  },

  data: () => ({
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

    items: []
  }),

  methods: {
    async createInvoice() {
      const params = {

      }
      await axios.post('http://localhost:3000/invoices', params);
    },

    cancelInvoice() {
      this.$router.push({ name: 'invoice' });
    },
  }
}
</script>