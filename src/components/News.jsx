import { useState } from "react";
import { useEffect } from "react";
export default function News() {
    const [news, setNews] = useState([]);
    const[error,setError] = useState('') ;
    const[loading,setLoading] = useState(true) ;

    function fetchNews() {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=278f1bad285142d180111b8e32c7a725")
            .then(res => res.json())
            .then(data => {setNews(data.articles);
            setLoading(false) ; })
            .catch(()=>{
                setError("failed to load News");
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchNews();
    }, [])
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error}</h2>

    return (
        <>
            <div className="showNews m-3">
                {news.map((item, index) => (
                    <div key={index} className="p-4 border mb-2">
                        <h2 className="font-bold">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}