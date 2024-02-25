function fetchProductData() {
  fetch("https://fakestoreapi.com/products/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((product) => {
      const productInfoElement = document.getElementById("productInfo");
      productInfoElement.innerHTML = `
                <p><strong>Title:</strong> ${product.title}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Rating:</strong> ${product.rating.rate} / 5 (${product.rating.count} reviews)</p>
                <img src="${product.image}" alt="${product.title}" style="max-width: 300px; max-height: 300px;">
            `;
    })
    .catch((error) => {
      console.error("Error! fetching data:", error);
      const productInfoElement = document.getElementById("productInfo");
      productInfoElement.innerHTML = "<p>Error! fetching data</p>";
    });
}

document.addEventListener("DOMContentLoaded", fetchProductData);
