const stepsData = {
    currentStep: 2,
    steps: [
      {
        title: 'Step 1',
        description:
          'This is step 1',
      },
      {
        title: 'Step 2',
        description:
          'This is step 2',
      },
      {
        title: 'Step 3',
        description:
          'This is step 3',
      },
    ],
    formData: [
      { label: 'Cédula', name: 'cedula', type: 'input', placeholder: 'Ingrese su cédula', variant: 'number' },
      { label: 'Contraseña', name: 'password', type: 'input', variant: 'password' },
      { label: 'Documento que dese extraer', name: 'document', type: "select", options: [
        { id: 1, option: 'RUT', value: 'rut' },
        { id: 2, option: 'Declaración pasada', value: 'declaracion' },
        { id: 3, option: 'Información reportada por terceros', value:'terceros' }
      ] },
    ]
}

export default stepsData
  