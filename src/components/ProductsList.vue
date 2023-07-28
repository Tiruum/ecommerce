<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Каталог</h2>
            <span>Сортировать по </span>
            <select @change="sortProducts($event)">
                <option value="new-first">Сначала новые</option>
                <option value="old-first">Сначала старые</option>
                <option value="ascending-prices">Возрастанию цены</option>
                <option value="descending-prices">Убыванию цены</option>
            </select>

            <div class="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative cursor-pointer">
                    <router-link :to="`/product/${product.id}`">
                        <div
                            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img :src="product.images[0].src" :alt="product.images[0].alt"
                                class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.title }}
                                </h3>
                                <div class="flex flex-row mt-1">
                                    <div v-for="color in product.colors">
                                        <div class="w-3 h-3 rounded-full mr-1"
                                            :style="{'background': 'linear-gradient(135deg, ' + color[0] + ' 50%, ' + color[1] + ' 50%)'}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm font-medium text-gray-900">{{ product.price }}₽</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink  } from 'vue-router';
import TagsInput from '../components/TagsInput.vue';
const props = defineProps({
    products: Object
});

const { products } = props;
products.sort((a, b) => b.datetime - a.datetime); // Предустановлена сортировка по недавним

function sortProducts(e) {
    const sortType = e.target.value;
    switch (sortType) {
        case 'new-first':
            products.sort((a, b) => b.datetime - a.datetime);
            break;
        
        case 'old-first':
            products.sort((a, b) => a.datetime - b.datetime);
            break;

        case 'ascending-prices':
            products.sort((a, b) => a.price - b.price);
            break;

        case 'descending-prices':
            products.sort((a, b) => b.price - a.price);
            break;
    
        default:
            return products;
    }
}
</script>