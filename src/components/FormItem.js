import { useEffect, useState } from 'react';
const numberOfDay = 0;
const timeNow = 0;
const time = 0;
const checkedRise = true;
export default function FormItem({
  typeRise,
  timeRise,
  dayRise,
  onChangeRise,
}) {
  onChangeRise = checkedRise => {
    console.log(checkedRise);
    time = time + 1;
  };
  useEffect(() => {
    const day = dayRise[numberOfDay];
  }, [numberOfDay]);

  return (
    <div>
      {typeRise}
      <input
        type="checkbox"
        name={typeRise}
        checked={{ checkedRise }}
        onChange={{ onChangeRise }}
      />
    </div>
  );
}
