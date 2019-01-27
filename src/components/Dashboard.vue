<template>
    <div>
      <TitleBar style="height: 15vh"></TitleBar>
      <div style="display: flex; height: 85vh">
        <CardList style="flex: 1">
          <NewCompanyCard></NewCompanyCard>
          <ReportCard></ReportCard>
        </CardList>
        <CompanyCardList style="flex: 1"></CompanyCardList>
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
