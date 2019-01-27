<template>
  <CardList>
    <CompanyCard v-for="company in companies" v-bind:key="company.id" v-bind:company="company"></CompanyCard>
  </CardList>
</template>

<script>
import CardList from './CardList'
import CompanyCard from './CompanyCard'
export default {
  name: 'CompanyCardList',
  components: {CompanyCard, CardList}
}
</script>

<style scoped>

</style>
