import { useParams } from "react-router-dom"
import { sou } from "../../config";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const List = () => {
  const { resId } = useParams("");
  const [place, setPlace] = useState("");
  const [list, setList] = useState([]);


  useEffect(() => {
    // setList(sou);
  }, [resId])
  return (
    <>
      {/* {console.log(sou)} */}

      <div>{sou[0].id} </div>
      <div>{sou[0].title}</div>
      <div>List details </div>
      <h1>Change</h1>
    </>
  )
}

export default List;