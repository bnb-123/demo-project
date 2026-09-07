// import React, { useEffect, useState } from 'react'

// export const Search = ({ posts , setPosts }) => {
//     const [tags, setTags] = useState([]);
//     const [appliedTag , setAppliedTag] = useState([]);
//     useEffect(() => {
//         let set = new Set();
//         posts?.map(post => {
//              post?.tags?.map((t) => set.add(t))
//         })

//         setTags([...set]);
  
//     }, [posts]);

//     function handleFilter(e){
//         console.log('first', appliedTag.includes(e.target.innerText))
//         if(!appliedTag.includes(e.target.innerText)){
//             setAppliedTag([...tags , e.target.innerText]);
//         }else{
//             setAppliedTag(appliedTag?.filter((at) => at !== e.target.innerText))
//         }

//         console.log(appliedTag)

//         tags.map((t) => {
//             if(appliedTag.includes(t)){
//                 e.target.classList.add('clk_btn')
//             }else{
//                 e.target.classList.add('disclk_btn')
//             }
//         })
//     }

//     return (
//         // <div>
//         //     <div>
//         //         <div><input type="text" name="search_title" id="search" placeholder="Search by Title" ></input></div>
//         //         <div className="tag_container tc"> {tags?.map((tag , idx) => (<button className="tag t" onClick={handleFilter} key={idx}>{tag}</button>))}</div>
//         //     </div>
//         // </div>
//     )
// }
