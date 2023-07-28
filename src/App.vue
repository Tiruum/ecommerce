<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue';
import ProductOverview from './views/ProductOverview.vue';
import Cart from './components/Cart.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div v-if="$route.path != '/admin'">
    <Cart v-bind:products="selectedProducts" v-bind:sum="sum" @delete-from-cart="deleteFromCart" />
  </div>
  <!-- <Home
  v-bind:products="products"
  v-bind:selected-products="selectedProducts"
  v-bind:sum="sum"
  @delete-from-cart="deleteFromCart"
  @add-to-cart="addToCart" /> -->

  <!-- <ProductOverview
  v-bind:product="product"
  @add-to-cart="addToCart" /> -->

  <router-view :key="$route.path" :products="products" :product="returnProduct" :selected-products="selectedProducts"
    :sum="sum" @add-to-cart="addToCart">
  </router-view>
  
  <div v-if="$route.path != '/admin'">
    <Footer />
  </div>
</template>

<style>
</style>

<script>
export default {
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    returnProduct() {
      return this.products.find(product => product.id === this.productId);
    }
  },
  methods: {
    deleteFromCart(id) {
      this.selectedProducts = this.selectedProducts.filter(t => t.id !== id);

      const productData = this.products.find(product => product.id == id);
      this.sum = this.sum - productData.price;
    },
    addToCart(id, color, size, quantity) {
      const productData = this.products.find(product => product.id == id);
      this.selectedProducts.push({
        id: id,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        images: productData.images,
        color: color,
        size: size,
        quantity: quantity
      });
      this.sum = this.sum + productData.price;
    }
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Комбинезон PROXY',
          price: 22320,
          href: '#',
          article: 'KN2123/20/06',
          breadcrumbs: [
            { id: 1, name: 'Комбинезоны', href: '#' },
            { id: 2, name: 'Мужские', href: '#' },
          ],
          images: [
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_2007-%20Coolzone-1014%20(1)_1629963487.jpg',
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_2007-%20Coolzone-1049_1629963490.jpg',
              alt: 'Model wearing plain black basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_2007-%20Coolzone-1039_1629963494.jpg',
              alt: 'Model wearing plain gray basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_2007-%20Coolzone-1037_1629963497.jpg',
              alt: 'Model wearing plain white basic tee.',
            },
          ],
          colors: [
            { name: 'Красный', style: ['rgb(239 68 68)', 'rgb(239 68 68)'], selectedClass: 'ring-gray-400' },
            { name: 'Желтый', style: ['rgb(253 224 71)', 'rgb(253 224 71)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Оливковый', style: ['rgb(15 23 42)', 'rgb(128, 128, 0)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Горчичный', style: ['rgb(15 23 42)', 'rgb(252 211 77)'], selectedClass: 'ring-gray-400' },
          ],
          sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
          ],
          description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          tags: ['PROXY', 'Мужское'],
          creationTime: new Date(2021, 0, 1, 2, 10, 4),
        },
        {
          id: 2,
          title: 'Комбинезон CODE',
          price: 21520,
          href: '#',
          article: 'KN2123/20/06',
          breadcrumbs: [
            { id: 1, name: 'Комбинезоны', href: '#' },
            { id: 2, name: 'Мужские', href: '#' },
          ],
          images: [
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_0805- Coolzone--1415 (1)_1629967783.jpg',
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_0805- Coolzone--1431_1629967791.jpg',
              alt: 'Model wearing plain black basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_0805- Coolzone--1425_1629967794.jpg',
              alt: 'Model wearing plain gray basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_0805- Coolzone--1422_1629967798.jpg',
              alt: 'Model wearing plain white basic tee.',
            },
          ],
          colors: [
            { name: 'Красный', style: ['rgb(239 68 68)', 'rgb(239 68 68)'], selectedClass: 'ring-gray-400' },
            { name: 'Желтый', style: ['rgb(253 224 71)', 'rgb(253 224 71)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Оливковый', style: ['rgb(15 23 42)', 'rgb(128, 128, 0)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Горчичный', style: ['rgb(15 23 42)', 'rgb(252 211 77)'], selectedClass: 'ring-gray-400' },
          ],
          sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
          ],
          description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          tags: ['PROXY', 'Мужское'],
          creationTime: new Date(2021, 0, 1, 2, 10, 4),
        },
        {
          id: 3,
          title: 'Комбинезон CODE',
          price: 22320,
          href: '#',
          article: 'KN2123/20/06',
          breadcrumbs: [
            { id: 1, name: 'Комбинезоны', href: '#' },
            { id: 2, name: 'Мужские', href: '#' },
          ],
          images: [
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_1307- Coolzone-1330 (2)_1640788352.jpg',
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_1307- Coolzone-1361 (1)_1640788375.jpg',
              alt: 'Model wearing plain black basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_1307- Coolzone-1354 (1)_1640788387.jpg',
              alt: 'Model wearing plain gray basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/2021_1307- Coolzone-1346 (1)_1640788391.jpg',
              alt: 'Model wearing plain white basic tee.',
            },
          ],
          colors: [
            { name: 'Красный', style: ['rgb(239 68 68)', 'rgb(239 68 68)'], selectedClass: 'ring-gray-400' },
            { name: 'Желтый', style: ['rgb(253 224 71)', 'rgb(253 224 71)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Оливковый', style: ['rgb(15 23 42)', 'rgb(128, 128, 0)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Горчичный', style: ['rgb(15 23 42)', 'rgb(252 211 77)'], selectedClass: 'ring-gray-400' },
          ],
          sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
          ],
          description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          tags: ['PROXY', 'Мужское'],
          creationTime: new Date(2021, 0, 1, 2, 10, 4),
        },
        {
          id: 4,
          title: 'Комбинезон PROXY',
          price: 22320,
          href: '#',
          article: 'KN2123/20/06',
          breadcrumbs: [
            { id: 1, name: 'Комбинезоны', href: '#' },
            { id: 2, name: 'Мужские', href: '#' },
          ],
          images: [
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/1R-17ФШ_1640792423.jpg',
              alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/3R-19ФШ_1640792430.jpg',
              alt: 'Model wearing plain black basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/4R-20ФШ_1640792434.jpg',
              alt: 'Model wearing plain gray basic tee.',
            },
            {
              src: 'https://www.coolzone.shop/uploads/docs/1/5R-21ФШ_1640792438.jpg',
              alt: 'Model wearing plain white basic tee.',
            },
          ],
          colors: [
            { name: 'Красный', style: ['rgb(239 68 68)', 'rgb(239 68 68)'], selectedClass: 'ring-gray-400' },
            { name: 'Желтый', style: ['rgb(253 224 71)', 'rgb(253 224 71)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Оливковый', style: ['rgb(15,23,42)', 'rgb(128,128,0)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Горчичный', style: ['rgb(15,23,42)', 'rgb(252,211,77)'], selectedClass: 'ring-gray-400' },
          ],
          sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
          ],
          description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          tags: ['PROXY', 'Мужское'],
          creationTime: new Date(2021, 0, 1, 2, 10, 4),
        },
      ],
      selectedProducts: [],
      sum: 0
    }
  }
}
</script>

