function page6() {
  document.getElementById("mainContent").innerHTML = `
    <div class="page6">
            <div class="info">
              <h2>
                Card number for testing purposes is:<br />
                4242 4242 4242 4242.<br />
                Everything else is random.
              </h2>
            </div>
            <form>
              <label>
                <input
                  name="cardholder-name"
                  class="field is-empty"
                  placeholder="Full name"
                />
                <span><span>Name</span></span>
              </label>
              <label>
                <input
                  class="field is-empty"
                  type="tel"
                  placeholder="xx xxx xxx"
                />
              
              </label>
              <label>
                <div id="card-element" class="field is-empty"></div>
                <span><span>Credit or debit card</span></span>
              </label>
              <button class="pay" type="submit">Pay $25</button>
              <div class="outcome">
                <div class="error" role="alert"></div>
                
              </div>
            </form>
            <div class="continue">
              <button onclick="page7()" type="button" class="btn btn-primary btn-sm bottomright">
                Continue
              </button>
            </div>
            </div>`;


              var stripe = Stripe("pk_test_c1AMZEnN0unLBDXAr9nFo7xG00p6gwDTuQ");
              var elements = stripe.elements();

              var card = elements.create("card", {
                iconStyle: "solid",
                style: {
                  base: {
                    iconColor: "#8898AA",
                    color: "black",
                    lineHeight: "36px",
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: "19px",

                    "::placeholder": {
                      color: "#8898AA"
                    }
                  },
                  invalid: {
                    iconColor: "#e85746",
                    color: "#e85746"
                  }
                },
                classes: {
                  focus: "is-focused",
                  empty: "is-empty"
                }
                });
              card.mount("#card-element");

              var inputs = document.querySelectorAll("input.field");
              Array.prototype.forEach.call(inputs, function(input) {
                input.addEventListener("focus", function() {
                  input.classList.add("is-focused");
                });
                input.addEventListener("blur", function() {
                  input.classList.remove("is-focused");
                });
                input.addEventListener("keyup", function() {
                  if (input.value.length === 0) {
                    input.classList.add("is-empty");
                  } else {
                    input.classList.remove("is-empty");
                  }
                });
              });

              function setOutcome(result) {
                var successElement = document.querySelector(".success");
                var continueElement = document.querySelector(".continue");
                var errorElement = document.querySelector(".error");
                var payElement = document.querySelector(".pay");
                successElement.classList.remove("visible");
                continueElement.classList.remove("visible");
                errorElement.classList.remove("visible");

                if (result.token) {
                  // Use the token to create a charge or a customer
                  // https://stripe.com/docs/charges
                  successElement.querySelector(".token").textContent =
                    result.token.id;
                  successElement.classList.add("visible");
                  continueElement.classList.add("visible");
                  payElement.classList.add("gone");
                } else if (result.error) {
                  errorElement.textContent = result.error.message;
                  errorElement.classList.add("visible");
                }
              }

              card.on("change", function(event) {
                setOutcome(event);
              });

              document
                .querySelector("form")
                .addEventListener("submit", function(e) {
                  e.preventDefault();
                  var form = document.querySelector("form");
                  var extraDetails = {
                    name: form.querySelector("input[name=cardholder-name]")
                      .value
                  };
                  stripe.createToken(card, extraDetails).then(setOutcome);
                });
          
}
