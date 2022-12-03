import React, {useEffect, useRef, useState} from "react";


const CarDetails = ({model = '', year = '2000-01-01', color = '#000000'}) => {

    const [carModel, setCarModel] = useState(model);
    const [carYear, setCarYear] = useState(year);
    const [carColor, setCarColor] = useState(color);

    const carModelInputRef = useRef(null);
    const carYearInputRef = useRef(null);
    const carColorInputRef = useRef(null);

    useEffect(() => {
        carModelInputRef.current.value = model;
        carYearInputRef.current.value = year;
        carColorInputRef.current.value = color;
    }, [model, year, color]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setCarModel(event.target.elements.carModel.value);
        setCarYear(event.target.elements.carYear.value);
        setCarColor(event.target.elements.carColor.value);

        console.log(carModel, carYear, carColor);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="carModel" type="text" ref={carModelInputRef}/>
                <input name="carYear" type="date" ref={carYearInputRef}/>
                <input name="carColor" type="color" ref={carColorInputRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};


export default CarDetails;
