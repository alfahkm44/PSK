import React from 'react';
import Card from '../components/Elements/Card/expens';
import MainLayout from '../components/Layout/MainLayout';
const Expenccespage = () => {
  return (
    <MainLayout type="expencces">
      {/* top content start*/}
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-3/3">
        <Card />
        </div>
        </div>
      {/* top content end*/}
      {/* bottom content start*/}

      <div className="mb-4 sm:flex sm:gap-6">
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
  </div>
      <div className="mb-4 sm:flex sm:gap-6">
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
  </div>
      {/* <div className="sm:flex sm:gap-6">
    <div className="card1">
      <Card />
    </div>
    <div className="    sm:w-1/3">
      <div className="mb-4">
       <div className="card1">
        < Card />
       </div>
      <Card />
      </div>
      <div className="mb-6">
      <Card />
      </div>
    </div>
  </div> */}
      {/* bottom content end*/}
    </MainLayout>
  )
}

export default Expenccespage;