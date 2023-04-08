<template>
<button type="submit" @click="handleSubmit" class="bg-red-200 inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-black hover:bg-white ease-in duration-300  lg:px-8 xl:px-10">Записаться</button>
</template>
<script lang="ts" setup>
function handleSubmit() {
  // Ваша логика обработки отправки формы
  console.log('Данные формы:');
}
</script>