import React,{useEffect} from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchAnimalData, AnimalData } from "../services/api";

const MainPage: React.FC = () => {
    const {data: animalData, isLoading, isError, error} = useQuery<AnimalData[],Error>({
        queryKey:['animalData'],
        queryFn: () => fetchAnimalData(),
    });

    //콘솔로 찍어보고 싶으면 uesEffect 사용하기
    useEffect(()=> {
        if (animalData) {
            console.log("Animal Data:", animalData);
        }
    },[animalData]);

    if (isLoading) return <Loading>Loading</Loading>;
    if (isError) return <Loading>Error: {error.message}</Loading>

    return (
        <div>
            <h1>유기동물 보호 정보</h1>
            {
                animalData && (
                    <ul>
                        {animalData.map((animal)=> (
                            <li key={animal.ABDM_IDNTFY_NO}>
                                {animal.SPECIES_NM} - {animal.COLOR_NM} - {animal.AGE_INFO}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default MainPage;

const Loading = styled.div`
    border-color: blue;
`