<!-- const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
} -->










<!-- {
          id: 4,
          title: "Комбинезон PROXY",
          description: "Комбинезон PROXY - Идеальный зимний вариант для любых видов активности.",
          price: 22320,
          images: [{
              src: 'https://www.coolzone.shop/uploads/docs/1/1R-17ФШ_1640792423.jpg',
              alt: "Комбинезон PROXY"
            }],
          colors: {
            "красный": ['rgb(239 68 68)', 'rgb(239 68 68)'],
            "желтый": ['rgb(253 224 71)', 'rgb(253 224 71)'],
            "черный/оликовый": ['rgb(15 23 42)', 'rgb(128, 128, 0)'],
            "черный/горчичный": ['rgb(15 23 42)', 'rgb(252 211 77)'],
            "болотный/серый меланж": ['rgb(101 163 13)', 'rgb(214 211 209)']
          },
          colors: [
            { name: 'Красный', style: ['rgb(239 68 68)', 'rgb(239 68 68)'], selectedClass: 'ring-gray-400' },
            { name: 'Желтый', style: ['rgb(253 224 71)', 'rgb(253 224 71)'], selectedClass: 'ring-gray-400' },
            { name: 'Черный/Оливковый', style: ['rgb(15 23 42)', 'rgb(128, 128, 0)'], selectedClass: 'ring-gray-900' },
          ],
          sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
          ],
          tags: ['PROXY'],
          datetime: new Date(2021, 0, 1, 2, 10, 4)
        }, -->