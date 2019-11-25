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
                        </div>
                        <div className='col-sm-6'>
                            <h1 className='Titles'>Cast</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 Names'>
                            <p className='staffCastNames'><span className='color1'>Original:</span> Natsume Aoi</p>
                            <p className='staffCastNames'><span className='color2'>Original illustration:</span> Kurone Mishima</p>
                            <p className='staffCastNames'><span className='color3'>Directed by:</span> Takaomi Kanesaki</p>
                            <p className='staffCastNames'><span className='color4'>Screenplay:</span> Makoto Uezu</p>
                            <p className='staffCastNames'><span className='color1'>Character Design:</span> Koichi Kikuta</p>
                            <p className='staffCastNames'><span className='color2'>Art Director:</span> Masakazu Miyake</p>
                            <p className='staffCastNames'><span className='color3'>Color design:</span> Yukiko Ito</p>
                            <p className='staffCastNames'><span className='color4'>Director of Photography:</span> Yuki Hirose</p>
                            <p className='staffCastNames'><span className='color1'>Edit:</span> Yoshiko Kimura (MADBOX)</p>
                            <p className='staffCastNames'><span className='color2'>Acoustic director:</span> Miwa Iwanami</p>
                            <p className='staffCastNames'><span className='color3'>Music:</span> Masato Koda</p>
                            <p className='staffCastNames'><span className='color4'>Animation production:</span> JCSTAFF</p>
                            <p className='staffCastNames'><span className='color1'>Production:</span> Movie This Subaru Production Committee</p>
                            <p className='staffCastNames'><span className='color2'>Main subject:</span> "1 mm Symphony" Machico</p>
                            <p className='staffCastNames'><span className='color3'>ED theme:</span> “My Home Town”
                                Aqua (CV: Amamiya Ten),
                                Megumin (CV: Lii Takahashi),
                                Dakunes (CV: Ai Kanno)</p>
                        </div>

                        <div className='col-sm-6 Names'>
                                <p className='staffCastNames'><span className='color1'>Kazuma:</span> Jun Fukushima</p>
                                <p className='staffCastNames'><span className='color2'>Aqua:</span> Amemiya Ten</p>
                                <p className='staffCastNames'><span className='color3'>Megumin:</span> Lii Takahashi</p>
                                <p className='staffCastNames'><span className='color4'>Darkness:</span> Ai Kanno</p>
                                <p className='staffCastNames'><span className='color1'>Yun Yun:</span> Toyosaki Aioi</p>
                                <p className='staffCastNames'><span className='color2'>Wiz:</span> Yui Horie</p>
                                <p className='staffCastNames'><span className='color3'>Vanir:</span> Masakazu Nishida</p>
                                <p className='staffCastNames'><span className='color4'>Luna:</span> Yuri Hara</p>
                                <p className='staffCastNames'><span className='color1'>Ruffian:</span> Toru Inada</p>
                                <p className='staffCastNames'><span className='color2'>Komekko:</span> Maria Nagano</p> 
                        </div>
                        
                    </div>

                </div>
        </div>
        )
    }
};

export default StaffCast;