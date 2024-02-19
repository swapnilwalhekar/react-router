import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // way-1 to get data using useLoaderData hook
  const data = useLoaderData();

  // way-2 to get data using useState and useEffect

  // const [data, setData] = useState("");
  // useEffect(() => {
  //   fetch("https://api.github.com/users/swapnilwalhekar").then((res) => {
  //     res.json().then((data) => {
  //       setData(data);
  //     });
  //   });
  // }, []);

  return (
    <div className="text-center bg-gray-600 text-white text-3xl m-4 p-4">
      Github Followers: {data.followers + 12}
      <img src={data.avatar_url} alt="avtar img" className="" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/swapnilwalhekar");
  return response.json();
};
