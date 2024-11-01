import axios from "axios";
import { useEffect, useState } from "react";

const MyForm = () => {

    const [data, setData]=useState()
    const [categoryId, setCategoryId]=useState()
    console.log(categoryId,'categoryId')
    useEffect (() => {
        axios
        .get (
            `https://api.protool.uz/v1/categories`
        )
        .then( function(response){
            console.log(response);
            setData(response?.data?.data);
        })
        .catch(function (error){
            console.error("Error fetching data:", error);
        });
    }, []);
    return(
        <>
        <h1>
            Form
            <form action="">

                <select onChange={(e) => setCategoryId(e.target.id)}>
                    <option defaultChecked > Category tanlang</option>

                    {
                        data?.map((item,key) => (
                            <option value={item?._id}>{item?.title}</option>
                        ))
                    }
                </select>
            </form>
        </h1>
        
        </>
    )
} 
export default MyForm;