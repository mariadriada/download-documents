import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import { DinamicForm } from '../DinamicForm'

function controlsComponent(props) {

   // const [state, setState] = useState(stepsData)
    //const [ content, setContent ] = useState()

    //console.log('controls', stepsData)

    // const addStep = () => {
    //     //const { steps } = state;
    //     const newSteps = [...state];
    //     newSteps.push({
    //       title: 'title',
    //       description: 'Description',
    //     });
    //     setState({ steps: newSteps });
    //   };

    /*const LayoutContendio = (props) => {

        switch(props.contenido) {
   
         case 0: return <DinamicForm/>; break;
        //  case 2: return <componente2/>; break;
        //  case 3: return <componente3/>; break;
         default: return <componente1/>; break;
   
       } 
    }*/
    //console.log('props ', props)

    const { steps, currentStep} = props

    return (
        <div>
            controls
            <div>
                <DinamicForm currentStep={currentStep} />
            </div>
            <Steps current={currentStep}>
            { steps.length>=1 && steps.map((step, i) => (
                <Step key={i} {...step} />
            )) }
            </Steps>
        </div>
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