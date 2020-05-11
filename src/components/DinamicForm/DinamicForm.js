import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Form1 } from './Form1'
import { submitDataActions, currentStepActions } from '../../actions'
import { STEPS } from '../../constants'


function DinamicFormComponent(props) {


    console.log('PROPS en dinamic form ', props.formData)
    const { formData, currentStep } = props
    const data = formData.length>=1?formData[currentStep]:{}

    const onSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.elements[name].value
        
        console.log('value', value)
        console.log('name', name)
        
      
        props.setSubmitData(name, value)
        if(currentStep!==STEPS.STEPS-1)
        props.setCurrentStep(currentStep+1)
        event.target.reset()
    }
    
    return (
        <div>
            {
                Object.keys(data).length>=1?
                <Form onSubmit={onSubmit} name={data.name}>
                    {
                        data.type==='input'?
                        <Form.Group controlId={data.name}>
                            <Form.Label>{data.label}</Form.Label>
                            <Form.Control type={data.variant} required={true}  placeholder={data.placeholder} />
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
                    {/* <Button type="submit" variant="primary" onClick={onSubmit}>Primary</Button> */}
                    <Form.Control type="submit" placeholder={data.placeholder} />
                </Form>
                :null
               
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    formData: state.formData //.filter((item, index) => index===state.currentStep)
})

const mapDispatchToProps = dispatch => ({
    setSubmitData: (name, value) => dispatch(submitDataActions.set(name, value)),
    setCurrentStep: data => dispatch(currentStepActions.set(data)),
})
  

const DinamicForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(DinamicFormComponent)

//export { DinamicFormComponent }


export { DinamicForm }