<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header class="flex w-full items-center bg-white ">
    <div class="container mx-auto">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full">
          <a class="block">
            <img src="http://ae01.alicdn.com/kf/HTB1cI7EaXP7gK0jSZFjq6A5aXXat/YJZT.jpg" alt="logo" class="w-20 rounded-lg" />
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button id="navbarToggler"
              class="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden">
              <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
              <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
              <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
            </button>
            <nav 
              class=" w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none">
              <ul class="block lg:flex">
                <li>
                  <RouterLink class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    to="/">Главнaя</RouterLink>
                </li>
                <li>
                  <RouterLink to="/reg"
                    class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
                    Вход
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/sign"
                    class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
                    Регистрация
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/lesson"
                    class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
                    Занятия
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/download"
                    class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
                    Скачать приложение
                  </RouterLink>
                </li>
                <li>
                  <a href="https://t.me/FitnessClubTTIIPBot" target="_blank"
                    class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
                    Telegram бот
                </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
</header>
<RouterView />
</template>


