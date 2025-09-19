<script setup>
  const { product_id } = useRoute().params;
  const { data } = await useFetch(`http://localhost:3001/catalog/${product_id}`);
</script>

<template>
  <div class="link-block mt-16">
    <p>
      <NuxtLink to="/products" class="custom-file-upload">Назад</NuxtLink>
    </p>  
    <p>
      <NuxtLink to="/" class="custom-file-parsing">На главную</NuxtLink>
    </p> 
  </div>
 
   <div v-if="data" class="p-4 flex w-full justify-center flex-col items-center mt-8">
    <div>
        <p>Артикул: {{ data.catalog["Артикул"]}}</p>
        <p>Название товара: {{ data.catalog["Название товара"] }}</p>
        <p>Бренд: {{ data.catalog["Бренд"]}}</p>
        <p>Цвет: {{ data.catalog["Цвет"] }}</p>
        <p>Цена: {{ data.catalog["Цена, руб.*"] }}</p>
        <p>Страна-изготовитель: {{ data.catalog["Страна-изготовитель"] }}</p>
    </div>
  </div>
</template>
