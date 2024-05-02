<template>
    <div>
        <div class="max-w-full py-16 mx-auto bg-white sm:px-6 lg:px-8 dark:bg-[#1e2022]">
            <div class="flex flex-col p-6 sm:flex-row">
                <div class="w-full pr-4">
                    <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="name" class="label">{{
                                $t('forms.first_name') }}</label>
                            <div>
                                <input type="text" class="w-full read-only-input" v-model="firstName">
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="name" class="label">{{
                                $t('forms.last_name') }}</label>
                            <div>
                                <input type="text" class="w-full read-only-input" v-model="lastName">
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 col-span-full">
                        <label for="name" class="label">{{
                            $t('forms.email_address') }}</label>
                        <div>
                            <input type="text" class="w-full read-only-input" v-model="email">
                        </div>
                    </div>
                    <div class="mt-4 col-span-full">
                        <label for="name" class="label">{{
                            $t('forms.password') }}</label>
                        <div>
                            <input type="text" class="w-full read-only-input" v-model="password">
                        </div>
                    </div>

                    <div class="flex items-center justify-end mt-6 gap-x-6">
                        <button type="button" @click="toggleEditMode"
                            class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                            {{ $t('btn.edit') }}
                        </button>
                    </div>
                </div>

                <div class="w-full mt-4 sm:w-1/3 sm:mt-0">
                    <div
                        class="max-w-2xl mx-4 mt-6 text-gray-900 bg-white dark:bg-[#1e2022] rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
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
                            <h2 class="font-semibold text-gray-800 dark:text-gray-300">Amr Mohamed</h2>
                            <p class="text-gray-600 dark:text-gray-200">CEO Profile</p>
                        </div>
                        <ul class="flex items-center justify-around py-4 mt-2 text-gray-700">
                            <li class="flex flex-col items-center justify-around">
                                <icon name="fontisto:star" class="w-5 text-blue-900 fill-current dark:text-blue-600" />
                                <div class="text-gray-700 dark:text-gray-300">2k</div>
                            </li>
                            <li class="flex flex-col items-center justify-between">
                                <icon name="fontisto:persons"
                                    class="w-5 text-blue-900 fill-current dark:text-blue-600" />
                                <div class="text-gray-700 dark:text-gray-300">10k</div>
                            </li>
                            <li class="flex flex-col items-center justify-around">
                                <icon name="basil:shopping-bag-solid"
                                    class="w-5 text-blue-900 fill-current dark:text-blue-600" />
                                <div class="text-gray-700 dark:text-gray-300">15</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="max-w-5xl pr-4 mx-5" v-if="editMode">
                <FormKit type="form" id="profile-form" :actions="false" :incomplete-message="false" class="space-y-8">
                    <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <form-inputs>
                                <template #first-name="{ icon, label }">
                                    <label for="name" class="label">{{
                                        label }}</label>
                                    <div class="relative">
                                        <FormKit name="first name" type="text" v-model="firstName"
                                            validation="required|contains_alpha|length:2,10"
                                            validation-visibility="dirty" message-class="error-message"
                                            input-class="input" />
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
                                    <label for="name" class="label">{{
                                        label }}</label>
                                    <div class="relative">
                                        <FormKit name="last name" type="text" v-model="lastName"
                                            validation="required|contains_alpha|length:2,10"
                                            validation-visibility="dirty" message-class="error-message"
                                            input-class="input" />
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
                                <label for="email" class="label">{{
                                    label }}</label>
                                <div class="relative">
                                    <FormKit name="email" type="email" v-model="email"
                                        validation="required|email|ends_with:.com" validation-visibility="dirty"
                                        message-class="error-message" input-class="input" />
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
                                        <label for="password" class="label">{{
                                            label }}</label>
                                    </div>
                                    <div class="relative">
                                        <FormKit name="password" type="text" v-model="password"
                                            validation="required|password|length:6,7" validation-visibility="dirty"
                                            message-class="mt-1.5 text-red-600" input-class="input" />
                                        <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                            <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                        </span>
                                    </div>
                                </template>
                            </form-inputs>
                        </div>

                        <div class="sm:col-span-3">
                            <form-inputs>
                                <template #confirmPassword="{ icon, label, placeholder }">
                                    <div class="flex items-center">
                                        <label for="confirm-password" class="label">{{
                                            label }}</label>
                                    </div>
                                    <div class="relative">
                                        <FormKit name="password_confirm" type="password" v-model="confirmPassword"
                                            validation="required|confirm" validation-visibility="dirty"
                                            :placeholder="placeholder" message-class="mt-1.5 text-red-600"
                                            input-class="input" />
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
                            class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                            {{ $t('btn.update') }}
                        </button>
                    </div>
                </FormKit>
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
const { t } = useI18n()

onMounted(() => {
    firstName.value = sessionStorage.getItem('firstName');
    lastName.value = sessionStorage.getItem('lastName');
    email.value = sessionStorage.getItem('email');
    password.value = sessionStorage.getItem('password');
})

const editMode = ref(false)

const toggleEditMode = () => {
    editMode.value = !editMode.value
}

useHead({
    title: t('head.profile')
})
</script>