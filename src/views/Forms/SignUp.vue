<template>
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                        <div class="mb-10 text-center md:mb-16">
                            <a href="javascript:void(0)" class="mx-auto inline-block max-w-[160px]">
                                <img src="http://ae01.alicdn.com/kf/HTB1cI7EaXP7gK0jSZFjq6A5aXXat/YJZT.jpg" alt="logo" />
                            </a>
                        </div>
                        <form>
                            <div class="mb-6">
                                <input type="text" placeholder="ФИО"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <input type="email" placeholder="Почта"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <input type="password" placeholder="Пароль"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                        </form>
                        <BtnSubmit />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====== Forms Section End -->
</template>
<script lang="ts" setup>
import BtnSubmit from '@/components/Btn/Submit.vue'
</script>