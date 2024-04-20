<template>
    <div>
        <slot name="email" icon="mdi:mail-ru" :label="$t('auth.email_address')" placeholder="test@test.com"></slot>
        <slot name="password" icon="mdi:lock" :label="$t('auth.password')"
            :placeholder="$t('placeholder.enter_your_password')"></slot>
        <slot name="confirmPassword" icon="mdi:lock" :label="$t('auth.confirm_password')"
            :placeholder="$t('placeholder.retype_your_password')"></slot>
        <slot name="first-name" icon="fa-solid:signature" :label="$t('auth.first_name')"
            :placeholder="$t('auth.enter_your_given_name')"></slot>
        <slot name="last-name" icon="fa-solid:signature" :label="$t('auth.last_name')"
            :placeholder="$t('auth.enter_your_family_name')"></slot>
        <slot name="message" icon="wpf:edit-file" :label="$t('forms.your_message')"
            :placeholder="$t('placeholder.enter_your_message')"></slot>
        <slot name="card-holder" icon="fa-regular:address-card" :label="$t('forms.card_holder')"
            :placeholder="$t('placeholder.your_full_name_here')"></slot>
        <slot name="card-details" icon="fa-regular:credit-card" :label="$t('forms.card_number')"
            placeholder="xxxx-xxxx-xxxx-xxxx"></slot>
        <slot name="expiry_date" placeholder="MM/YY"></slot>
        <slot name="cvc" placeholder="CVC"></slot>
        <slot name="street-address" :label="$t('checkout.billing_address')"
            :placeholder="$t('placeholder.street_address')"></slot>
        <slot name="billing-zip" :placeholder="$t('placeholder.zip')"></slot>
    </div>
</template>

<script setup>

</script>