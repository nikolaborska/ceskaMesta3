import { createRoot } from 'react-dom/client';
import './global.css';
import {cities} from './cz-cities';
import {City} from './city/city';


const city =  new Map(Object.entries(cities));

const App = () => {
  return(
    <>
      <h1>Cities in the Czech Republic:</h1>
      <div className='cityDiv'>
        {cities.map((n) => (
          <City name = {n.name} photo = {n.photo} population = {n.population} area = {n.area} district = {n.district} key = {n.city}></City>
        ))}
      </div>
    </>
  )
};

createRoot(
  document.querySelector('#app'),
).render(<App />);