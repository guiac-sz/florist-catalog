import "./Cart.css";

export default function Cart({
    items,
    onClose,
    onIncrease,
    onDecrease,
    onRemove,
    onCheckout
}) {
    const totalItems = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = items.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const formattedTotal = totalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return (
        <div
            className="cart-overlay"
            onClick={onClose}
        >
            <aside
                className="cart"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="cart-header">
                    <div>
                        <span className="cart-eyebrow">
                            Seu pedido
                        </span>

                        <h2>Carrinho</h2>
                    </div>

                    <button
                        className="cart-close"
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar carrinho"
                    >
                        ×
                    </button>
                </div>

                <div className="cart-count">
                    {totalItems}{" "}
                    {totalItems === 1
                        ? "item selecionado"
                        : "itens selecionados"}
                </div>

                {items.length > 0 ? (
                    <>
                        <div className="cart-items">
                            {items.map((item) => {
                                const formattedPrice =
                                    item.price.toLocaleString(
                                        "pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL"
                                        }
                                    );

                                const formattedSubtotal = (
                                    item.price *
                                    item.quantity
                                ).toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL"
                                    }
                                );

                                return (
                                    <article
                                        className="cart-item"
                                        key={item.id}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div className="cart-item-content">
                                            <div className="cart-item-top">
                                                <div>
                                                    <strong>
                                                        {item.name}
                                                    </strong>

                                                    <span>
                                                        {formattedPrice}
                                                    </span>
                                                </div>

                                                <button
                                                    className="cart-remove"
                                                    type="button"
                                                    onClick={() =>
                                                        onRemove(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Remover
                                                </button>
                                            </div>

                                            <div className="cart-item-bottom">
                                                <div className="cart-quantity">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            onDecrease(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        −
                                                    </button>

                                                    <span>
                                                        {
                                                            item.quantity
                                                        }
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            onIncrease(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <strong>
                                                    {
                                                        formattedSubtotal
                                                    }
                                                </strong>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total do pedido</span>
                                <strong>{formattedTotal}</strong>
                            </div>

                            <p>
                                Você será direcionado ao WhatsApp
                                para confirmar disponibilidade,
                                entrega e pagamento.
                            </p>

                            <button
                                className="cart-checkout"
                                type="button"
                                onClick={onCheckout}
                            >
                                Finalizar pelo WhatsApp
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="cart-empty">
                        <h3>Seu carrinho está vazio</h3>

                        <p>
                            Adicione flores ou presentes para
                            montar seu pedido.
                        </p>
                    </div>
                )}
            </aside>
        </div>
    );
}