import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import { DinamicForm } from '../DinamicForm'
import { Document } from '../Document'
import './controls.style.scss'

function controlsComponent(props) {


    const { steps, currentStep} = props

    return (
        <>
        <Document />
        <div className="controls-container">
            <h1 align="center">Formulario para descargar documentos</h1>

            <div className="dinamic-form-container">
                <DinamicForm currentStep={currentStep} />
            </div>

            <Steps current={currentStep} className="steps-container">
                { steps.length>=1 && steps.map((step, i) => (
                    <Step key={i} {...step} />
                )) }
            </Steps>
            
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    steps: state.steps,
    currentStep: state.currentStep
})

const Controls = connect(
    mapStateToProps,
    null
)(controlsComponent)

export { Controls }