<template>
  <CardList style="width: 50vw">
    <bCard title="Companies">
      <b-form>
        <b-input type="text" v-model="searchText" placeholder="Search...">
        </b-input>
      </b-form>
    </bCard>
    <template v-if="searchText">
      <CompanyCard v-for="(company, index) in searchResults" v-bind:index="index" v-bind:key="index" v-bind:company="company"></CompanyCard>
    </template>
    <template v-if="!searchText">
      <CompanyCard v-for="(company, index) in localStorage.companyList" v-bind:index="index" v-bind:key="index" v-bind:company="company"></CompanyCard>
    </template>
  </CardList>
</template>

<script>

import CardList from './CardList'
import CompanyCard from './CompanyCard'

export default {
  name: 'CompanyCardList',
  components: {CompanyCard, CardList},
  data: function () {
    return {
      searchText: ''
    }
  },
  computed: {
    searchResults: function () {
      let searchExp = RegExp(this.searchText.normalize('NFD').replace(/[\u0300-\u036f]/g, ''), 'i')
      let results = []
      for (let company of JSON.parse(localStorage.companyList)) {
        for (let k in company) {
          if (company.hasOwnProperty(k)) {
            if (searchExp.test(company[k].normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
              results.push(company)
              break
            }
          }
        }
      }
      return results
    }
  }
}
</script>

<style scoped>
bCard{
  margin: 1vh 0;
}
</style>
