import React from 'react';
// ant
export default function Rises({ risesList, onDeleteRises }) {
  return (
    <div>
      <h1>Rises</h1>
      <ul>
        {risesList.map(
          ({
            id,
            day,
            time,
            build,
            evo,
            evoSpeed,
            buildSpeed,
            huch,
            huchSpeed,
            egg,
            animal,
            evoPowerSpeed,
            buildPowerSpeed,
          }) => (
            <li key={id}>
              <p>
                {day} {'время в'}
                {}
                {time} {evo && 'evo'} {build && 'build'} {huch && 'huch'}{' '}
                {evoSpeed && 'evoSpeed'} {buildSpeed && 'buildSpeed'}{' '}
                {huchSpeed && 'huchSpeed'} {animal && 'animal'}{' '}
                {evoPowerSpeed && 'evoPowerSpeed'} {egg && 'egg'}{' '}
                {buildPowerSpeed && 'buildPowerSpeed'}{' '}
                <button type="button" onClick={() => onDeleteRises(id)}>
                  delete
                </button>
              </p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
