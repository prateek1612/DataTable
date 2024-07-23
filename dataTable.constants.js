export  const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'name', headerName: 'NAME', width: 150 },
    { field: 'description', headerName: 'DESCRIPTION', width: 200 },
    {
      field: 'status',
      headerName: 'STATUS',
      type: 'number',
      width: 200,
    },
    {
      field: 'rate',
      headerName: 'RATE',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'balance',
      headerName: 'BALANCE',
      type: 'number',
      width: 180,
    },
    {
      field: 'deposit',
      headerName: 'DEPOSIT',
      type: 'number',
      width: 120,
    },
  ];
  
 export  const rows = [
    { id: 1, description: 'Some description', name: 'Jon 254555458', status: 'open', rate: '$70 cad', balance: '34', deposit: '53' },
    { id: 2, description: 'Some description', name: 'Ryan 25586544', status: 'active', rate: '$50 cad', balance: '34', deposit: '53' },
    { id: 3, description: 'Some description', name: 'Roman 5456558', status: 'inactive', rate: '$80 cad', balance: '34', deposit: '53' },
    { id: 4, description: 'Some description', name: 'Dave 5854585', status: 'open', rate: '$60 cad', balance: '34', deposit: '53' },
    { id: 5, description: 'Some description', name: 'Michial 2542445', status: 'inactive', rate: '$30 cad', balance: '34', deposit: '53' },
    { id: 6, description: 'Some description', name: 'Smith 5664585', status: 'due', rate: '$56 cad', balance: '34', deposit: '53' },
    { id: 7, description: 'Some description', name: 'Harris 2455455', status: 'paid', rate: '$26 cad', balance: '34', deposit: '53' },
    { id: 8, description: 'Some description', name: 'Simon 524755', status: 'due', rate: '$12 cad', balance: '34', deposit: '53' },
    { id: 9, description: 'Some description', name: 'Justin 5785467', status: 'paid', rate: '$54 cad', balance: '34', deposit: '53' },
  ];