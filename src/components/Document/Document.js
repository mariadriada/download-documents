import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { XCircleFill } from 'react-bootstrap-icons';
import Loading from '../../static/spinner.gif'
import { documentActions } from '../../actions/document.action'

import './document.style.scss'

function DocumentComponent(props) {

    const [show, setShow] = useState(false)
    const { loading, error, blob, showModal } = props.document 
    const { cedula, document } = props.submitData

    const onClose = () => {
        if(!loading) props.hideModal()
        else setShow(true)
    }

    return (
        showModal &&
        <div className="document-container" >
            <Alert variant="warning" show={show} onClose={() => setShow(false)} dismissible>
                Por favor espere a que la búsqueda del documento finalice
            </Alert>
            <XCircleFill className="icon-close" onClick={onClose} />
            {
                loading && 
                <>
                <img src={Loading} />
                <span>Buscando documento</span>
                </>
            }
            {
                !error && !loading &&
                <> 
                <h4>Se ha encontrado un documento!</h4>
                <span> Si la descarga no se inicia automaticamente, haz clic </span>
                <a href={blob} download={`${cedula}_${document}`} onClick={onClose}>
                    aquí
                </a>
                </>
            }
            {
                error &&
                <Alert variant="danger">
                    <Alert.Heading>Ocurrió un error al buscar el documento!</Alert.Heading>
                    <p>
                        Por favor cierre la ventana y verifique la información ingresada.
                    </p>
                </Alert>
            }
        </div>
    )
}

const mapStateToProps = ({document, submitData}) => ({
    document,
    submitData
})

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(documentActions.hideModal())
})

const Document = connect(
    mapStateToProps,
    mapDispatchToProps
)(DocumentComponent)

export { Document }