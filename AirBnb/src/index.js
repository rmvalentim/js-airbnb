import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoicmFmYWVsdmFsZW50aW0iLCJhIjoiY2p6bjE4ajFiMWJyYTNibzkzdTIxeGo1eiJ9.ZgY2dc8NhYXOiEXALkIqDA');

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => <Routes />;

export default App;
