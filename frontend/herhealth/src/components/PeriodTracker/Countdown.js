import React, { useState, useEffect } from "react";

const Countdown = ({ cycleLength, lastPeriodDate }) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Check if lastPeriodDate is a valid Date object
    if (!lastPeriodDate || !(lastPeriodDate instanceof Date)) {
      // Handle the case where lastPeriodDate is not valid
      setCountdown(null); // or setCountdown(0) depending on your desired behavior
      return;
    }

    const currentDate = new Date();
    const daysSinceLastPeriod = Math.floor(
      (currentDate - lastPeriodDate) / (1000 * 60 * 60 * 24)
    );
    const daysUntilNextPeriod =
      cycleLength - (daysSinceLastPeriod % cycleLength);

    // Ensure that the countdown value is not negative
    const countdownValue = Math.max(0, daysUntilNextPeriod);
    setCountdown(countdownValue);
  }, [cycleLength, lastPeriodDate]);

  return (
    <div className="countdown-container">
      <p className="countdown-label">
        Your next period is most likely to start in:
      </p>
      {countdown !== null ? (
        <p className="countdown-value">{countdown.toFixed(0)} days</p>
      ) : (
        <p className="countdown-value">Invalid date</p>
      )}
    </div>
  );
};

export default Countdown;
