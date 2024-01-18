import React from 'react'
import Data from '../../data/cardInicio.json'
const Sectioninicio = () => {
    return (
        <div>
            <div>
                <div>CATEGORY</div>
                <div>We Offer Best Services</div>
                <div>
                    {Data.cardInicio.map((i, v) => (
                        <>
                            <img src={i.url} alt="" />
                            <h4>{i.titulo}</h4>
                            <p>{i.descripcion}</p>
                        </>
                    ))}
                </div>
            </div>
            <div>
                <h4>Top Selling</h4>
                <h2>Top Destination</h2>
                <div>
                    {Data.cardSection.map((i, v) => (
                        <>
                            <img src={i.url} alt="" />
                            <h4>{i.titulo}</h4>
                            <h5>{i.subtitulo}</h5>
                        </>
                    ))}
                </div>
            </div>
            <div>
                <h4>Book Your Next Trip In 3 Easy Steps</h4>
                <div>
                    {Data.cardSections.map((i, v) => (
                        <>
                            <img src={i.url} alt="" />
                            <h5>{i.title}</h5>
                            <p>{i.description}</p>
                        </>
                    ))}
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix8snq1Pew-rMIFzssb5W1suhFbLk5nuiBkMi2t3bvkgGROSWLu9wNbPJ9zaBTEIE8hM&usqp=CAU" alt="" />
                    <h4>Trip to Grece</h4>
                    <h5>14-29 june</h5>
                    <h5>by robbin</h5>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix8snq1Pew-rMIFzssb5W1suhFbLk5nuiBkMi2t3bvkgGROSWLu9wNbPJ9zaBTEIE8hM&usqp=CAU" alt="" />
                        <h4>Trip to Grece</h4>
                        <h5>14-29 june</h5>
                        <h5>by robbin</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectioninicio