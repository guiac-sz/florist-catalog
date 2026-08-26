import { useState } from "react";

import Header from "./components/Header/Header";
import ProductModal from "./components/ProductModal/ProductModal";
import Home from "./pages/Home/Home";

import { storeConfig } from "./config/storeConfig";

export default function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleWhatsApp() {
        const message = encodeURIComponent(
            "Olá! Vim pelo site da Ateliê Flora."
        );

        window.open(
            `https://wa.me/${storeConfig.whatsapp}?text=${message}`,
            "_blank"
        );
    }

    function handleOpenProduct(product) {
        setSelectedProduct(product);
    }

    function handleCloseProduct() {
        setSelectedProduct(null);
    }

    function handleAddToCart(product, quantity) {
        console.log(
            "Adicionar ao carrinho:",
            product,
            quantity
        );
    }

    return (
        <>
            <Header />

            <Home
                onWhatsApp={handleWhatsApp}
                onOpenProduct={handleOpenProduct}
                onAddToCart={handleAddToCart}
            />

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseProduct}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    );
}