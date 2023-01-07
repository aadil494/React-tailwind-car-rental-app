import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";


const TopCarsContainer = styled.div`

    ${tw`
        max-w-lg 
        w-full 
        flex 
        flex-col 
        items-center 
        justify-center 
        pr-4
        pl-4
        md:pl-0
        md:pr-0 
        mb-10
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black 
        text-2xl  
        md:text-5xl 
        font-extrabold 
        md:font-black 
        md:leading-normal 
        `};
    `;

const CarsContainer = styled.div`
    ${tw`
        flex  
        justify-center 
        mt-7 
        md:mt-10 

    `}
`

export function TopCars(){

    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar= {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };    

    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            <Car  {...testCar}  />
            <Car  {...testCar2}  />
            <Car  {...testCar}  />
        </CarsContainer>
    </TopCarsContainer>
}