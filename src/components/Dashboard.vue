<template>
    <div >
      <TitleBar style="height: 10vh; position: fixed; width: 100vw; top: 0; z-index: 1"></TitleBar>
      <div style="display: flex; height: 90vh; margin-top: 10vh">
        <CardList style="flex: 1; margin: 5vh 2vw 0 2vw; max-width: 50vw">
          <NewCompanyCard></NewCompanyCard>
          <ReportCard></ReportCard>
        </CardList>
        <CompanyCardList style="flex: 1; margin: 5vh 2vw 0 2vw; max-width: 50vw; overflow-scrolling: auto"></CompanyCardList>
      </div>
    </div>
</template>

<script>
import TitleBar from './TitleBar'
import CardList from './CardList'
import CompanyCardList from './CompanyCardList'
import NewCompanyCard from './NewCompanyCard'
import ReportCard from './ReportCard'
export default {
  name: 'Dashboard',
  components: {ReportCard, NewCompanyCard, CompanyCardList, CardList, TitleBar}
}
</script>

<style scoped>

</style>
