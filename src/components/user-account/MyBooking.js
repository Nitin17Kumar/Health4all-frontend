import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "../Spinner/Spinner";

const MyBooking = ({ bookings }) => {
    const { loading } = useContext(AuthContext);
    const [book, setBook] = useState(bookings);

    return (
        <div>
            {loading && <Spinner />}
            {!loading && book && book.length > 0 ? (
                <>
                    <h1 className="text-center text-xl text-red-800 font-bold"> Booking Details </h1>
                    <ol> 
                        {book.map((book1) => (
                            <div className="border-2 p-2 px-5 mt-4">
                            <li key={book1.id} className="text-lg font-medium"><span className="text-red-800 text-lg font-bold">
                                Doctor Name : </span>{book1.doctor.name}</li>
                            <li key={book1.id} className="text-lg font-medium"><span className="text-red-800 text-lg font-bold">
                                Price : </span>{book1.ticketPrice}</li>
                            <li key={book1.id} className="text-lg font-medium"><span className="text-red-800 text-lg font-bold">
                                Date & Time : </span>{book1.appointmentDate}</li>
                            <li key={book1.id} className="text-lg font-medium"><span className="text-red-800 text-lg font-bold">
                                Code to Join Meeting : </span>{book1.code}</li>

                            </div>
                        ))}
                    </ol>
                </>
            ) : (
                <div>
                    <h2 className='mt-5 text-center text-headingColor font-semibold text-xl'>
                        You did not book any doctor yet!
                    </h2>
                </div>
            )}
        </div>
    );
};

export default MyBooking;
