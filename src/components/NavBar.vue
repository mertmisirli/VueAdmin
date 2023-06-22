
<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../assets/30032020090831.png" height="40" class="mr-2" />
            </template>
            <template #end>
                <!-- <InputText placeholder="Search" type="text" /> -->
                <router-link :to="{name:'login'}" class="m-5" style="text-decoration: none;">Çıkış</router-link>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label   : 'Anasayfa',
        icon    : 'pi pi-fw pi-home',
        to      : '/home'

    },
    // {
    //     label   : 'Dashboard',
    //     icon    : 'pi pi-align-center',
    //     to      : '/dashboard'
    // },
    {
        label   : 'Excel',
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
        label   : 'Verileri Al',
        icon    : 'pi pi-check'
    },
    //{
        //label   : 'Kayıtlı Verileri Getir',
        //icon    : 'pi pi-file-export'
    //}

])

// const items = ref([
//     {
//         label: 'File',
//         icon: 'pi pi-fw pi-file',
//         items: [
//             {
//                 label: 'New',
//                 icon: 'pi pi-fw pi-plus',
//                 items: [
//                     {
//                         label: 'Bookmark',
//                         icon: 'pi pi-fw pi-bookmark'
//                     },
//                     {
//                         label: 'Video',
//                         icon: 'pi pi-fw pi-video'
//                     }
//                 ]
//             },
//             {
//                 label: 'Delete',
//                 icon: 'pi pi-fw pi-trash'
//             },
//             {
//                 separator: true
//             },
//             {
//                 label: 'Export',
//                 icon: 'pi pi-fw pi-external-link'
//             }
//         ]
//     },
//     {
//         label: 'Edit',
//         icon: 'pi pi-fw pi-pencil',
//         items: [
//             {
//                 label: 'Left',
//                 icon: 'pi pi-fw pi-align-left'
//             },
//             {
//                 label: 'Right',
//                 icon: 'pi pi-fw pi-align-right'
//             },
//             {
//                 label: 'Center',
//                 icon: 'pi pi-fw pi-align-center'
//             },
//             {
//                 label: 'Justify',
//                 icon: 'pi pi-fw pi-align-justify'
//             }
//         ]
//     },
//     {
//         label: 'Users',
//         icon: 'pi pi-fw pi-user',
//         items: [
//             {
//                 label: 'New',
//                 icon: 'pi pi-fw pi-user-plus'
//             },
//             {
//                 label: 'Delete',
//                 icon: 'pi pi-fw pi-user-minus'
//             },
//             {
//                 label: 'Search',
//                 icon: 'pi pi-fw pi-users',
//                 items: [
//                     {
//                         label: 'Filter',
//                         icon: 'pi pi-fw pi-filter',
//                         items: [
//                             {
//                                 label: 'Print',
//                                 icon: 'pi pi-fw pi-print'
//                             }
//                         ]
//                     },
//                     {
//                         label: 'List',
//                         icon: 'pi pi-fw pi-bars'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Events',
//         icon: 'pi pi-fw pi-calendar',
//         items: [
//             {
//                 label: 'Edit',
//                 icon: 'pi pi-fw pi-pencil',
//                 items: [
//                     {
//                         label: 'Save',
//                         icon: 'pi pi-fw pi-calendar-plus'
//                     },
//                     {
//                         label: 'Delete',
//                         icon: 'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             },
//             {
//                 label: 'Archieve',
//                 icon: 'pi pi-fw pi-calendar-times',
//                 items: [
//                     {
//                         label: 'Remove',
//                         icon: 'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Quit',
//         icon: 'pi pi-fw pi-power-off'
//     }
// ]);

</script>