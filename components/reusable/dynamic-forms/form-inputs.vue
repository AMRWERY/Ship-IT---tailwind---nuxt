<template>
    <div>
        <slot name="email" icon="mdi:mail-ru" :label="$t('auth.email_address')"></slot>
        <slot name="password" icon="mdi:lock" :label="$t('auth.password')"></slot>
        <slot name="confirmPassword" icon="mdi:lock" :label="$t('auth.confirm_password')"></slot>
        <slot name="first-name" icon="fa-solid:signature" :label="$t('auth.first_name')"></slot>
        <slot name="last-name" icon="fa-solid:signature" :label="$t('auth.last_name')"></slot>
        <slot name="message" icon="wpf:edit-file" :label="$t('forms.your_message')"></slot>
    </div>
</template>

<script setup>

</script>