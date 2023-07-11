<template>
  <table v-if="visibleColumns.length >= 1" id="example" class="display table table-striped table-hover" style="width:100%">
    <thead>
    <tr>
      <th v-for="header in headers" :key="header.value" :class="getClassList" scope="col">
        {{ header.text }}
      </th>
    </tr>
    </thead>
    <tbody>
    <slot v-for="(item, index) in visibleColumns" name="item" :item="item">
      <tr :key="index">
        <td v-for="header in headers" :key="header.value" :class="getCellClassList">
          <slot :name="'item.' + header.value" :item="item">
            <span data-bs-toggle="tooltip" :title="item[header.value]">{{ item[header.value] }}</span>
          </slot>
        </td>
      </tr>
    </slot>
    </tbody>
  </table>

  <div v-else class="alert alert-warning" role="alert">
    No data found
  </div>
</template>

<script>

export default {
  name: 'DataTable',

  props: {
    dataOptions: {
      type: Array,
      default:() => ([]),
    },

    visibleColumns: {
      type: Object,
      default: () => ({}),
    },

    headers: {
      type: Array,
      default:() => ([]),
    },

    getClassList: {
      type: Function,
      default: () => ''
    },

    getCellClassList: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped>

td{
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
