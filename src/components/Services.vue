<template>
    <section class=" flex p-24 flex-col ">
       <h3 class="text-secondary text-center text-5xl font-medium">
        Tu asistente personal en la elección de tu <br> vehículo
       </h3>
       <ul class=" mt-20 flex flex-wrap justify-start gap-10">

        <article class="bg-neutral shadow-md w-[300px] rounded-lg p-4">
            <div class="grid w-16 h-16 place-content-center bg-[#FFDED4]">
                <img class="" src="../assets/services_robot.svg" alt="">
            </div>
            <h4 class="text-secondary">
                Asesor de compra personalizado 
            </h4>
            <p class="text-gray-500">
                Nuestro asesor será tu mejor aliado en entender tu caso particular y deseos de compra
            </p>
        </article>
        <article class="bg-neutral shadow-md w-[300px] rounded-lg p-4">
            <div class="grid w-16 h-16 place-content-center bg-[#FFEED4]">
                <img class="" src="../assets/services_robot.svg" alt="">
            </div>
            <h4 class="text-secondary">
                Múltiples Sitios de Compra 
            </h4>
            <p class="text-gray-500">
                Todos los vehículos del mercado en un sólo lugar.
            </p>
        </article>
        <article class="bg-neutral shadow-md w-[300px] rounded-lg p-4">
            <div class="grid w-16 h-16 place-content-center bg-[#D4F0FF]">
                <img class="" src="../assets/services_robot.svg" alt="">
            </div>
            <h4 class="text-secondary">
                Rápido y Confiable 
            </h4>
            <p class="text-gray-500">
                Obtén tu recomendación de marca y modelo en minutos. En menos de 24 horas, te recomendamos donde comprarlo
            </p>
        </article>

       </ul>
    </section>
   </template>
   
   <script setup lang="ts">

   </script>
   
   <style scoped>
   section{
    background-image: url(../assets//services_bg.png);
    background-repeat: no-repeat;
    background-position: left;
   }
</style>
