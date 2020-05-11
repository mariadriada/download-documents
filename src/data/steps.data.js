const stepsData = {
    currentStep: 0,
    steps: [
      {
        title: 'Paso 1',
        description:
          'Cedula',
      },
      {
        title: 'Paso 2',
        description:
          'Contraseña',
      },
      {
        title: 'Paso 3',
        description:
          'Tipo de documento',
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
  