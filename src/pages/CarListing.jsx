import React, { useEffect, useState } from 'react'
import "./CarListing.css"
import audi1 from "../assets/cars/audi1.jpg"
import audi2 from "../assets/cars/audi2.jpg"
import benz1 from "../assets/cars/benz1.jpg"
import benz2 from "../assets/cars/benz2.jpg"
import ferrari1 from "../assets/cars/ferrari1.jpg"
import ferrari2 from "../assets/cars/ferrari2.jpg"
import porshe1 from "../assets/cars/porshe1.jpg"
import tesla1 from "../assets/cars/tesla1.jpg"
import tesla2 from "../assets/cars/tesla2.jpg"
import { useSearchParams } from 'react-router-dom'

function CarListing() {
    const cars = ["Audi", "Benz", "Tesla", "Porshe", "Ferrari"]

    const [selectedCar, setSelectedCar] = useState([]);
    const [searchparams, setSearchParams] = useSearchParams();

    const handleCarSelect = (car)=> {
        setSelectedCar((prev) => 
        prev.includes(car) ?
        prev.filter((c) => c !== car) :
    [...prev, car]
        )
    }

    useEffect(() => {
        if(selectedCar.length > 0){
            const query = new URLSearchParams({car: selectedCar.join(",")})
            setSearchParams(query)
        }
        else{
            setSearchParams({})
        }
    }, [selectedCar, setSearchParams])
  return (
    <div className='parent'>
        <div className='Header'>
            <h1>Car Listing</h1>
        </div>
        <div className='parentListing'>
            <div className='labelFiltering'>
                {cars.map((car) => (
                    <label key={car}>
                        <input 
                        type="checkbox"
                        value={car}
                        checked={selectedCar.includes(car)}
                        onChange={() => handleCarSelect(car)}
                        />
                        <span>{car}</span>
                    </label>
                ))}
            </div>

            <div className='listingpart'>
                {
                    (selectedCar.length === 0 || selectedCar.includes("Audi")) && (
                        <>
                              <img src={audi1} alt="The First Audi Car" />
                <img src={audi2} alt="The second Audi Car" />
                        </>
                    )
                }

                     {
                    (selectedCar.length === 0 || selectedCar.includes("Benz")) && (
                        <>
               <img src={benz1} alt="" />
                <img src={benz2} alt="" />
                        </>
                    )
                }

                {
                    (selectedCar.length === 0 || selectedCar.includes("Tesla")) && (
                        <>
                   <img src={tesla1} alt="" />
                <img src={tesla2} alt="" />
                        </>
                    )
                }

                 {
                    (selectedCar.length === 0 || selectedCar.includes("Porshe")) && (
                        <>
                   <img src={porshe1} alt="" />
                        </>
                    )
                }

                   {
                    (selectedCar.length === 0 || selectedCar.includes("Ferrari")) && (
                        <>
                   <img src={ferrari1} alt="" />
                <img src={ferrari2} alt="" />
                        </>
                    )
                }


              
             
            </div>
        </div>
    </div>
  )
}

export default CarListing