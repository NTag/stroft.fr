/* global Stripe */

import React from 'react';

const stripe = Stripe('pk_live_289O1ikqs0Fc0HHMGLrBr8EJ00WLMsdXEQ');

const payEp = () => {
  stripe.redirectToCheckout({
    items: [{sku: 'sku_FONP0CTXZeHpl1', quantity: 1}],
    billingAddressCollection: 'required',
    successUrl: 'https://stroft.fr/order/success',
    cancelUrl: 'https://stroft.fr/order/canceled',
  })
  .then(function (result) {
    if (result.error) {
      console.log(result.error.message);
    }
  });
};

export default () => {
  return (
    <div>
      <button onClick={payEp}>Commander l’EP</button>
    </div>
  );
};
