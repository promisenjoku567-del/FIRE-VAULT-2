function payWithPaystack(amount) {

  let playerId = document.getElementById("playerId").value;

  if (playerId === "") {
    alert("Please enter your Player ID");
    return;
  }

  let handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY_HERE', // 🔥 PUT YOUR PAYSTACK KEY
    email: "customer@email.com",
    amount: amount * 100,
    currency: "NGN",

    metadata: {
      custom_fields: [
        {
          display_name: "Player ID",
          variable_name: "player_id",
          value: playerId
        }
      ]
    },

    callback: function(response) {
      alert("Payment successful! Ref: " + response.reference);
    },

    onClose: function() {
      alert("Transaction cancelled");
    }
  });

  handler.openIframe();
}
