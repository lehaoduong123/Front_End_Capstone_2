import {useState} from 'react';
import FormField from './FormField';

const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData
}) => {
    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Anniversary', 'Other'];
    const invalidDateErrorMessage = 'Please select a date';
    const invalidTimeErrorMessage = 'Please select a time';
    const invalidOccasionErrorMessage = 'Please select a valid occasion';
    const invalidNumberOfGuestsErrorMessage = 'Please enter a number between 1 and 10';

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [occasion, setOccasion] = useState(occasions[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(minimumNumberOfGuests);

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isOccasionValid = () => occasions!=='';
    const isNumberOfGuestsValid = () => numberOfGuests !== '';

    const areAllFieldsValid = () => {
        return isDateValid() && isTimeValid() && isOccasionValid() && isNumberOfGuestsValid();
    }

    const handleDataChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    const handleFormSubmit = e => {
        e.predentDefault();
        submitData({date, time, numberOfGuests, occasion,});
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormField label='Date' htmlFor='booking-date' hasError={!isDateValid()} errorMessage={invalidDateErrorMessage}>
                <input type ='date' id='booking-date' value={date} min={minimumDate} onChange={handleDataChange}/>
            </FormField>
            <FormField label='Time' htmlFor='booking-time' hasError={!isTimeValid()} errorMessage={invalidTimeErrorMessage}>
                <select id='booking-time' value={time} onChange={handleTimeChange} name='booking-time' required={true}>
                    {availableTimes.map(time, 
                                        <option data-testid='booking-time-option' key={time}>{time}
                                        </option>)}
                </select>
            </FormField>
            
        </form>
    )
}; 
