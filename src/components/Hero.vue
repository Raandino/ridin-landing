<template>
 <section class=" pt-24 h-[85dvh] flex px-12 blob">
    <main class=" flex justify-center flex-col items-start gap-10">
      <h1 class="text-2xl lg:text-7xl">
        Te recomendamos
        <strong class=" font-bold">
          el vehículo ideal
        </strong> 
         para <span>ti</span>
      </h1>
      <h3>Analizamos toda la web por ti.</h3>
      <Button text="¡Hablemos ahora mismo!"/>
    </main>
   
 </section>
</template>

<script setup lang="ts">
  import Button from "./Button.vue"
</script>

<style scoped >
.blob{
  background-image: 
  url(/src/assets/decoration/phone.png),
  url(/src/assets/decoration/hero_elements.png);
    background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .blob{
    background-image: none;
}}

@media (min-width: 768px) {
  .blob{
    background-position-x: 
        900px,
        700px;
        background-position-y: 
        100px,
        -150px;

  }
}

    @media (min-width: 1024px) {
      .blob{
        background-position-x: 
        600px,
        500px;
        background-position-y: 
        70px,
        -150px;

  }

      
    }
    @media (min-width: 1440px) {
      .blob{
        background-position-x: 
        900px,
        700px;
        background-position-y: 
        100px,
        -150px;
      }
    }
    @media (min-width: 1920px) {
      .blob{
        background-position-x: 
        1900px,
        1700px;
        background-position-y: 
        100px,
        -150px;
      }
    }
   


</style>
