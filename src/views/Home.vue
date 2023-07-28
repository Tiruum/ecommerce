<template>
    <!-- <Navbar /> -->
    <!-- <Cart v-bind:products="selectedProducts" v-bind:sum="sum" @delete-from-cart="deleteFromCart" /> -->
    <ProductsList v-bind:products="products" @add-to-cart="addToCart" />
    <!-- <Footer /> -->
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import ProductsList from "../components/ProductsList.vue";
    import Footer from "../components/Footer.vue";
    import Cart from "../components/Cart.vue";

    export default {
        name: "Home",
        components: {
            Navbar,
            ProductsList,
            Footer,
            Cart
        },
        emits: ["add-to-cart", "delete-from-cart"],
        props: ['products', 'selectedProducts', 'sum'],
        methods: {
            deleteFromCart(id) {
                // Передаю данные из Cart.vue в App.vue
                this.$emit('delete-from-cart', id);
            },
            addToCart(id, color, size, quantity) {
                // Передаю данные из Cart.vue в App.vue
                this.$emit('add-to-cart', id, color, size, quantity);
            }
        },
    }
</script>