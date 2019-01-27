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
          <input id="companyAddressTextInput"
                        type="text"
                        required
                 placeholder="32 Main Street, Grand Rapids - MI">
        </b-form-group>
        <b-button type="submit" style="float: right">Add</b-button>
      </bForm>
    </bCard>
</template>

<script>

import places from 'places.js'

export default {
  name: 'NewCompanyCard',
  data: function () {
    return {
      newCompany: {
        name: '',
        address: '',
        street: '',
        state: '',
        city: '',
        country: ''

      }
    }
  },
  methods: {
    registerCompany: function (company) {
      this.localStorage.companyList.push({name: company.name, address: company.address, city: company.city, country: company.country, state: company.state, street: company.street, zip: company.zip})
    }
  },
  mounted: function () {
    let placesjs = places({
      appId: 'plI9SCW4RGVT',
      apiKey: '540a8787ed822ebca5664a9885894af3',
      container: document.getElementById('companyAddressTextInput')
    })

    placesjs.on('change', e => {
      let result = e.suggestion

      this.newCompany.address = result.value
      this.newCompany.city = result.city
      this.newCompany.country = result.country
      this.newCompany.state = result.administrative
      this.newCompany.street = result.name
      this.newCompany.zip = result.postcode
    })
  }
}
</script>

<style scoped>

</style>
