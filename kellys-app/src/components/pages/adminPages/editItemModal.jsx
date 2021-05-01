import React from 'react'
import '../../../css/modal.css'

const EditItem = ({show, hide, children}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none"
  
    return (
        <main className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="buttonExit" onClick={hide}>Close</button>
            </section>
        </main>
    )
}

export default EditItem