<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <div class="bg-white">
        <div class="pt-6">
            <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
                        <div class="flex items-center">
                            <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">
                                {{ breadcrumb.name }}
                            </a>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li class="text-sm">
                        <a :href="product.href" aria-current="page"
                            class="font-medium text-gray-500 hover:text-gray-600">
                            {{ product.title }}
                        </a>
                    </li>
                </ol>
            </nav>
            <!-- Image gallery -->
            <!-- <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                    <img :src="product.images[0].src" :alt="product.images[0].alt"
                        class="w-full h-full object-center object-cover" />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img :src="product.images[1].src" :alt="product.images[1].alt"
                            class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img :src="product.images[2].src" :alt="product.images[2].alt"
                            class="w-full h-full object-center object-cover" />
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <img :src="product.images[3].src" :alt="product.images[3].alt"
                        class="w-full h-full object-center object-cover" />
                </div>
            </div> -->


            <!-- Product info -->
            <div
                class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <!-- Image carousel -->
                    <Carousel v-bind:images="product.images" />
                    <h6 class="text-slate-400 text-xs">Артикул: {{ product.article }}</h6>
                    <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                        {{ product.title }}
                    </h1>
                </div>

                <!-- Options -->
                <div class="mt-4 lg:mt-0 lg:row-span-3">
                    <h2 class="sr-only">Информация о продукте</h2>
                    <p class="text-3xl text-gray-900 font-semibold">{{ product.price }}₽</p>

                    <!-- Reviews -->
                    <!-- <div class="mt-6">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                    :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                    aria-hidden="true" />
                            </div>
                            <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                            <a :href="reviews.href"
                                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                                        reviews.totalCount
                                }} reviews</a>
                        </div>
                    </div> -->

                    <form class="mt-10">
                        <!-- Colors -->
                        <div>
                            <p>
                                <span class="text-md text-gray-900 font-medium">Цвет: </span>
                                <span class="text-slate-500 text-sm">{{selectedColor.name}}</span>
                            </p>

                            <RadioGroup v-model="selectedColor" class="mt-4">
                                <RadioGroupLabel class="sr-only"> Выберите цвет </RadioGroupLabel>
                                <div class="flex items-center space-x-3">
                                    <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name"
                                        :value="color" v-slot="{ active, checked }">
                                        <div
                                            :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2 ring-offset-1' : '', 'relative rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                                            <RadioGroupLabel as="span" class="sr-only">
                                                {{ color.name }}
                                            </RadioGroupLabel>
                                            <span aria-hidden="true"
                                                :style="{'background': 'linear-gradient(135deg, ' + color.style[0] + ' 50%, ' + color.style[1] + ' 50%)'}"
                                                :class="['h-8 w-8 rounded-full']" />
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div>

                        <!-- Sizes -->
                        <div class="mt-10">
                            <div class="flex items-center justify-between">
                                <p>
                                    <span class="text-md text-gray-900 font-medium">Размер: </span>
                                    <span class="text-slate-500 text-sm">{{selectedSize.name}}</span>
                                </p>
                                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Таблица
                                    размеров</a>
                            </div>

                            <RadioGroup v-model="selectedSize" class="mt-4">
                                <RadioGroupLabel class="sr-only"> Choose a size </RadioGroupLabel>
                                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name"
                                        :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
                                        <div
                                            :class="[size.inStock ? 'bg-white shadow-sm text-gray-900 cursor-pointer' : 'bg-gray-50 text-gray-200 cursor-not-allowed', active ? 'ring-2 ring-indigo-500' : '', 'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                            <RadioGroupLabel as="span">
                                                {{ size.name }}
                                            </RadioGroupLabel>
                                            <span v-if="size.inStock"
                                                :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-md pointer-events-none']"
                                                aria-hidden="true" />
                                            <span v-else aria-hidden="true"
                                                class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                    viewBox="0 0 100 100" preserveAspectRatio="none"
                                                    stroke="currentColor">
                                                    <line x1="0" y1="100" x2="100" y2="0"
                                                        vector-effect="non-scaling-stroke" />
                                                </svg>
                                            </span>
                                        </div>
                                    </RadioGroupOption>
                                </div>
                            </RadioGroup>
                        </div>

                        <button @click.prevent="$emit('add-to-cart', product.id, selectedColor, selectedSize, 1)" type="submit"
                            class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Добавить
                            в корзину</button>
                    </form>
                </div>

                <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <!-- Description and details -->
                    <div>
                        <h3 class="sr-only">Описание</h3>

                        <div class="space-y-6">
                            <p class="text-base text-gray-900">{{ product.description }}</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h2 class="text-sm font-medium text-gray-900">Детали</h2>

                        <div class="mt-4 space-y-6">
                            <p class="text-sm text-gray-600">{{ product.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import Carousel from '../components/Carousel.vue';

const props = defineProps({
    product: Object
})

const { product } = props

const reviews = { href: '#', average: 4, totalCount: 117 }

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>