import { useState } from 'react';
import { nanoid } from 'nanoid';
import FormItem from './FormItem';

export default function FormInputHook() {
  const [cardRise, setCardRise] = useState({
    day: '',
    id: nanoid(),
    time: '',
    build: false,
    evo: false,
    evoSpeed: false,
    buildSpeed: false,
    huch: false,
    huchSpeed: false,
    egg: false,
    animal: false,
    buildPowerSpeed: false,
    evoPowerSpeed: false,
  });
  const riseDay = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const riseTime = [0, 1, 2, 3, 4, 5, 6, 7];
  const riseType = [
    'build',
    'evo',
    'evoSpeed',
    'buildSpeed',
    'huch',
    'huchSpeed',
    'egg',
    'animal',
    'buildPowerSpeed',
    'evoPowerSpeed',
    'buildPowerSpeedCheap',
  ];

  const HandlerCardRice = e => {
    console.log(e);
  };
  return (
    <div>
      <FormItem
        typeRise={riseType}
        timeRise={riseTime}
        dayRice={riseDay}
        onChangeRise={HandlerCardRice}
      />
    </div>
  );
}
