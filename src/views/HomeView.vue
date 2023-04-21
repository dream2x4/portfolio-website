<script setup>
</script>

<template>

  <div class="hero col-12" id="top">
  </div>

  <div class="about-me">
    <div class="row col-12 d-flex justify-content-center">
      <div class="about-me-container-left col-4">
        <div class="about-me-img">
          <img src="../assets/img/portfolio-about.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <div class="about-me-container-right col-12 col-lg-6">
        <div class="about-me-title">ABOUT ME</div>
        <div class="about-me-descr-box">
          <p class="info light-grey">Hi, my name is Thanakit Andersen & I'm a dedicated multimedia designer. My passion & aspiration for what I do is what drives me to create art.</p>
          <p class="info light-grey">Business Academy Southwest Denmark, Content Creator, UX Designer & Web Developer.</p>
          <p class="info-bold">Skills</p>
          <div class="upper-skill-container d-flex">
            <p class="skill">Photo/Video Editing</p>
            <p class="skill">Digital Design</p>
            <p class="skill">Digital Illustration</p>
            <p class="skill">Concept Design</p>
            <p class="skill">UX & UI Design</p>
            <p class="skill">Web Development</p>
            <p class="skill">Storyboard Artist</p>
          </div>
          <div class="lower-skill-container d-flex">
          </div>
        </div>
      
        <a class="link-cv" href="https://onedrive.live.com/?cid=38F91BE5CA5DA4A9&id=38F91BE5CA5DA4A9%21514&parId=38F91BE5CA5DA4A9%21495&o=OneUp">DOWNLOAD CV</a>

      </div>

    </div>
    <div class="row col-12 d-flex justify-content-center">
      <div class="video-cv col-12">
        <div class="video-cv-title">VIDEO CV</div>
        <div class="video-cv-container">
          <div class="video-cv-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Mw24LCMBevc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <main>
    Welcome!
    <div :class=" { active: isActive }">Test</div>
  </main> -->

</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>


<style scoped>

.hero {
  height: 100vh;
  background-color: #0e0e0e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../assets/img/portfolio-hero.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  filter: grayscale(100%) contrast(110%);
  transition: 0.4s;
}

.about-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--vt-c-grey);

  box-shadow: 0 0 4rem #0e0e0e;
}

.about-me-container-left {
  padding: 5.7rem 0rem 5.7rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.about-me-img{
  box-shadow: 0 0 2rem #000000;
}

.about-me-container-right {
  height: 100%;
  padding: 9.7rem 0 10.7rem 0;
}

.about-me-title {
  color: var(--vt-c-white-soft);
  border-left: 2px solid var(--vt-c-white-soft);
  margin-left: 4rem;
  font-size: 2rem;
  font-family: 'GlacialIndifference-Bold';
}

.about-me-descr-box {
  padding: 0 4rem 0 4rem;
  margin: 2rem 0 2.7rem 0;
}

.upper-skill-container {
  display:flex;
  flex-wrap:wrap
 /*  justify-content: space-between; */
}

.skill {
  padding:0 10px 0 0;
  font-size: 1rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--vt-c-grey-light);
  transition: 0.4;
  margin-bottom: 1rem;
  padding-right: 1rem;
}

.light-grey {
  color: var(--vt-c-grey-light);
}

.link-cv {
  color: var(--vt-c-grey);
  background-color: var(--vt-c-white-soft);
  font-family: 'GlacialIndifference-Bold';
  font-size: 1rem;
  padding: 1rem 2rem;
  margin: 0 4rem;
}

.link-cv:hover{
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-purple);
}

.video-cv-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.video-cv {
  padding: 0 0 6rem 0;
  display: flex;
  flex-direction: column;
}

.video-cv-title {
  color: var(--vt-c-white-soft);
  border-left: 2px solid var(--vt-c-white-soft);
  margin: 0 0 5.7rem 4rem;
  font-size: 2rem;
  font-family: 'GlacialIndifference-Bold';
}

.video-cv-video {
  width: 885.33px;
  height: 498px;
  box-shadow: 0 0 2rem #0e0e0e;
  transition: 0.4s;
}

main {
  width: 100%;
}

@media (max-width: 1200px) {
  .hero {
    height: 50vh;
  }

  .about-me-container-right {
    padding: 4rem 0 4.7rem 0;
  }

  .video-cv-title {
    margin: 0 0 2.87rem 4;
  }

}

@media (max-width: 992px) {
  .about-me-container-left {
    display: none;
  }

  .video-cv-video {
    width: 593px;
    height: 333.56px;
   }
}

@media (max-width: 720px){
  .video-cv-video {
    width: 443px;
  height: 249.19px;
  }

}

@media (max-width: 576px){

  .hero {
    height: 25vh;
  }

  .about-me-title {
    font-size: 1.5rem;
    margin-left: 2rem;
  }

  .about-me-descr-box {
    padding: 0 2rem;
  }

  .skill {
    font-size: 0.8rem;
  }

  .link-cv {
    font-size: 0.8rem;
    margin-left: 2rem;
  }

  .video-cv-title {
    margin: 0 0 2rem 2rem;
    font-size: 1.5rem;
  }
  .video-cv-video {
    width: 295.1px;
  height: 165.94px;
  }
}
</style> 