function timeWord(time) {
  const hoursWords = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "noon",
  ];

  const minutesWords = [
    "oh",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tensWords = ["", "", "twenty", "thirty", "forty", "fifty"];

  const [hour, minute] = time.split(":").map(Number);
  const isMorning = hour < 12;
  const period = isMorning ? "am" : "pm";

  if (hour === 0 && minute === 0) {
    return hoursWords[0];
  } else if (hour === 12 && minute === 0) {
    return hoursWords[12];
  } else {
    const hourWord = hoursWords[hour === 12 || hour === 0 ? 12 : hour % 12];
    let minuteWord = "";

    if (minute === 0) {
      minuteWord = "";
    } else if (minute < 20 || minute % 10 === 0) {
      minuteWord = minutesWords[minute];
    } else {
      minuteWord = `${tensWords[Math.floor(minute / 10)]} ${
        minutesWords[minute % 10]
      }`;
    }

    return `${hourWord} ${minuteWord} ${period}`;
  }
}
