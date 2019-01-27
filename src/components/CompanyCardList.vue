<template>
  <CardList style="width: 50vw">
    <bCard title="Companies"></bCard>
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
bCard{
  margin: 1vh 0;
}
</style>
