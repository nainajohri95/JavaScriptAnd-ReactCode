import React, { useEffect, useState } from "react";

function NewsApp() {
  const apiKey = "d92b605019ca465c84b358355c6160ee";
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-05&sortBy=publishedAt&apiKey=${apiKey}`;

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, []);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl); //fetch returns a promise
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }
  return (
    <div>
      {newsList.map((news) => {
        return <p>{news.title}</p>;
      })}
    </div>
  );
}

export default NewsApp;
