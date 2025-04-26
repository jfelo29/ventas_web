export default function Popup(props) {
    const { onClose, title } = props;
    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup__close" onclick={onClose}></button>

                {title && <h2 className="popup__title">{title}</h2>}

            </div>
        </div>
    );
}