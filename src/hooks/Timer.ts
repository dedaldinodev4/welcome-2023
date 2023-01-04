import { IDate } from "../dtos"

//* SetDays Fucntion *//
const setDays = (seconds: number): number => {
  return Math.floor(seconds/86400);
}
//* SetHours Fucntion *//
const setHours = (seconds: number): number => {
  return Math.floor(seconds/3600);
}
//* SetMinutes Fucntion *//
const setMinutes = (seconds: number): number => {
  return Math.floor(seconds/60);
}
//* SetSeconds Fucntion *//
const setSeconds = (currentValue: number, minutes: number): number => {
  return Math.floor(currentValue - minutes * 60);
}


export const TimerHook = (): IDate[] => {
  const LAUNCH = new Date(2023, 0, 1, 0, 0,0);
  const now = new Date();
  
  let seconds = now.getTimezoneOffset() * 60 + (LAUNCH.getTime() - now.getTime())/1000;
  let days = setDays(seconds);
  seconds -= days * 86400;

  let hours = setHours(seconds)
  seconds -= hours*3600;

  let minutes = setMinutes(seconds)
  seconds =setSeconds(seconds, minutes)
  setTimeout(TimerHook , 1000);

  return [
    {
      text: 'Dia',
      value: days.toString(),
      key: 'days'
    },
    {
      text: 'Hora',
      value: hours.toString(),
      key: 'hours'
    },
    {
      text: 'Minuto',
      value: minutes.toString(),
      key: 'minutes'
    },
    {
      text: 'Segundo',
      value: seconds.toString(),
      key: 'seconds'
    },
  ];
} 