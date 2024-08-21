import React from "react";

const Hours = ({ namespace }: { namespace: string }) => {
  // const july7th = new Date("2024-07-07T00:00:00.000-06:00");
  // const nowDay = new Date();
  return (
    <div>
      <h4 className={`${namespace}__hours-title`}>Hours</h4>
      <ul className={`${namespace}__hours-list`}>
        <li>Sunday 11AM–10PM</li>
        <li>Monday-Thursday 11AM–9PM</li>
        <li>Friday & Saturday 11AM–12AM</li>
      </ul>

      {/* {nowDay < july7th && (
        <div>
          <h4 className={`${namespace}__hours-title`}>Holiday Hours</h4>
          <ul className={`${namespace}__hours-list`}>
            <li>Thursday, July 4th 12PM–6PM</li>
            <li>Friday, July 5th 11AM–9PM</li>
            <li>Saturday, July 6th 11AM–9PM</li>
            <li>Sunday, July 7th 11AM–9PM</li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Hours;
