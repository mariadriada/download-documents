import React, { useState } from 'react'
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import { Form } from '../Form'
import stepsData from './steps'

function Controls() {

    const [state, setState] = useState(stepsData)
    //const [ content, setContent ] = useState()

    console.log('controls', stepsData)

    // const addStep = () => {
    //     //const { steps } = state;
    //     const newSteps = [...state];
    //     newSteps.push({
    //       title: 'title',
    //       description: 'Description',
    //     });
    //     setState({ steps: newSteps });
    //   };

    const LayoutContendio = (props) => {

        switch(props.contenido) {
   
         case 0: return <Form/>; break;
        //  case 2: return <componente2/>; break;
        //  case 3: return <componente3/>; break;
         default: return <componente1/>; break;
   
       } 
    }

    return (
        <div>
            <div>
                <LayoutContendio contenido={state.initial} />
            </div>
            <Steps current={state.initial}>
            {state.steps.map((step, i) => (
                <Step key={i} {...step} />
            ))}
            </Steps>
           
      </div>
    )
}


export { Controls }