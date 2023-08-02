import {userReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';
import {fetchAPI} from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(data));
    return (response.length!==0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => 
    [...initialAvailableTimes,...fetchAPI(new Date())];

const Bookings = () => {
    const [availableTimes, dispatchOnDataChange] = userReducer(
        updateTimes,[], initialAvailableTimes);

    const submitData = formData => {
        const response = submitAPI(formData);
        if (respose) navigate(pages.get('confirmedBooking').path);
    };

    return (
        <div>
            <h2>Table reservation</h2>
            <BookingForm availableTimes={availableTimes}
                dispatchOnDataChange={dispatchOnDataChange}
                submitData={submitData} />
        </div>
    );
}

export default Bookings;