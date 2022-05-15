import React from 'react';
import { Button, Card } from 'react-bootstrap';
import canelones from '../img/canelones.jpg'

const Recetas = () => {
    return (
        <div className='bg-dark' style={{height: "92vh"}}>
            <div className='container justify-content-center'>
                <div className='row'>
                    <div className='col-md-6 ml-auto mt-4'>
                        <Card style={{ width: '89vh' ,height: "300px"}}>
                            <Card.Body>
                                <Card.Title>Canelones de Zapallo</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted m-1">
                                    <i className='mt-4 bi bi-clock'> Tiempo | </i>
                                    <i className='bi bi-people-fill'>porciones</i></Card.Subtitle>
                                <Card.Text>
                                    introduzca texto aqui
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title>
                                    Categoria: {' '}
                                    <a href='/vegetarianos'>Vegetarianos</a>
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant='dark'> Calificar</Button>{' '}
                                <Button variant='dark'> Guardar</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className='col mt-4' style={{width:'100vh' ,height: "300px", backgroundImage: `url(${canelones}`, backgroundRepeat: "no-repeat"}}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recetas;