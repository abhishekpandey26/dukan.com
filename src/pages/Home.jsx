import React from "react";
import Card from "../components/Card";

function Home({ data }) {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
    gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[40vh]">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title} // Pass in properties of 'item' to Card
            description={item.description}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default Home;
