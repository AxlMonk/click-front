<script setup>
  const { product_id } = useRoute().params;
  const { data } = await useFetch(`http://localhost:3001/catalog/${product_id}`);
  const keys = Object.keys(data.value.catalog);
  const a = data.value.catalog
  console.log(data.catalog.Название товара")

  console.log(keys)
</script>

<template>
  <div class="link-block">
    <p>
      <NuxtLink to="/products" class="custom-file-upload">Назад</NuxtLink>
    </p>  
    <p>
      <NuxtLink to="/" class="custom-file-parsing">На главную</NuxtLink>
    </p> 
  </div>
 
   <div v-if="data">
    <div class="p-4">
        <p>Артикул: {{ data.catalog.Артикул }}</p>
        <p>Название товара: {{ data.catalog.Название товара}}</p>
        <p>Бренд: {{ data.catalog.Бренд }}</p>
        <!-- <p>Цена, руб.*: {{ data.catalog.Цена, руб.* }}</p> -->
        <p>Цвет: {{ data.catalog.Цвет }}</p>
        <!-- <p>Страна-изготовитель: {{ data.catalog.["Страна-изготовитель"] }}</p>  -->
    </div>
  </div>
</template>
