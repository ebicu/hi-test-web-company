<template>
  <bCard :title="company.name" style="margin: 2vh 2vw; text-align: left">
    <template v-if="!editing">
      <p>{{company.address}}</p>
      <b-button variant="secondary" style="float: right; margin: 0 1vw" @click="toggleEdit">Edit</b-button>
      <b-button variant="danger" style="float: right" @click="removeCompany">Remove</b-button>
    </template>
    <template v-if="editing">
      <b-input v-model="localStorage.companyList[index].name"  type="text"></b-input>
      <b-input v-model="localStorage.companyList[index].address" type="text" :id="'editAddressInput' + index"></b-input>
      <b-button variant="secondary" style="float: right; margin: 0 1vw" @click="toggleEdit">Save</b-button>
    </template>
  </bCard>
</template>

<script>

export default {

  name: 'CompanyCard',
  props: ['company', 'index'],
  data: function () {
    return {
      editing: false
    }
  },
  methods: {
    removeCompany: function (index) {
      this.localStorage.companyList.splice(index, 1)
    },
    toggleEdit: function () {
      this.editing = !this.editing
    }
  }
}
</script>

<style scoped>
p{
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
