<template>

  <div class="nav-sub" id="top"></div>

  <div class="contact-container">
    <img src="../assets/img/portfolio-contact.jpg" alt="" width="240px" height="240px" class="contact-info-img">
    <h1 class="contact-info-name">THANAKIT ANDERSEN</h1>
    <p class="contact-info-descr">Seeking opportunities for growth & experiences</p>
    <div class="contact-info-geo d-flex">
      <div class="geo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      </div>
      Esbjerg, Denmark
    </div>
    <div class="contact-info-mail">
      <div class="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
          <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
        </svg>
      </div>
      andersenthanakit@gmail.com
    </div>
    <div class="contact-info-phone">
      <div class="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>
      </div>
      +45 20 33 11 54
    </div>
  </div>
</template>

<style>

.contact-container {
  background-color: var(--vt-c-grey);
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/img/portfolio-contact-bg.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.contact-info-img {
  box-shadow: 0 0 1rem #0e0e0e;
}

.contact-info-img:hover {
  filter: none;
}

.contact-info-name {
  color: var(--vt-c-white-soft);
  font-size: 2.5rem;
  font-family: 'GlacialIndifference-Bold';
  margin: 0.9rem 0 0 0;
}

.contact-info-descr {
  color: var(--vt-c-grey-light);
  font-size: 1.25rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 0.5rem;
}

.contact-info-geo {
  color: var(--vt-c-grey-light);
  align-items: center;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 2rem;
}

.geo-icon{
  margin-right: 0.5rem;
}

.contact-info-mail {
  font-size: 1.25rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--vt-c-grey);
  border: 2px solid var(--vt-c-grey-light);
  border-radius: 25px;
  background-color: var(--vt-c-white-soft);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  width: 27rem;
  margin-bottom: 1rem;
}

.contact-info-phone {
  font-size: 1.25rem;
  font-family: raleway, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--vt-c-grey);
  border: 2px solid var(--vt-c-grey-light);
  border-radius: 25px;
  background-color: var(--vt-c-white-soft);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  width: 27rem;
}

.contact-icon {
  margin-right: 0.5rem;
}

@media (max-width: 576px){

  .contact-container {
    padding: 4rem 0 6rem 0;
  }

  .contact-info-name {
    font-size: 1.8rem;
  }

  .contact-info-descr {
    font-size: 0.9rem;
  }

  .contact-info-geo {
    font-size: 0.8rem;
  }

  .contact-info-mail {
    font-size: 0.9rem;
    width: 19rem;
  }

  .contact-info-phone {
    font-size: 0.9rem;
    width: 19rem;
  }
}

</style>
