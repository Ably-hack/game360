import React from 'react';
import NewsCard from '../NewsCard';

const FootballNews = () => {
  return (
    <div className="py-6 px-4 bg-white">
      <div>
        <h2 className="text-neutral-600 uppercase text-md font-semibold">
          FOOTBALL NEWS
        </h2>
      </div>
      <div className="grid grid-flow-co gap-2">
        <NewsCard
          title="Ten Hag after latest Man Utd defeat: We will stick together"
          url="#"
          image="/images/news_banner.png"
          time="2 MIN READ"
        />
        <NewsCard
          title="Ten Hag after latest Man Utd defeat: We will stick together"
          url="#"
          image="/images/news_banner.png"
          time="2 MIN READ"
          description='Manchester United manager Erik ten Hag has said everyone at the club is sticking "together" following their 3-2 loss to Galatasaray...'
        />
        <NewsCard
          title="Ten Hag after latest Man Utd defeat: We will stick together"
          url="#"
          image="/images/news_banner.png"
          time="2 MIN READ"
        />
      </div>
    </div>
  );
};

export default FootballNews;
