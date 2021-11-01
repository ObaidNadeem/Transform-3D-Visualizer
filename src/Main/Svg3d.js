import React, { useState, useRef, useEffect } from 'react'
import image from './image.png'
import './Transform3d.css'

export const Svg3d = () => {
    // transform: perspective(600px) rotateX(0) rotateY(2deg) rotateZ(0) translateX(-100px) translateY(50px) translateZ(50px);

    const [Perspective, setPerspective] = useState(1600)
    const [RotateX, setRotateX] = useState(0)
    const [RotateY, setRotateY] = useState(0)
    const [RotateZ, setRotateZ] = useState(0)
    const [TranslateX, setTranslateX] = useState(0)
    const [TranslateY, setTranslateY] = useState(0)
    const [TranslateZ, setTranslateZ] = useState(0)
    const [Preserve3D, setPreserve3D] = useState(false)

    console.log(TranslateX)
    console.log(TranslateY)
    console.log(RotateX)

    return (
        <>
            <h1 className="header">Transform 3D Visualizer</h1>
            <div className="main" >
                <div className="values">

                    <div className="section">
                        <h2> Translate </h2>
                        <div>
                            <div className="input">

                                <h3>X:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setTranslateX(e.target.value)} />
                                <h5>px</h5>

                            </div>

                            <div className="input">

                                <h3>Y:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setTranslateY(e.target.value)} />
                                <h5>px</h5>

                            </div>

                            <div className="input">

                                <h3>Z:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setRotateX(e.target.value)} />
                                <h5>px</h5>

                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2> Rotate </h2>
                        <div>
                            <div className="input">

                                <h3>X:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setRotateX(e.target.value)} />
                                <h5>deg</h5>

                            </div>

                            <div className="input">

                                <h3>Y:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setRotateY(e.target.value)} />
                                <h5>deg</h5>

                            </div>

                            <div className="input">

                                <h3>Z:</h3>
                                <input type="number" placeholder="0" onChange={(e) => setRotateZ(e.target.value)} />
                                <h5>deg</h5>

                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2> Perspective </h2>
                        <div className="input">
                            <h3 style={{ color: "#12121E" }}>Z:</h3>

                            <input type="number" placeholder="1600" onChange={(e) => setPerspective(e.target.value)} />
                            <h5>px | Do not change perspective if you don't know how it works.</h5>
            

                        </div>
                    </div>

                    {/* <div className="section">
                        <h2> Preserve-3D </h2>
                        <div className="input">
                            <h3 style={{ color: "white" }}>Z:</h3>

                            <input type='checkbox' onClick={() => setPreserve3D(!Preserve3D)} />

                        </div>
                    </div> */}

                    <div className="section">
                        <h2>Css code</h2>
                        <div className=" css-code">
                            <p>
                                .element &#123;
                                <div></div>
                                transform: perspective({Perspective}px)
                                rotateX({RotateX}deg)
                                rotateY({RotateY}deg)
                                rotateZ({RotateZ}deg)
                                translateY({TranslateY}px)
                                translateZ({TranslateZ}px);
                                <div></div>
                                &#125;
                            </p>
                            <div></div>
                        </div>

                    </div>
                </div>

                <div className="visualizer" style={{ transformStyle: `${Preserve3D ? "preserve-3d" : "flat"}` }}>
                    <img src={image}

                        style={{
                            width: "40rem",
                            height: "30rem",
                            transform: `perspective(${Perspective > 0 ? Perspective : 1600}px) 
                        rotateX(${RotateX > 0 ? RotateX : 0}deg) 
                        rotateY(${RotateY > 0 ? RotateY : 0}deg) 
                        rotateZ(${RotateZ > 0 ? RotateZ : 0}deg) 
                        translateX(${TranslateX > 0 ? TranslateX : 0}px) 
                        translateY(${TranslateY > 0 ? TranslateY : 0}px) 
                        translateZ(${TranslateZ > 0 ? TranslateZ : 0}px)`,
                            transition: "all ease 1600ms"

                        }} />

                    <div className="border"></div>


                </div>

                <div className="footer">
                    <h4>Contribute to project on <a target="_blank" href="https://github.com/ObaidNadeem/Transform-3D-Visualizer"> GITHUB </a> </h4>
                    <h4>Developed by <a target="_blank" href="https://obaidnadeem.surge.sh">Obaid Nadeem</a></h4>
                </div>
            </div>
        </>
    )
}

