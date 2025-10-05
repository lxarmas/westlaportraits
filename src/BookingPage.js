import React from "react";
import BookingForm from "./BookingForm";

function BookingPage( { availableTimes, dispatch } ) {
    return (
        <section className="booking-page py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
<h1 className="text-6xl font-serif text-gray-100 tracking-tight mb-10 text-center">
  <span className="border-b-2 border-gray-500 pb-2">If you have any questions please send us a message</span>
</h1>

                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
        </section>
    );
}

export default BookingPage;
