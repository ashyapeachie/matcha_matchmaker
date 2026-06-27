const matchaCollection = [];

const form = document.getElementById("matcha-form");
const container = document.getElementById("matcha-container");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const brand = document.getElementById("brand").value;
    const grade = document.getElementById("grade").value;
    const rating = document.getElementById("rating").value;

    const newMatcha = new Matcha(
        brand,
        grade,
        rating,
        "",
        "",
        false
    );

    matchaCollection.push(newMatcha);
    displayMatcha();
    form.reset();
});

function displayMatcha() {
    container.innerHTML = "";

    matchaCollection.forEach(matcha => {
        container.innerHTML += `
        <div class="matcha-card">
            <div class="card-header">
                <h3> ${matcha.brand}</h3>
                ${matcha.favorite ? "❤️" : ""}
            </div>

            <span class="grade-badge">
                ${matcha.grade}
            </span>

            <p class="rating">
                ${"⭐".repeat(matcha.rating)}
            </p>

            <p>
                💵 $${matcha.price}
            </p>

            <p>
                🌿 ${matcha.notes}
            </p>
        </div>
        `;

    });
}
