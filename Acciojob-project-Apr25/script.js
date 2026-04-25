document.addEventListener("DOMContentLoaded", function () {
    const statusDiv = document.getElementById("status");

    async function getMenu() {
    try {
        const res = await fetch("https://storage.googleapis.com/acciojob-open-file-collections/appsmith-uploads/bb3807e9b0bc49958d39563eb1759406.json");
        const data = await res.json();

        const menuContainer = document.getElementById("menu-container");

        menuContainer.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.imgSrc}" alt="${item.name}" />
            
            <div class="card-content">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price}/-</p>
                </div>

                <button class="add-btn">+</button>
            </div>
        </div>
        `).join("");

    } catch (error) {
        console.error("Error loading menu:", error);
    }
    }

    function TakeOrder() {
    statusDiv.innerText = "🧾 Taking your order...";

    return new Promise((resolve) => {
        setTimeout(() => {
        const burgers = ["Burger 1", "Burger 2", "Burger 3", "Burger 4", "Burger 5"];

        const order = {
            items: Array.from({ length: 3 }, () =>
            burgers[Math.floor(Math.random() * burgers.length)]
            )
        };

        console.log("Order:", order);
        resolve(order);
        }, 2500);
    });
    }

    function orderPrep() {
    statusDiv.innerText = "👨‍🍳 Preparing your food...";

    return new Promise((resolve) => {
        setTimeout(() => {
        const result = { order_status: true, paid: false };
        console.log("Prepared:", result);
        resolve(result);
        }, 1500);
    });
    }

    function payOrder() {
    statusDiv.innerText = "💳 Processing payment...";

    return new Promise((resolve) => {
        setTimeout(() => {
        const result = { order_status: true, paid: true };
        console.log("Paid:", result);
        resolve(result);
        }, 1000);
    });
    }

    function thankyouFnc() {
    alert("Thank you for eating with us today!");
    statusDiv.innerText = "✅ Order completed!";
    }

    async function startOrderFlow() {
    try {
        const order = await TakeOrder();
        const prep = await orderPrep(order);
        const payment = await payOrder(prep);

        if (payment.paid) {
        thankyouFnc();
        }
    } catch (error) {
        console.error("Flow error:", error);
    }
    }

    document.getElementById("orderBtn").addEventListener("click", startOrderFlow);

    window.onload = getMenu;
});