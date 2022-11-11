import "./modal.css"

function Modal(props) {
    return (
        <div className={`modal-wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className="modal-body">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;