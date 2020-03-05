import React from 'react';
import Card from './Card'
function Content() {
    const cards = [
        { title: "Title1", content: "content1", img:'https://picsum.photos/200' },
        { title: "Title2", content: "content2", img:'https://picsum.photos/300' },
        { title: "Title3", content: "content3", img:'https://picsum.photos/400' },
        { title: "Title4", content: "content4", img:'https://picsum.photos/500' },
    ]

    return (

        <div className="row text-center">

            {/* Even faster */}
            {
                cards.map((card) => <Card title={card.title} content={card.content} img={card.img} />)
            }

            {/* Mapping elements */}
            {/* {
                cards.map(function (card) {
                    return <Card title={card.title} content={card.content} />
                })
            } */}


            {/* All elements  
             <Card  title={cards[0].title} content={cards[0].content} />
             <Card  title={cards[1].title} content={cards[1].content}/>
             <Card  title={cards[2].title} content={cards[2].content}/>
             <Card  title={cards[3].title} content={cards[3].content}/> */}
        </div>

    );

}

export default Content;