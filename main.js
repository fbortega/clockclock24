// clock digits
const DIGITS = [
  // 0
  [
    { hour: 3, minute: 30 }, // A
    { hour: 9, minute: 30 }, // B
    { hour: 6, minute: 0 }, // C
    { hour: 6, minute: 0 }, // D
    { hour: 3, minute: 0 }, // E
    { hour: 9, minute: 0 }, // F
  ],
  // 1
  [
    { hour: 7.5, minute: 37.5 },
    { hour: 6, minute: 30 },
    { hour: 7.5, minute: 37.5 },
    { hour: 6, minute: 0 },
    { hour: 7.5, minute: 37.5 },
    { hour: 0, minute: 0 },
  ],
  // 2
  [
    { hour: 3, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 0 },
    { hour: 3, minute: 0 },
    { hour: 9, minute: 45 },
  ],
  // 3
  [
    { hour: 3, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 15 },
    { hour: 9, minute: 0 },
    { hour: 3, minute: 15 },
    { hour: 9, minute: 0 },
  ],
  // 4
  [
    { hour: 6, minute: 30 },
    { hour: 6, minute: 30 },
    { hour: 3, minute: 0 },
    { hour: 6, minute: 0 },
    { hour: 7.5, minute: 37.5 },
    { hour: 0, minute: 0 },
  ],
  // 5
  [
    { hour: 3, minute: 30 },
    { hour: 9, minute: 45 },
    { hour: 3, minute: 0 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 15 },
    { hour: 9, minute: 0 },
  ],
  // 6
  [
    { hour: 3, minute: 30 },
    { hour: 9, minute: 45 },
    { hour: 6, minute: 0 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 0 },
    { hour: 9, minute: 0 },
  ],
  // 7
  [
    { hour: 3, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 7.5, minute: 37.5 },
    { hour: 6, minute: 0 },
    { hour: 7.5, minute: 37.5 },
    { hour: 0, minute: 0 },
  ],
  // 8
  [
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 0 },
    { hour: 9, minute: 0 },
    { hour: 3, minute: 0 },
    { hour: 9, minute: 0 },
  ],
  // 9
  [
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 3, minute: 0 },
    { hour: 6, minute: 0 },
    { hour: 3, minute: 15 },
    { hour: 9, minute: 0 },
  ],
];

function formatTime(time) {
  hr = time.getHours().toString();
  min = time.getMinutes().toString();

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;

  console.log(hr, min);

  return hr + min;
}

function hoursToDegrees(currTime, hourEl, index, digit) {
  hr_rotation = 30 * DIGITS[currTime[digit]][index].hour;
  hourEl.style.transform = `rotate(${hr_rotation}deg)`;
}
function minutesToDegrees(currTime, minuteEl, index, digit) {
  min_rotation = 6 * DIGITS[currTime[digit]][index].minute;
  minuteEl.style.transform = `rotate(${min_rotation}deg)`;
}

setInterval(() => {
  const currDate = new Date();

  const currTime = formatTime(currDate);

  // Selects all digits in clock, 4 expected
  const digits = document.querySelectorAll(".digit");

  digits.forEach((digitEl, digitIndex) => {
    // Selects all hour elements within each digit
    const hour = digitEl.querySelectorAll(".hour");
    // Selects all minute elements within each digit
    const minute = digitEl.querySelectorAll(".minute");

    // sets rotation style property for each hour hand element after converting hrs to degrees
    hour.forEach((hourEl, index) =>
      hoursToDegrees(currTime, hourEl, index, digitIndex)
    );
    // sets rotation style property for each minute hand element after converting mins to degrees
    minute.forEach((minuteEl, index) =>
      minutesToDegrees(currTime, minuteEl, index, digitIndex)
    );
  });
}, 1000);
