import React, { useEffect, useState } from "react";

const MyFlatPosts = () => {
   const [flats, setFlats] = useState(null);

   useEffect(() => {
      const token = localStorage.getItem("token");
      fetch("http://localhost:5000/api/flats/user", {
         headers: {
            Authorization: `${token}`,
         },
      })
         .then((response) => response.json())
         .then((data) => {
            setFlats(data);
            console.log(data);
         })
         .catch((error) => console.error("Error:", error));
   }, []);

   return (
      <div>
         <h1>My Flat Posts</h1>
      </div>
   );
};

export default MyFlatPosts;
