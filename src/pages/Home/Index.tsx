import React from "react";
import Card from "../../components/Card";
import "./index.module.css";
import useFetch from "../../API/UseFetch";
import zaglushka from "../../images/photo_2023-01-22_03-04-57.png";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const Home = () => {
  const { data } = useFetch(
    "https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=7fde516d436c4f70b176ed075b736fa2"
  );

  //if (loading) return <Text> Loading...</Text>

  return (
    <div className="App">
      <section className="card-container">
        {/* <Badge text="New Post" filled={true} /> */}
        {data.length > 0 &&
          data.map((item, index) => {
            console.log(!item.urlToImage && item);
            const { urlToImage, description, title, publishedAt } = item;
            return (
              <Card
                image={urlToImage ? urlToImage : zaglushka}
                title={dayjs(publishedAt).format("MMMM Do, YYYY")}
                subtitle={title.substring(0, 35) + "..."}
                description={description.substring(0, 100) + "..."}
                link="Read more"
                key={index}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Home;
