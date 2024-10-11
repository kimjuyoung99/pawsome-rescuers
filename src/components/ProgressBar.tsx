import React from "react";
import styled from "styled-components";
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface ProgressBarProps {
    currentPage: number;
    totalPages: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentPage, totalPages }) => {
    return (
        <StyledElementProgressBar>
            {Array.from({ length: totalPages }, (_, index) => (
                <ProgressSection 
                    key={index} 
                    filled={index < currentPage}
                    isFirst={index === 0}
                    isLast={index === totalPages - 1}
                />
            ))}
        </StyledElementProgressBar>
    );
};

const PROGRESS_KEY = ['matchingProgress'];

export const useProgress = () => {
    const queryClient = useQueryClient();

    const { data: currentPage = 1 } = useQuery({
        queryKey: PROGRESS_KEY,
        queryFn: () => 1,
        staleTime: Infinity,
    });

    const setCurrentPage = (page: number) => {
        queryClient.setQueryData(PROGRESS_KEY, page);
    };

    return { currentPage, setCurrentPage };
    };
export default ProgressBar;

const StyledElementProgressBar = styled.div`
    display: flex;
    width: 100%;
    height: 18px;
    align-items: center;
    justify-content: space-between;
`;

interface ProgressSectionProps {
    filled: boolean;
    isFirst: boolean;
    isLast: boolean;
}

const ProgressSection = styled.div<ProgressSectionProps>`
    flex-grow: 1;
    height: 100%;
    background-color: ${props => props.filled ? '#47b1ff' : '#e5e5e5'};
    border-radius: ${props => 
        props.isFirst ? '50px 8px 8px 50px' : 
        props.isLast ? '8px 50px 50px 8px' : '8px'};
    margin: 0 4px;
`;