import React, { Component } from 'react';
import './Staff&Cast.css';

class StaffCast extends Component {
    render() {
        return (
        <div className='Staff'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1 className='StaffTitle'>Staff & Cast</h1>
                        </div>
                    </div>
                </div>
             <div className='container Cast'>
                        <div className='row '>
                        <div className='col-sm-6'>
                        <h1 className='Titles'>Staff</h1>
                            <ul>
                                <li className='List' >Original: Natsume Aoi</li>
                                <li className='List' >Original illustration: Kurone Mishima</li>
                                <li className='List' >Directed by: Takaomi Kanesaki</li>
                                <li className='List' >Screenplay: Makoto Uezu</li>
                                <li className='List' >Character Design: Koichi Kikuta</li>
                                <li className='List' >Art Director: Masakazu Miyake</li>
                                <li className='List' >Color design: Yukiko Ito</li>
                                <li className='List' >Director of Photography: Yuki Hirose</li>
                                <li className='List' >Edit: Yoshiko Kimura (MADBOX)</li>
                                <li className='List' >Acoustic director: Miwa Iwanami</li>
                                <li className='List' >Music: Masato Koda</li>
                                <li className='List' >Animation production: JCSTAFF</li>
                                <li className='List' >Production: Movie This Subaru Production Committee</li>
                                <li className='List' >Main subject: "1 mm Symphony" Machico</li>
                                <li className='List' >ED theme: “My Home Town”
                                    Aqua (CV: Amamiya Ten),
                                    Megumin (CV: Lii Takahashi),
                                    Dakunes (CV: Ai Kanno)</li>
                            </ul>
                        </div>

                        <div className='col-sm-6'>
                            <h1 className='Titles'>Cast</h1>
                            <ul>
                                <li className='List' >Kazuma: Jun Fukushima</li>
                                <li className='List' >Aqua: Amemiya Ten</li>
                                <li className='List' >Megumin: Lii Takahashi</li>
                                <li className='List' >Darkness: Ai Kanno</li>
                                <li className='List' >Yun Yun: Toyosaki Aioi</li>
                                <li className='List' >Wiz: Yui Horie</li>
                                <li className='List' >Vanir: Masakazu Nishida</li>
                                <li className='List' >Luna: Yuri Hara</li>
                                <li className='List' >Ruffian: Toru Inada</li>
                                <li className='List' >Komekko: Maria Nagano</li>
                            </ul>
                        </div>
                        
                    </div>

                </div>
        </div>
        )
    }
};

export default StaffCast;