<template>
    <button 
    class=" w-fit rounded-[10px] bg-primary p-5 text-neutral ">
        {{ text }}
    </button>
</template>

<script setup lang="ts">

defineProps<{ text: string }>()

</script>
