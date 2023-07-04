
<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../assets/30032020090831.png" height="40" class="mr-2" />
            </template>
            <template #end>
                <router-link :to="{name:'login'}" class="m-5 " style="text-decoration: none;">Çıkış</router-link>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label   : 'Gib İşlemleri',
        icon    : 'pi pi-file',
        to      : 'excel',
        items: [
                {
                    label: 'Getir',
                    icon: 'pi pi-fw pi-file-import'
                },
                {
                    label: 'Aktar',
                    icon: 'pi pi-file-export'
                }
            ]
    },
    {
        label   : 'Bayi İşlemleri',
        icon    : "bi bi-shop"
    }

])
</script>