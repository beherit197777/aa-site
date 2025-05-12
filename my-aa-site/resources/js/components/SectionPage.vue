<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Новичку</h1>
        <ul class="space-y-4">
            <li v-for="item in items" :key="item.id" class="border-b pb-4">
                <a :href="item.link" class="text-xl text-blue-600 hover:underline">{{ item.title }}</a>
                <p class="text-gray-700 dark:text-gray-300 mt-1">{{ item.excerpt }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    { id: 1, title: 'Исповедь Анонимного Алкоголика', excerpt: 'Личный опыт и путь к трезвости...', link: '/novichku/confession' },
    // ... другие пункты меню
]);
</script>
