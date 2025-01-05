import axios from "axios";
import { useEffect, useState } from "react";

const MyForm = () => {

    const [data, setData] = useState()
    const [categoryId, setCategoryId] = useState()
    const [imgUrl, setImgUrl] = useState()
    console.log(imgUrl, 'imgUrl');

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiYmEzYTY4ZDQ0ZWZlMmQ2YmJiNDIiLCJpYXQiOjE3MzA0Njg0MTQsImV4cCI6MTczMzA2MDQxNH0.ZHI6oNl6swQP2UdzOqgmazIFrKVkFfGGYgWKa-AubmA"

    useEffect(() => {
        axios
            .get(
                `https://api.protool.uz/v1/categories`
            )
            .then(function (response) {
                console.log(response);
                setData(response?.data?.data);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, []);
    const sendFileHandler = (option) => {
        let img = option[0];
        const fotmData = new FormData();
        fotmData.append("file", img);

        fetch("https://api.protool.uz/v1/file-upload", {
            method: "POST",
            headers: {
                Authorization: "Bearer" + token,
            },
            body: fotmData,
        })
            .then((response) => response.json())
            .then((data) =>{
                setImgUrl(data?.data?.url);
            })
            
            .catch((err) => {
                console.log(err);
            });
    };



    

return (
    <>
        <h1>
            Form
            <form action="">

                <select onChange={(e) => setCategoryId(e.target.value)}>
                    <option defaultChecked > Category tanlang</option>

                    {
                        data?.map((item, key) => (
                            <option value={item?._id}>{item?.title}</option>
                        ))
                    }
                </select>
                <input onChange={(e) => sendFileHandler(e.target.files)} type="file" />
            </form>
            {
                imgUrl && <img src={imgUrl} alt=""/>
            }
        </h1>

    </>
);
}
export default MyForm;