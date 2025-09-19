<script lang="ts" setup>

const URL = 'http://localhost:3001/catalog';

const { data: products } = await useFetch(URL);
</script>

    <template>
      <div class="mt-32">
        <h1 class="font-semibold p-4 w-full flex justify-center">Список товаров</h1>
        <div v-if="products">
            <div v-for="product in products" :key="product.id" class="p-4">
              <NuxtLink :href="`/products/product-${product.id}`">
                <p class="catalog-element">{{ product.catalog }}</p>
              </NuxtLink>
            </div>
        </div>
        <div v-else>
          Загрузка данных...
        </div>
      </div>
    </template>
