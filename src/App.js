import React, { useEffect } from 'react';
import { Router,Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './helpers'
import { Controls } from './components/Controls'
import { stepActions, currentStepActions, formDataActions } from './actions'
import stepsData from './data/steps.data'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {

  useEffect(()=>{
    function setInitialData(){
      props.setSteps(stepsData.steps)
      props.setCurrentStep(stepsData.currentStep)
      props.setFormData(stepsData.formData)
    }
    setInitialData()
  }, [])


  return (
      <Router history = {history}>
        <Switch>
          <Route exact path='/' component={Controls} />
        </Switch>
      </Router>   
  );
}


const mapDispatchToProps = dispatch => ({
  setSteps: data => dispatch(stepActions.set(data)),
  setCurrentStep: data => dispatch(currentStepActions.set(data)),
  setFormData: data => dispatch(formDataActions.set(data))
})

export default connect(
  null, 
  mapDispatchToProps
)(App)

