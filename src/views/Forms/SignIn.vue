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
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-6">
                                <input v-model="email" type="text" placeholder="Email"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <input v-model="password" type="password" placeholder="Password"
                                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-10">
                                <input type="submit" value="Sign In"
                                    class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90" />
                            </div>
                        </form>
                        <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>
                        <div v-if="successMessage" class="text-green-500 mb-4">{{ successMessage }}</div>
                        <BtnSubmit @click="handleClick" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import BtnSubmit from "@/components/Btn/Submit.vue";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const successMessage = ref("");

function handleClick(event: any) {
    console.log(event);
}

async function handleSubmit() {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });
        const data = await response.json();
        if (data.error) {
            errorMessage.value = data.error;
            successMessage.value = "";
        } else {
            successMessage.value = data.message;
            errorMessage.value = "";
        }
    } catch (error) {
        errorMessage.value = "An error occurred while submitting the form.";
        successMessage.value = "";
        console.error(error);
    }
}
</script>