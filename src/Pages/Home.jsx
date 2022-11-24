// import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/ticket'
import CardHome from '../Component/main'
import SmallCard from '../Component/Tiny'
// import { store } from './Details'
import FetchApi from "./FetchApi/index";

import React,{useState,useEffect} from "react";

const Home = () => {
    const [api,setApi] = useState([]);

    useEffect(() => {
      const getApi = async () => {
        setApi(await FetchApi());
      }
      getApi();
    },[api]);
    console.log("home API working fine",api)

//   const [detail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>Title of vertical gallery</h1>
        <span>Travel/August 21 2017</span>
      </div>
      <div className="home__sec">
        {/* <span>Ancient Temple</span> */}
       <Link to="/fitness" > <img src="https://ihplb.b-cdn.net/wp-content/uploads/2018/04/Group-of-Monuments-at-Hampi-1.jpg" alt="not foun" /></Link>
       
      </div>
      </div>
      
      <div className="home__thir">
      {/* <h4>The-sound-cloud </h4> */}
       <Link to='/technology'>   <img src="https://ihplb.b-cdn.net/wp-content/uploads/2018/04/Group-of-Monuments-at-Hampi-1.jpg" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left '>
                    {
                    api.filter((curElem) => {
                        return curElem.category === "bollywood";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}                            
                            />
                        ))
                    }
                </div>
          <div className='home__left '>
                    {
                        api.filter((curElem) => {
                            return curElem.category === "technology";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left '>
                    {
                        api.filter((curElem) => {
                            return curElem.category === "food";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"70px", marginLeft:"20px", display : "inline-block"}}>Latest Articles</h1>
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px", thickness:"20px"}} />
            
                <div className='rightbar2'>
                    {
                      api.filter((curElem) => {
                        return curElem.category === "mix";}).map((n) => (
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
                <div className="sidebar2">
                    {
                         api.filter((curElem) => {
                            return curElem.category === "mix";}).map((n) => (
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
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                         api.filter((curElem) => {
                            return curElem.category === "footer1";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                       api.filter((curElem) => {
                        return curElem.category === "footer2";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        api.filter((curElem) => {
                            return curElem.category === "footer3";}).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home;