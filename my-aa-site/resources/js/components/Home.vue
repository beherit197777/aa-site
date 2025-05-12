<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-white dark:bg-gray-800 shadow">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <img src="/assets/logo.svg" alt="Logo" class="h-8">
                <nav class="space-x-6">
                    <a href="/" class="text-gray-700 dark:text-gray-200 hover:underline">Главная</a>
                    <a href="/novichku" class="text-gray-700 dark:text-gray-200 hover:underline">Новичку</a>
                    <!-- ... другие ссылки ... -->
                </nav>
                <button @click="toggleTheme" class="focus:outline-none">
                    <span v-if="isDark">☀️</span>
                    <span v-else>🌙</span>
                </button>
            </div>
        </header>

        <!-- Hero -->
        <section class="flex-grow bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
            <div class="text-center p-8">
                <h1 class="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Добро пожаловать в сообщество Анонимных Алкоголиков</h1>
                <p class="text-lg mb-6 text-gray-600 dark:text-gray-300">Вы не одиноки на пути к трезвости</p>
                <a href="#about" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">Узнать больше</a>
            </div>
        </section>

        <!-- О нас -->
        <section id="about" class="container mx-auto px-4 py-16">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="text-2xl font-semibold mb-4">О нашей миссии</h2>
                    <p class="text-gray-700 dark:text-gray-300">Наша цель — поддержать каждого, кто стремится к трезвости...</p>
                    <a href="/o-programme" class="text-blue-600 hover:underline mt-2 inline-block">Подробнее о программе</a>
                </div>
                <img src="/assets/mission.svg" alt="Mission" class="w-full" />
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-100 dark:bg-gray-900 py-6">
            <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                © 2025 Анонимные Алкоголики — все права защищены
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const isDark = ref(false);
function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
}
</script>
