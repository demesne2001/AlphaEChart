import './App.css';
import AntVcharts from './components/AntVcharts';
import CylinderChart from './components/CylinderChart';
import { Demobullet } from './components/Demochart';
import ExtraCharts from './components/ExtraCharts';
import Statistic from './components/Statistic';
import TestComp from './components/TestComp';

function App() {
  
  return (
    <>
      <TestComp />
      <ExtraCharts />
      <AntVcharts />
      {/* <Statistic /> */}
      {/* <CylinderChart /> */}

      <Demobullet />
      

    </>
  );
}

export default App;
