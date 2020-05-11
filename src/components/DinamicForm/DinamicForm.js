import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { submitDataActions, currentStepActions, documentActions } from '../../actions'
import { STEPS } from '../../constants'
import './form.style.scss'


function DinamicFormComponent(props) {

    const { formData, currentStep } = props
    const data = formData.length>=1?formData[currentStep]:{}

    const onSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.elements[name].value
        
        event.target.reset()
        await props.setSubmitData(name, value)

        if(currentStep < STEPS.STEPS-1)
            await props.setCurrentStep(currentStep+1)
        else if(currentStep === STEPS.STEPS-1) 
            await props.get(Object.assign(props.submitData, {[name]: value}))
    }

    const goBack = () => {
        if(currentStep!==0)
        props.setCurrentStep(currentStep-1)
    }
    
    return (
        <div className="form-container">
            {
                Object.keys(data).length>=1?
                <Form onSubmit={onSubmit} name={data.name}>
                    {
                        data.type==='input'?
                        <Form.Group controlId={data.name}>
                            <Form.Label>{data.label}</Form.Label>
                            <Form.Control 
                            type={data.variant} required={true} placeholder={data.placeholder} />
                        </Form.Group>:
                        data.type==='select'?
                        <Form.Group controlId={data.name}>
                            <Form.Label>{data.label}</Form.Label>
                                <Form.Control as="select">
                                {
                                    data.options.map(option=>(
                                    <option key={option.id} value={option.value}>{option.option}</option>
                                    ))
                                }
                                </Form.Control>
                        </Form.Group>:
                        null
                    }
                    <div className="buttons-container">
                        <Button type="button" variant="primary" onClick={goBack}>Atras</Button>{' '}
                        <Button type="submit" variant="primary">Siguiente</Button>
                    </div>
                </Form>
                :null
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    formData: state.formData,
    submitData: state.submitData
})

const mapDispatchToProps = dispatch => ({
    setSubmitData: (name, value) => dispatch(submitDataActions.set(name, value)),
    setCurrentStep: data => dispatch(currentStepActions.set(data)),
    get: data => dispatch(documentActions.get(data))
})
  
const DinamicForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(DinamicFormComponent)

export { DinamicForm }