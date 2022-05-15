 import { setDefaultResultOrder } from "dns";
import { url } from "inspector";
import { useState } from "react";
import { Button, Card, CardGroup, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import salud from '../img/fondo.jpg'
import keto from '../img/dieta-keto_0.jpg'
import vega from '../img/vegetarianos.jpg'
import gluten from '../img/singluten.jpg'
import { Link, NavLink } from "react-router-dom";
import Recetas from "./Recetas";

 export const Init = () => {

     return (
        <section>
            <div className="bg-image m-0 row vh-50 justify-content-center align-items-center border-bottom border-light" style={{backgroundImage: `url(${salud}`,backgroundSize: 'cover' , backgroundRepeat: 'no-repeat' ,height:'550px'}} >
                <div className="col-auto p-5 text-center bg-secondary opacity-75 text-dark rounded-pill">
                    <h1 className="display-1">
                        Bienvenido a NutriFoods
                    </h1>
                    <Button type="button" variant ="dark">Plan Alimenticio</Button>{'       '}
                    <Button variant="outline-light">Conocer mas+ </Button> 
                </div>
            </div>
            <div className="bg-dark"style={{height: "700px"}}>
                <div className="p-4 text-light text-center" style={{height : "200"}}>
                    <h1>RECETAS</h1>
                    <Link to={'/Recetas'}> <i className="bi bi-plus"></i></Link>
                </div>
                <div className="m-0 row vh-50 justify-content-center align-items-center row">
                <CardGroup className="text-center" style={{width : "1200px"}}>
                    <Card>
                        <Card.Img variant="top" src= {keto} style={{width: '400px', height: "300px"}} />
                        <Card.Body>
                        <Card.Title>Recetas Keto</Card.Title>
                        <Card.Text>
                            Recetas que consisten principalmente en eliminar los carbohidratos y promueve una alta ingesta de grasas saludables y proteínas, para que el organismo queme más grasa y así favorecer la pérdida de peso.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">Ir a Ketos</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src= {vega} style={{width: '400px' , height: "300px"}} />
                        <Card.Body>
                        <Card.Title>Recetas Vegetarianas</Card.Title>
                        <Card.Text>
                            Recetas que tienen como principio dejar de consumir cualquier tipo de producto animal e incluyen los grados de la Vegetarianismo
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">Ir a Vegetarianos</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src= {gluten} style={{width: '392px', height: "300px"}} />
                        <Card.Body>
                        <Card.Title>Recetas Sin Gluten</Card.Title>
                        <Card.Text>
                            Recetas que consisten en eliminar de forma estricta de la alimentación todos los productos que contengan o se cocinen con trigo, centeno, cebada y avena, o cualquiera de sus variedades e híbridos.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">ir a Sin Gluten</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                </div>
            </div>
        </section>
     )
 }

 
