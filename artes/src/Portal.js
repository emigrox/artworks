//import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import Principal from './Principal';
import Pagination from './Pagination';

function Portal() {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=10')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
         .catch((err) => {
             console.log(err.message);
          });
     }, []); 

    //var jason = require('./artes.json');
    //console.log(jason.data)

     console.log(posts)

   return (
    <div>

      {posts.data.length > 0 ? (
        <>
          <Pagination
            data={posts.data}
            RenderComponent={Principal}
            title="Posts"
            pageLimit={5}
            dataLimit={5}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>

    

        

   
 );
 };



 export default Portal;