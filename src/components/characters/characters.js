import { useEffect, useContext } from 'react';
import AppContext from '../../context/state/appContext';
import { Card, Button } from 'react-bootstrap';
import './character.css';

const Characters = () => {
    const { getCharacters, charactersAll, getFavoritie, favorities } = useContext(AppContext);

    useEffect(() => {
        getCharacters()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <h1 className="mx-3">Characters</h1>
        <div className="d-flex characters">   
            {
                charactersAll.map((item, index) => {
                    return (
                        <div>
                            <Card className="character mx-2" key={index}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <p>Height: {item.height}</p>
                                        <p>Gender: {item.weight}</p>
                                    </Card.Text>
                                    <Button variant="primary">Information</Button>
                                    <Button variant="danger" className="mx-3" onClick={() => getFavoritie(item)}>Like</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
        {
            console.log(favorities)
        }
        </>
    )
}

export default Characters;