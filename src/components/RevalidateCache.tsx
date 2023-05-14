// 'use client';

//import exp from "constants";

// import { revalidateTag } from "next/cache";
// import { FC } from "react";

// interface Props {
//     tags:string;
// }

// const RevalidateCache:FC<Props> = ({tags})=>{
//     const revalidateCache = async ():Promise<void>=>{
//         "use server"
//         revalidateTag("TODOS");
//         // const api_url = `/api/revalidate?tag=${tags}`;
//         // const res = await fetch(api_url,{cache:'no-store'});
//         // debugger;

//         // if(res.ok){
//         //     const json = await res.json()
//         //     if(json.data?.error)
//         //         alert(json.data?.error);
//         //     else alert('cache revalidated successfully')    
//         // }
//         // else {
//         //     alert('server error');
//         // }
//     }
//     return <button onClick={revalidateCache}>Revalidate Cache</button>
// }

// export default RevalidateCache;
export {}