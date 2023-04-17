<template>
  <a :href="link" target="_blank">
    <button type="submit"
     @click="handleSubmit"
     class="bg-red-200 inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-black hover:bg-white ease-in duration-300  lg:px-8 xl:px-10">
      Записаться</button></a>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const link = '/eror'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

function handleSubmit() {
  console.log('Данные формы:', formData.value);
  // Ваша логика обработки отправки формы
}
</script> 