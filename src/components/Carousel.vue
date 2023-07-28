<template>
    <div>
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="image in images" :key="slide">
                <div class="carousel__item bg-slate-300">
                    <img :src="image.src" :alt="image.alt">
                </div>
            </Slide>

            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    props: ['images'],
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            300: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            600: {
                itemsToShow: 2,
                snapAlign: 'start',
            }
        },
    }),
});
</script>

<style>



img {
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    color: #fafafa;
    border: 2px solid rgb(230, 230, 230);
}

.carousel__prev {
    margin-left: 1em;
}

.carousel__next {
    margin-right: 1em;
}

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
</style>