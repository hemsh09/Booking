import React from "react";

import styles from "./home.module.css";

const CommonSection = ({ test }) => {
  return (
    <div className="bg-[#F7F7F7] mb-[13px] rounded-[9px] px-2">
      <div className="flex items-center mb-7 justify-between mt-[22px]">
        <div className={styles.clinicTitle}>Clinic</div>
        <div className={test ? styles.clinicTitle : styles.tabsTitle}>Test</div>
        <div className={styles.tabsTitle}>Surgery</div>
        <div className={styles.tabsTitle}>Medicine</div>
      </div>
      <div className="flex">
        <img src="/images/doctor.svg" alt="doctor icon" />
        <div className="ml-4 mb-7">
          <div>17 september 2021, 9.30 PM</div>
          <div className="text-[#E97000]">Appointment With Doctor Arun</div>
          <div>doctor world clinic</div>
          {test && (
            <div className="text-black text-[13px]">test : X-ray test</div>
          )}
        </div>
      </div>
      <div className="flex justify-between pb-8">
        <div className={styles.tabsButton}>RESCHEDULE</div>
        <div className={styles.tabsButton}>CANCEL</div>
        <div className={styles.viewButton}>
          <img src="/images/View.svg" alt="View icon" />
          <div className="ml-1">VIEW</div>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
