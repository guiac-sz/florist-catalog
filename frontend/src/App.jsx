import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import { storeConfig } from "./config/storeConfig";

export default function App() {
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
        console.log("Abrir produto:", product);
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
        </>
    );
}