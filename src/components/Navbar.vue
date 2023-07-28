<template>
    <nav class="relative w-full py-4 px-10 bg-white shadow-md">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            
            <div class="uppercase cursor-pointer text-slate-900 font-extrabold">Спортстиль</div>

            <div class="flex flex-wrap justify-evenly w-1/2">
                <span class="cursor-pointer">Мужчины</span>
                <span class="cursor-pointer">Женщины</span>
                <span class="cursor-pointer">Аксессуары</span>
            </div>

            <div class="flex items-center relative">
                <!-- Cart -->
                <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 flex items-center" href="#">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="w-5"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                        </path>
                    </svg>
                    <span
                        class="text-white bg-red-500 absolute rounded-full text-xs -mt-3.5 ml-2.5 py-0 px-1.5">1</span>
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
</template>

<script>
    export default {
        name: "Navbar"
    }

    methods: {
        
    }
</script>