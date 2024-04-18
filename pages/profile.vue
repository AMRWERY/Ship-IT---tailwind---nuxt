<template>
    <div>
        <div class="max-w-full py-16 mx-auto sm:px-6 lg:px-8">
            <div class="flex flex-col p-6 bg-white sm:flex-row">
                <!-- First column (size 8) -->
                <!-- <div class="w-full pr-4 sm:w-2/3">
                    <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                $t('forms.first_name') }}</label>
                            <div class="read-only-input">
                                <p class="font-medium">Amr</p>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                $t('forms.last_name') }}</label>
                            <div class="read-only-input">
                                <p class="font-medium">Mohamed</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 col-span-full">
                        <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                            $t('forms.email_address') }}</label>
                        <div class="read-only-input">
                            <p class="font-medium">amrmounir2@gmail.com</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                $t('forms.password') }}</label>
                            <div class="read-only-input">
                                <p class="font-medium">*******</p>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="name" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                $t('forms.confirm_password') }}</label>
                            <div class="read-only-input">
                                <p class="font-medium">*******</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-end mt-6 gap-x-6">
                        <button type="button"
                            class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {{ $t('btn.edit') }}
                        </button>
                    </div>
                </div> -->

                <div class="w-full pr-4 sm:w-2/3">
                    <FormKit type="form" id="profile-form" :actions="false" :incomplete-message="false"
                        class="space-y-8">
                        <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <form-inputs>
                                    <template #first-name="{ icon, label }">
                                        <label for="name"
                                            class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                label }}</label>
                                        <div class="relative">
                                            <FormKit name="first name" type="text" v-model="firstName"
                                                validation="required|contains_alpha|length:2,10"
                                                validation-visibility="dirty"
                                                :placeholder="$t('auth.enter_your_given_name')"
                                                message-class="text-red-600 mt-1.5"
                                                input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                            <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </template>
                                </form-inputs>
                            </div>

                            <div class="sm:col-span-3">
                                <form-inputs>
                                    <template #last-name="{ icon, label }">
                                        <label for="name"
                                            class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                label }}</label>
                                        <div class="relative">
                                            <FormKit name="last name" type="text" v-model="lastName"
                                                validation="required|contains_alpha|length:2,10"
                                                validation-visibility="dirty"
                                                :placeholder="$t('auth.enter_your_family_name')"
                                                message-class="text-red-600 mt-1.5"
                                                input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                            <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </template>
                                </form-inputs>
                            </div>
                        </div>
                        <div class="mt-4 col-span-full">
                            <form-inputs>
                                <template #email="{ icon, label }">
                                    <label for="email" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                        label }}</label>
                                    <div class="relative">
                                        <FormKit name="email" type="email" v-model="email"
                                            validation="required|email|ends_with:.com" validation-visibility="dirty"
                                            placeholder="test@test.com" message-class="text-red-600 mt-1.5"
                                            input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                        <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                            <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                        </span>
                                    </div>
                                </template>
                            </form-inputs>
                        </div>
                        <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <form-inputs>
                                    <template #password="{ icon, label }">
                                        <div class="flex items-center">
                                            <label for="password"
                                                class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                    label }}</label>
                                        </div>
                                        <div class="relative">
                                            <FormKit name="password" type="password" v-model="password"
                                                validation="required|password|length:6,7" validation-visibility="dirty"
                                                :placeholder="$t('auth.enter_your_password')"
                                                message-class="mt-1.5 text-red-600"
                                                input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                            <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </template>
                                </form-inputs>
                            </div>

                            <div class="sm:col-span-3">
                                <form-inputs>
                                    <template #confirmPassword="{ icon, label }">
                                        <div class="flex items-center">
                                            <label for="confirm-password"
                                                class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                    label }}</label>
                                        </div>
                                        <div class="relative">
                                            <FormKit name="password_confirm" type="password" v-model="confirmPassword"
                                                validation="required|confirm" validation-visibility="dirty"
                                                :placeholder="$t('placeholder.retype_your_password')"
                                                message-class="mt-1.5 text-red-600"
                                                input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                            <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </template>
                                </form-inputs>
                            </div>
                        </div>
                        <div class="flex items-center justify-end mt-6 gap-x-6">
                            <button type="submit"
                                class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {{ $t('btn.update') }}
                            </button>
                            <button type="button"
                                class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {{ $t('btn.edit') }}
                            </button>
                        </div>
                    </FormKit>
                </div>

                <div class="w-full mt-4 sm:w-1/3 sm:mt-0">
                    <div
                        class="max-w-2xl mx-4 mt-6 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                        <div class="h-32 overflow-hidden rounded-t-lg">
                            <img class="object-cover object-top w-full"
                                src="https://justfields.com/storage/projects/7M5rV059/Mountain.jpg" />
                        </div>
                        <div
                            class="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full ">
                            <img class="object-cover object-center h-32"
                                src="https://justfields.com/storage/projects/7M5rV059/profile.jpg" />
                        </div>
                        <div class="mt-2 text-center">
                            <h2 class="font-semibold">Amr Mohamed</h2>
                            <p class="text-gray-500">CEO Profile</p>
                        </div>
                        <ul class="flex items-center justify-around py-4 mt-2 text-gray-700">
                            <li class="flex flex-col items-center justify-around">
                                <icon name="fontisto:star" class="w-5 text-blue-900 fill-current" />
                                <div>2k</div>
                            </li>
                            <li class="flex flex-col items-center justify-between">
                                <icon name="fontisto:persons" class="w-5 text-blue-900 fill-current" />
                                <div>10k</div>
                            </li>
                            <li class="flex flex-col items-center justify-around">
                                <icon name="basil:shopping-bag-solid" class="w-5 text-blue-900 fill-current" />
                                <div>15</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

useHead({
    title: 'Your Profile'
})
</script>