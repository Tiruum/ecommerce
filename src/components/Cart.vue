<template>
    <nav class="relative w-full py-4 px-10 bg-slate-50">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">

            <div class="uppercase cursor-pointer text-slate-900 font-extrabold"><router-link to="/">Спортстиль</router-link></div>

            <div class="flex flex-wrap justify-evenly w-1/2">
                <span class="cursor-pointer">Мужчины</span>
                <span class="cursor-pointer">Женщины</span>
                <span class="cursor-pointer">Аксессуары</span>
            </div>

            <div class="flex items-center relative">
                <!-- Cart -->
                <a @click="open = true"
                    class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 flex items-center" href="#">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="w-5"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                        </path>
                    </svg>
                    <span :class="{'block': props.products.length > 0, 'hidden': props.products.length == 0 }" class="text-white bg-red-500 absolute rounded-full text-xs -mt-3.5 ml-2.5 py-0 px-1.5">{{ props.products.length }}</span>
                </a>
                <!-- /Cart -->
                <!-- Bell -->
                <div class="relative">
                    <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 flex items-center" href="#"
                        id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="w-5"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                            </path>
                        </svg>
                    </a>
                </div>
                <!-- /Bell -->
            </div>
        </div>
    </nav>

    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                    <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900">Корзина
                                            </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="open = false">
                                                    <span class="sr-only">Закрыть корзину</span>
                                                    <XIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="props.products.length > 0">

                                            <div class="mt-8">
                                                <div class="flow-root">
                                                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                        <li v-for="product in products" :key="product.id"
                                                            class="flex py-6">
                                                            <div
                                                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img :src="product.images[0].src" :alt="product.images[0].alt"
                                                                    class="h-full w-full object-cover object-center" />
                                                            </div>

                                                            <div class="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div
                                                                        class="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a :href="product.href"> {{ product.title }}
                                                                            </a>
                                                                        </h3>
                                                                        <p class="ml-4">{{ product.price }}₽</p>
                                                                    </div>
                                                                    <p class="mt-1 text-sm text-gray-500">{{ product.color.name }}, {{ product.size.name }}</p>
                                                                </div>
                                                                <div
                                                                    class="flex flex-1 items-end justify-between text-sm">
                                                                    <p class="text-gray-500">Кол-во: {{ product.quantity
                                                                        }}
                                                                    </p>

                                                                    <div class="flex">
                                                                        <button
                                                                            @click="$emit('delete-from-cart', product.id)"
                                                                            type="button"
                                                                            class="font-medium text-indigo-600 hover:text-indigo-500">Удалить</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="flex flex-col items-center content-center mt-40">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 text-slate-400"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="1.5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <h1 class="text-xl text-center text-slate-400 font-bold">Здесь пока
                                                    ничего нет</h1>
                                                <button type="button"
                                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                                    @click="open = false">Выберите что-нибудь!<span
                                                        aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="props.products.length > 0">
                                        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <p>Итого</p>
                                                <p>{{ props.sum }}₽</p>
                                            </div>
                                            <p class="mt-0.5 text-sm text-gray-500">Доставка и налоги в чеке не учтены.
                                            </p>
                                            <div class="mt-6">
                                                <a href="#"
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Перейти к оформлению заказа</a>
                                            </div>
                                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    или <button type="button"
                                                        class="font-medium text-indigo-600 hover:text-indigo-500"
                                                        @click="open = false">Продолжить покупки<span
                                                            aria-hidden="true">
                                                            &rarr;</span></button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
export default {
    emits: ["delete-from-cart"]
}
</script>

<script setup>
import { ref, defineProps } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

import { RouterLink } from 'vue-router';

const props = defineProps({
    products: Object,
    sum: Number
})

const open = ref(false)
</script>