<template>
    <bCard title="New Company" style="text-align: left; padding: 1vw 2vw; margin: 1vw 2vw; margin-top: 0">
      <bForm @submit.prevent="registerCompany(newCompany)">
        <b-form-group id="companyNameGroup"
                      label="Name:"
                      label-for="companyNameTextInput">
          <b-form-input id="companyNameTextInput"
                        type="text"
                        v-model="newCompany.name"
                        required
                        placeholder="Company X">
          </b-form-input>
        </b-form-group>
        <b-form-group id="companyAddressGroup"
                      label="Address:"
                      label-for="companyNameTextInput">
          <b-form-input id="companyNameTextInput"
                        type="text"
                        v-model="newCompany.address"
                        required
                        placeholder="32 Main Street, Grand Rapids - MI">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" style="float: right">Add</b-button>
      </bForm>
    </bCard>
</template>

<script>
import LS from '../LocalStorage'

export default {
  name: 'NewCompanyCard',
  data: function () {
    return {
      newCompany: {
        name: '',
        address: ''
      }
    }
  },
  methods: {
    registerCompany: function (company) {
      let companies = LS.retrieve('companyList') || []
      companies.push(company)
      LS.store('companyList', companies)
    }
  }
}
</script>

<style scoped>

</style>
