import React from "react";

import Calender from "../components/Clock/Calender";

const Monthly = () => {
  return (
    <>
      <div className="mx-auto px-5 bg-white min-h-sceen">
        <div className="grid divide-y divide-neutral-200  mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>労働日数</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>労働時間</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a
                credit card or other secure online payment method.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> 残休暇日数</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="flex  justify-start">
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">総休暇日数</p>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ml-10">休暇取得数</p>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ml-10">残有給日数</p>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ml-10 ">残特別休暇日数</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      <Calender />
    </>
  );
};

export default Monthly;
