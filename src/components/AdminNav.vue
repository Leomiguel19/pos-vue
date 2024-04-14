<script setup>
    import Link from "./Link.vue"
    import Logo from "./Logo.vue"
</script>

<template>
    <div class="px-10 py-5 bg-gray-900 flex justify-between absolute top-0 w-full z-10">
        <div>
            <Logo/>
        </div>

        <nav>
            <Link
                to="shop"
            >
                Ir a Tienda
            </Link>
        </nav>
    </div>
</template>
