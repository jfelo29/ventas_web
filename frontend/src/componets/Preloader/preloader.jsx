import { use } from "react";

const preloader = () => {
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  setTimeout(() => {
   setLoading(false);
  }, 2000);
  []
  return (
   { loading?<loader/>: <> </><div></div> </>
     }
 )
};

export default preloader;




// tendria 2 ideas una es ponerlo en el comienzo de la pagina y la otra en los prodcutos, prefiero ponerla en los productos 