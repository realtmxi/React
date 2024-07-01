import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetCat = () => {
    const { 
        data, 
        refetch, 
        isLoading: isCatLoading,
        error,
    } = useQuery(["cat"], async () =>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });

    const refetchData = () => {
        alert("DATA REFETCHED");
        refetch();
    };


    return { data, refetch, isCatLoading };
};