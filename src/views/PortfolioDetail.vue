<template>
    <div class="nav-sub" id="top"></div>
    <div class="container-p-detail">
      <div class="portfolio-detail-container d-flex justify-content-center">
        <div class="inner-portfolio-detail-left col-10 col-lg-6">
          <img :src="portfolioDetails.cover" alt="" class="p-detail-img">
        </div>
        <div class="inner-portfolio-detail-right col-12 col-lg-5">
          <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
          <h2 class="portfolio-title">{{ portfolioDetails.title }}</h2>
          <p class="info">{{ portfolioDetails.description }}</p>
          <p class="info i-tech">{{ portfolioDetails.tech }}</p>
          <p class="info i-team">{{ portfolioDetails.teammembers }}</p>
          <a :href="portfolioDetails.link" class="link-portfolio">SEE MORE</a>
        </div>
      </div>
    </div>
    <div class="back-button d-flex align-items-center">
        <button class="button" @click="goBack()">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="15.rem" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg> 
          Go back
        </button>

    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb'
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const { state } = portfoliodb()

const props = defineProps({
    id: String
})

const { id } = toRefs(props)

const portfolioDetails = computed(
    () => {
       return state.value.find(item => item.id == id.value)
    }
)

</script>


<style scoped>

.container-p-detail{
  background-color: var(--vt-c-grey);
}

.portfolio-item-container {
    display: flex;
    justify-content: center;
    background-color: var(--vt-c-grey);
}

.p-category {
    font-weight: 700;
    text-transform: uppercase;
}

.inner-portfolio-detail-left {
  margin: 6rem 0;
}

.inner-portfolio-detail-right {
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
}

.portfolio-title {
  margin: 0 0 0 2rem;
  border: 0;
}

p {
  margin: 2rem  0 2rem 2rem;
}

.p-category {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.4rem 0.4rem 0 0.4rem;
    margin-left: 2rem;
    margin-top: 6rem;
}

.p-detail-img {
  width: 100%;
  height: auto;
}

.i-tech {
  margin-bottom: 2rem;
  margin-top: 0;
}

.i-team {
  margin-top: 0;
  margin-bottom: 2.4rem;
}

.link-portfolio {
  color: var(--vt-c-grey);
  background-color: var(--vt-c-white-soft);
  font-family: 'GlacialIndifference-Bold';
  font-size: 1rem;
  width: fit-content;
  padding: 1rem 4rem;
  margin: 0 0 0 2rem;
}

.link-portfolio:hover{
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-purple);
}

.back-button {
  background-color: var(--vt-c-grey);
  padding-bottom: 6rem;
  margin-left: 4rem;
  
  font-size: 1rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;

  border-color: none !important;
}

.button {
  border: none;
  background-color: transparent;
  color: var(--vt-c-white-soft);
}

.footer-text {
  font-size: 1rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  width: 10rem;
}

@media (max-width: 992px) {
  .portfolio-detail-container {
    flex-direction: column;
    align-items: center;
  }

  .portfolio-title {
    margin: 0 0 2rem 4rem;
  }

  .inner-portfolio-detail-left {
    margin-bottom: 2rem;
  }

  .inner-portfolio-detail-right {
    padding-bottom: 6rem;
  }

  p {
    margin: 0 4rem;
  }

  .p-category {
    margin-left: 4rem;
    margin-top: 0;
  }

  .i-tech {
    margin-top: 2rem;
  }

  .link-portfolio {
    margin: 0 4rem;
  }
}

@media (max-width: 576px) {

  .portfolio-title {
    margin-top: 0;
    margin-left: 2rem;
  }

  .inner-portfolio-detail-left {
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  .inner-portfolio-detail-right {
    padding-bottom: 6rem;
  }

  p {
    margin-left: 2rem;
  }

  .p-category {
    font-size: 10.67px;
    margin-left: 2rem;
}

  .link-portfolio {
    margin-left: 2rem;
    font-size: 0.8rem;
  }

  .back-button {
  margin-left: 2rem;
}

.button {
  font-size: 0.8rem;
}

}
</style>