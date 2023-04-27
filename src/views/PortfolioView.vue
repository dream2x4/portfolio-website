<template>
<div class="nav-sub" id="top"></div>
  <div class="portfolio-title-container">
    <div class="portfolio-title">MY PORTFOLIO</div>
    <div class="filter-box d-flex justify-content-start">
        <button type="button" class="filter-btn UX" @click="$event => changeCategory('UX')" value="UX">UX</button>
        <button type="button" class="filter-btn Video" @click="$event => changeCategory('Video')" value="Video">Video</button>
        <button type="button" class="filter-btn Branding" @click="$event => changeCategory('Branding')" value="Branding">Branding</button>
        <button type="button" class="filter-btn Web" @click="$event => changeCategory('Web')" value="Web">Web</button>
        <button type="button" class="filter-btn All" @click="$event => changeCategory('All')">All</button>
      </div>
  </div>
  <div class="portfolio-container d-flex justify-content-center">
    <div class="portfolio">
        <!-- {{ state }} -->
        <div class="portfolio-item-container">
        <div v-for="item in state " :key="item" class="portfolio-item">
            <RouterLink :to ="{name: 'portfoliodetails', params:{id: item.id}}" class="portfolio-box">
              <img :src="item.image" alt="" class="portfolio-img">
              <p class="p-category" :class="item.category">{{ item.category }}</p>
              <h2>{{ item.title }}</h2>
            </RouterLink>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import portfoliodb from '../modules/portfoliodb'

const isActive = ref(true)

let { state } = portfoliodb()
const originalState = state.value;

var selector

  function changeCategory(category) {
    if(category != "All"){
      selector = category
      state.value = originalState.filter(filterFunc)
    } else{
      console.log("ye")
      state.value = originalState
    }
  }

  var filterFunc = (item) => {
    var category = item.category;

    if(category === selector) {
      return true;
    } else {
      return false;
    };
  };



</script>

<style scoped>

.portfolio-title-container {
  padding-top: 6rem;
  background-color: var(--vt-c-grey);
}

.portfolio-container {
  margin: 0 4rem;
}

.portfolio {
  padding: 4rem 0 6rem 0;
  width: 100%;
}

.portfolio-item-container {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
}

.portfolio-box {
  background-color: #0e0e0e;
}

.filter-box {
  flex-wrap: wrap;
}

.filter-btn {
  border: none var(--vt-c-white-soft);
  background-color: transparent;
  font-family: 'GlacialIndifference-Bold';
  color: var(--vt-c-white-soft);
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
  margin-top: 2rem;
}

.filter-box :first-child {
  margin-left: 4rem;
}

.filter-btn:hover {
  color: var(--vt-c-purple);
  border-color: var(--vt-c-purple);
  background-color: var(--vt-c-white-soft);
}

.portfolio-item {
    padding: 0;
    display: flex;
    flex-direction: column;
    transition: 0.1s;
    width: 20%;
    padding: 6px;
}

.portfolio-item:hover {
  scale: 1.05;
}

h2 {
  font-size: 2rem;
  padding: 0 0.4rem 0.8rem 0.4rem;
  margin: 0;
  font-family: 'GlacialIndifference-Bold';
}

.p-category {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.4rem 0.4rem 0 0.4rem;
} 

.portfolio-img{
  width: 100%;
  height: auto;
}

.All {
  color: 	#DC143C;
  border-left: 1px solid 	#DC143C;
}

.UX {
  color: #0096FF;
  border-left: 1px solid #0096ff;
}

.Video {
    color: #3fc914;
    border-left: 1px solid #3fc914;
}

.Branding {
  color: #fced23;
  border-left: 1px solid #fced23;
}

.Web {
    color: #FFAC1C;
    border-left: 1px solid #FFAC1C;
}

@media (hover: hover) {
  a:hover {
    color: var(--vt-c-white-soft);
  }
}

@media (max-width: 992px){
  .portfolio {
    padding: 2rem 0 6rem 0;
  }

  .portfolio-item {
    width: 50%;
    padding: 12px;
  }
}

@media (max-width: 576px){

.portfolio-container {
  margin: 0 2rem;
}

h2 {
  font-size: 1.33rem;
  padding-bottom: 0.53rem;
}

.filter-btn {
  font-size: 0.8rem;
}

.filter-btn:first-child {
  margin-left: 2rem;
}

.filter-box {
  justify-content: center;
}

.p-category {
  font-size: 10.67px;
}

  .portfolio-title-container{
    padding-top: 4rem;
  }


  .portfolio-title{
    font-size: 1.5rem;
    margin-left: 2rem;
  }
}
</style>