const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const btn = document.getElementById("submit");
const container = document.querySelector(".submissions-list");

btn.addEventListener("click", () => {
  const HTML = `
            <div class="submission-item">
              <div class="submission-details">
                <div class="detail-row">
                  <p class="detail-label">Name:</p>
                  <p class="detail-value">${nameInput.value}</p>
                </div>
                <div class="detail-row">
                  <p class="detail-label">Email:</p>
                  <p class="detail-value">${emailInput.value}</p>
                </div>
                <div class="detail-row">
                  <p class="detail-label">Age:</p>
                  <p class="detail-value">${ageInput.value}</p>
                </div>
              </div>
            </div> 
`;
  container.insertAdjacentHTML("beforeend", HTML);
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
});
