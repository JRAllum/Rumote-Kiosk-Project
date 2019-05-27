function page6() {
  document.getElementById("mainContent").innerHTML = `
    <div id="page6">
    <h1><i class="fab fa-cc-stripe fa-1x"></i> You may pay now </h1> 
            <div class="info">
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
                <span><span>Phone number</span></span>
              </label>
              <label>
                <div id="card-element" class="field is-empty"></div>
                <span><span>Credit or debit card</span></span>
              </label>
              <button class="pay" type="submit">Pay `+ total +` kr</button>
              <div class="outcome">
                <div class="error" role="alert"></div>
                <div class="success">
                  Success! Your Stripe token is <span class="token"></span>
                </div>
              </div>
            </form>
            
              <button onclick="page10()" type="button" class="btn ">
                BACK
              </button>
              <button onclick="page7()" type="button" class="btn continue">
              PROCEED
            </button>
              
            
            </div>`;


              var stripe = Stripe("pk_test_c1AMZEnN0unLBDXAr9nFo7xG00p6gwDTuQ");
              var elements = stripe.elements();

              var card = elements.create("card", {
                iconStyle: "solid",
                style: {
                  base: {
                    iconColor: "#8898AA",
                    color: "white",
                    lineHeight: "36px",
                    fontWeight: 300,
                    fontFamily: '"Roboto",  sans-serif',
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
