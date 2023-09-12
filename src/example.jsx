import React from 'react';
import ReactDOM from 'react-dom';

const itemsArray = [
  { name: 'Drake' },
  { name: 'Halsey' },
  { name: 'Camillo Cabello' },
  { name: 'Travis Scott' },
  { name: 'Bazzi' },
  { name: 'Flume' },
  { name: 'Nicki Minaj' },
  { name: 'Kodak Black' },
  { name: 'Tyga' },
  { name: 'Buno Mars' },
  { name: 'Lil Wayne' },
];

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    <h2 className="text-2xl font-bold mb-3">{itemsArray[index].name}</h2>
  </div>
);

const Example = () => (
  <div
    style={{
      height: 450,
      width: 300,
    }}
    class="List"
  >
    {itemsArray.map((item, index) => Row({ index }))}
  </div>
);
export default Example;
