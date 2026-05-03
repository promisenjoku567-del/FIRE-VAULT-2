// 🔥 Firebase config (PASTE YOUR OWN HERE)
const firebaseConfig = {
  apiKey: "AIzaSyDnwV4nIVyl1roL2jtgc1_YLcvyYCGKj2Y",
  authDomain: "fire-vault-22555.firebaseapp.com",
  projectId: "fire-vault-22555",
  storageBucket: "fire-vault-22555.firebasestorage.app",
  messagingSenderId: "589168743870",
  appId: "1:589168743870:web:38210ca30165a196d515ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let orders = [];
let total = 0;
let pending = 0;
let revenue = 0;
<script>
function payWithPaystack(amount, packageName) {

  let uid = document.getElementById("uid").value;
  let phone = document.getElementById("phone").value;

  let handler = PaystackPop.setup({
    key: 'pk_test_3759303d3db8720fd0eb95b29004450980f0a4db',
    email: "test@gmail.com",
    amount: amount * 100,
    currency: "NGN",

    callback: function(response) {

      // Firebase save
      db.ref("orders").push({
        uid: uid,
        package: packageName,
        phone: phone,
        reference: response.reference,
        status: "paid"
      });

      // EmailJS
      emailjs.send("service_zjapyfh", "template_478nbiy", {
        uid: uid,
        package: packageName,
        reference: response.reference,
        phone: phone
      });

      alert("Payment successful!");
    }
  });

</script>
      document.body.innerHTML = `
        <div style="color:white; text-align:center; padding:50px;">
          <h1>✅ Payment Successful!</h1>
          <p>Redirecting to WhatsApp...</p>
        </div>
      `;

      setTimeout(() => {
        window.location.href =
          "https://wa.me/2349011567827?text=" +
          encodeURIComponent(message);
      }, 3000);

    }
  });

  handler.openIframe();
}
