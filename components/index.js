import React from "react";

import CommonSection from "./commonSection";

import styles from "./home.module.css";

const HomepageComponent = () => {
  return (
    <div className="flex flex-col px-6 pt-[30px] pb-4">
      <div className="flex mb-10">
        <img src="/images/dashicons.svg" alt="back icon" />
        <div className="m-auto">Upcoming Appointments</div>
      </div>
      <div className="flex items-center mb-[13px] text-white p-4 justify-between rounded-[9px] bg-blueGradient h-[75px]">
        <div className=" font-bold text-[15px]">New Booking in 2 Minutes</div>
        <div className="bg-orangeGradient h-[36px] flex items-center justify-center rounded-[50px] w-[86px] text-center font-medium text-[13px]">
          Book Now
        </div>
      </div>
      <CommonSection test={false} />
      <CommonSection test={true} />
      <button className="bg-greyGradient shadow-CustomShadow rounded-[50px] h-[46px]">
        Back
      </button>
      {/* <div className="bg-[#F7F7F7]">
        <div className="flex items-center mb-7 justify-between mt-[22px]">
          <div className={styles.tabsTitle}>Clinic</div>
          <div className={styles.tabsTitle}>Test</div>
          <div className={styles.tabsTitle}>Surgery</div>
          <div className={styles.tabsTitle}>Medicine</div>
        </div>
        <div className="flex">
          <img src="/images/doctor.svg" alt="doctor icon" />
          <div className="ml-4">
            <div>17 september 2021, 9.30 PM</div>
            <div className="text-[#E97000]">appointment with doctor arun</div>
            <div>doctor world clinic</div>
          </div>
        </div>
        <div className="flex justify-between pb-8">
          <div className={styles.tabsButton}>RESCHEDULE</div>
          <div className={styles.tabsButton}>CANCEL</div>
          <div className={styles.viewButton}>
            <img src="/images/View.svg" alt="View icon" />
            <div>VIEW</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomepageComponent;
