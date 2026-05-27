// OBTENER CARRITO
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// GUARDAR CARRITO
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// AGREGAR PRODUCTO
// function addToCart(name, price, image) {

//     let cart = getCart();

//     cart.push({
//         name,
//         price,
//         image
//     });

//     saveCart(cart);

//     updateCartCount();

//     alert("Producto agregado al carrito");
// }


// SELECCIONAR TALLA
function selectSize(button) {

    let container = button.parentElement;

    let buttons = container.querySelectorAll(".btn-size");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

// AGREGAR AL CARRITO
function addToCart(button, name, price, image) {

    let cardBody = button.closest(".card-body");

    let selectedSize = cardBody.querySelector(".btn-size.active");

    // VALIDAR TALLA
    if (!selectedSize) {
        alert("Selecciona una talla");
        return;
    }

    let size = selectedSize.textContent.trim();

    let cart = getCart();

    cart.push({
        name,
        price,
        image,
        size
    });

    saveCart(cart);

    updateCartCount();

    alert(`Producto agregado - Talla ${size}`);
}


// ACTUALIZAR CONTADOR
function updateCartCount() {

    let cart = getCart();

    let countElement = document.getElementById("cart-count");

    if (countElement) {
        countElement.textContent = cart.length;
    }
}

// CARGAR CONTADOR
updateCartCount();



// OBTENER FAVORITOS
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// GUARDAR FAVORITOS
function saveFavorites(favorites) {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}

// AGREGAR A FAVORITOS
function addToFavorites(name, price, image) {

    let favorites = getFavorites();

    // EVITAR DUPLICADOS
    let exists = favorites.find(
        item => item.name === name
    );

    if (exists) {
        alert("Este producto ya está en favoritos");
        return;
    }

    favorites.push({
        name,
        price,
        image
    });

    saveFavorites(favorites);

    updateFavoritesCount();

    alert("Producto agregado a favoritos");
}

// CONTADOR
function updateFavoritesCount() {

    let favorites = getFavorites();

    let countElement =
        document.getElementById("favorites-count");

    if (countElement) {
        countElement.textContent = favorites.length;
    }
}

// CARGAR CONTADOR
updateFavoritesCount();

