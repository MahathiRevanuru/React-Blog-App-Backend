
import Card from '../Component/ticket'
import SmallCard from '../Component/Tiny';
import FetchApi from "./FetchApi/index";

import React,{useState,useEffect} from "react";

const Fitness = () => {
    // const [detail] = useContext(store);
    // console.log(detail);
    const [api,setApi] = useState([]);

    useEffect(() => {
      const getApi = async () => {
        setApi(await FetchApi());
      }
      getApi();
    },[api]);
    console.log("home API working fine",api);
    return (
        <div>
            <h1 style={{ marginLeft:"200px", display: "inline-block" }}>Fitness</h1>
            <h1 style={{ marginLeft:"650px", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        api.filter((curElem) => {
                            return curElem.category === "Fitness";}).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        api.filter((curElem) => {
                            return curElem.category === "Fitness";}).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Fitness;