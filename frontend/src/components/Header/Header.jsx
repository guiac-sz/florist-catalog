import { useState } from "react";
import { storeConfig } from "../../config/storeConfig";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleWhatsApp() {
        const message = encodeURIComponent(
            "Olá! Vim pelo site e gostaria de fazer um pedido."
        );

        window.open(
            `https://wa.me/${storeConfig.whatsapp}?text=${message}`,
            "_blank"
        );
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className="top-bar">
                Entrega em Sorocaba • Pedidos pelo WhatsApp • Flores frescas todos os dias
            </div>

            <header className="main-header">
                <a href="#inicio" className="brand" onClick={closeMenu}>
                    <div className="brand-mark">❀</div>
                    <strong>{storeConfig.name}</strong>
                </a>

                <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
                    <a href="#inicio" onClick={closeMenu}>
                        Início
                    </a>

                    <a href="#catalogo" onClick={closeMenu}>
                        Catálogo
                    </a>

                    <a href="#sobre" onClick={closeMenu}>
                        Sobre
                    </a>

                    <a href="#localizacao" onClick={closeMenu}>
                        Localização
                    </a>

                    <a href="#contato" onClick={closeMenu}>
                        Contato
                    </a>
                </nav>

                <div className="header-actions">
                    <button
                        className="header-whatsapp-button"
                        onClick={handleWhatsApp}
                    >
                        Pedir pelo WhatsApp
                    </button>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir menu"
                        aria-expanded={isMenuOpen}
                    >
                        ☰
                    </button>
                </div>
            </header>
        </>
    );
}