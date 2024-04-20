<template>
    <div>
        <slot name="email" icon="mdi:mail-ru" :label="$t('auth.email_address')"></slot>
        <slot name="password" icon="mdi:lock" :label="$t('auth.password')"></slot>
        <slot name="confirmPassword" icon="mdi:lock" :label="$t('auth.confirm_password')"></slot>
        <slot name="first-name" icon="fa-solid:signature" :label="$t('auth.first_name')"></slot>
        <slot name="last-name" icon="fa-solid:signature" :label="$t('auth.last_name')"></slot>
        <slot name="message" icon="wpf:edit-file" :label="$t('forms.your_message')"></slot>
        <slot name="card-holder" icon="fa-regular:address-card" :label="$t('forms.card_holder')"></slot>
        <slot name="card-details" icon="fa-regular:credit-card" :label="$t('forms.card_number')"></slot>
        <slot name="expiry_date"></slot>
        <slot name="cvc"></slot>
        <slot name="street-address" :label="$t('checkout.billing_address')"></slot>
        <slot name="billing-zip"></slot>
    </div>
</template>

<script setup>

</script>