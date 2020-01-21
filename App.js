import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Encuesta_Inicio from './components/encuestas/Encuestas_Inicio';
import NuevaEncuesta from './components/encuestas/NuevaEncuesta';
import Encuestas from './components/encuestas/Encuestas';
import Inicio from './components/Inicio';
import Partidos_Inicio from './components/partidos/Partidos_inicio';
import NuevoPartido from './components/partidos/NuevoPartido';
import Partidos from './components/partidos/Partidos';
import Candidatos_Inicio from './components/candidatos/Candidatos_Inicio'; 
import NuevoCandidato from './components/candidatos/NuevoCandidato';
import Candidatos from './components/candidatos/Candidatos';
import EditarPreguntas from './components/encuestas/EditarPreguntas';


const MainNavigator = createStackNavigator({
  Inicio:{ 
  screen: Inicio,
  navigationOptions: {
    title: 'APPENCUESTA',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Encuesta_Inicio:{ 
  screen: Encuesta_Inicio,
  navigationOptions: {
    title: 'ENCUESTAS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  NuevaEncuesta:{ 
  screen: NuevaEncuesta,
  navigationOptions: {
    title: 'NUEVA ENCUESTA',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Encuestas:{ 
  screen: Encuestas,
  navigationOptions: {
    title: 'ENCUESTAS REGISTRADAS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  EditarPreguntas:{ 
  screen: EditarPreguntas,
  navigationOptions: {
    title: 'EDITAR PREGUNTAS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Partidos_Inicio:{ 
  screen: Partidos_Inicio,
  navigationOptions: {
    title: 'PARTIDOS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  NuevoPartido:{ 
  screen: NuevoPartido,
  navigationOptions: {
    title: 'NUEVO PARTIDO',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Partidos:{ 
  screen: Partidos,
  navigationOptions: {
    title: 'PARTIDOS REGISTRADOS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Candidatos_Inicio:{ 
  screen: Candidatos_Inicio,
  navigationOptions: {
    title: 'CANDIDATOS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  NuevoCandidato:{ 
  screen: NuevoCandidato,
  navigationOptions: {
    title: 'NUEVO CANDIDATO',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 
  Candidatos:{ 
  screen: Candidatos,
  navigationOptions: {
    title: 'CANDIDATOS REGISTRADOS',
    headerStyle: {
      backgroundColor: '#00B6B9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  }, 

}, {headerLayoutPreset: 'center'});

const App = createAppContainer(MainNavigator);

export default App;

