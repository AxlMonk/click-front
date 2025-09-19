<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const selectedFile = ref(null);
const router = useRouter();
const URL = 'http://localhost:3001/catalog/file';

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0]; 
};

const uploadFile = async () => {
  if (!selectedFile.value) {
    alert('Пожалуйста, выберите файл для загрузки.');
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  try {
    const response = await fetch(URL, { 
      method: 'POST',
      body: formData,
    });
    router.push('/products');
    if (response.status === 201) {
      alert('Файл успешно загружен! Перейдите на страницу каталога.')
    } else {
      alert('Ошибка загрузки файла.');
    }
  } catch (error) {
    console.error('Ошибка при загрузке:', error);
    alert('Ошибка при загрузке файла.');
  }
};

</script>

<template>
  <div class="flex flex-col items-center w-full mt-32 ">
    <div>
      <h1 class="font-semibold">Загузите файл в формате XLSX</h1>
    </div>
    <div>
      <form class="flex flex-col items-center">
        <label for="fileUpload"  class="custom-file-upload">Выберите файл</label>
        <input id="fileUpload" type="file" @change="handleFileChange" class="input">
        <button @click="uploadFile" class="custom-file-parsing">Парсим!</button>
      </form>
    </div>
    <div class="products-link">
      <NuxtLink to="/products">Перейти на страницу каталога</NuxtLink>
    </div>
  </div>
</template>
