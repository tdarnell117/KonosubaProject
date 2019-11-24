import React from 'react';

import Kazuma from '../Images/kazuma.png'
import Aqua from '../Images/aqua.png';
import Megumin from '../Images/megumin.png';
import Darkness from '../Images/darkness.png';

import Yunyun from '../Images/Yunyun.png';
import Wiz from '../Images/Wiz.png';
import Vanir from '../Images/Vanir.png';
import Luna from '../Images/Luna.png';

import Ruffian from '../Images/Ruffian.png';
import Komekko from '../Images/Komekko.png';
import Hyoizaburo from '../Images/Hyoizaburo.png';
import Yuiyui from '../Images/Yuiyui.png';

import Arue from '../Images/Arue.png';
import Funifura  from '../Images/Funifura.png';
import Dodonko from '../Images/Dodonko.png';
import Bukkororii from '../Images/Bukkororii.png';

import Soketto  from '../Images/Soketto.png';
import Hiropon from '../Images/Hiropon.png';
import Sylvia from '../Images/Sylvia.png';

import thumb1 from '../Images/thumb1.png';
import thumb2 from '../Images/thumb2.png';
import thumb3 from '../Images/thumb3.png';
import thumb4 from '../Images/thumb4.png';
import thumb5 from '../Images/thumb5.png';
import thumb6 from '../Images/thumb6.png';
import thumb7 from '../Images/thumb7.png';
import thumb8 from '../Images/thumb8.png';
import thumb9 from '../Images/thumb9.png';
import thumb10 from '../Images/thumb10.png';
import thumb11 from '../Images/thumb11.png';
import thumb12 from '../Images/thumb12.png';
import thumb13 from '../Images/thumb13.png';
import thumb14 from '../Images/thumb14.png';
import thumb15 from '../Images/thumb15.png';
import thumb16 from '../Images/thumb16.png';
import thumb17 from '../Images/thumb17.png';
import thumb18 from '../Images/thumb18.png';
import thumb19 from '../Images/thumb19.png';

import * as actionTypes from './action';

const initialState = {
        defaultImg: <img src={Kazuma} alt='kazuma' />,
        name: 'Kazuma',
        hover: false,

        characters: [
            {name: 'Kazuma',
            image: <img src={Kazuma} alt='Kazuma' />,
            thumbNail: <img src={thumb1} alt='Kazuma' />,
            id: '0'
            },
            {name: 'Aqua',
            image: <img src={Aqua} alt='Aqua' />,
            thumbNail: <img src={thumb2} alt='Aqua' />,
            id: '1'
            },
            {name: 'Megumin',
            image: <img src={Megumin} alt='Megumin' />,
            thumbNail: <img src={thumb3} alt='Megumin' />,
            id: '2'
            },
            {name: 'Darkness',
            image: <img src={Darkness} alt='Darkness' />,
            thumbNail: <img src={thumb4} alt='Darkness' />,
            id: '3'
            },

            {name: 'Yunyun',
            image: <img src={Yunyun} alt='Yunyun' />,
            thumbNail: <img src={thumb5} alt='Yunyun' />,
            id: '4'
            },
            {name: 'Wiz',
            image: <img src={Wiz} alt='Wiz' />,
            thumbNail: <img src={thumb6} alt='Wiz' />,
            id: '5'
            },
            {name: 'Vanir',
            image: <img src={Vanir} alt='Vanir' />,
            thumbNail: <img src={thumb7} alt='Vanir' />,
            id: '6'
            },
            {name: 'Luna',
            image: <img src={Luna} alt='Luna' />,
            thumbNail: <img src={thumb8} alt='Luna' />,
            id: '7'
            },

            {name: 'Ruffian',
            image: <img src={Ruffian} alt='Ruffian' />,
            thumbNail: <img src={thumb9} alt='Ruffian' />,
            id: '8'
            },
            {name: 'Komekko',
            image: <img src={Komekko} alt='Komekko' />,
            thumbNail: <img src={thumb10} alt='Komekko' />,
            id: '9'
            },
            {name: 'Hyoizaburo',
            image: <img src={Hyoizaburo} alt='Hyoizaburo' />,
            thumbNail: <img src={thumb11} alt='Hyoizaburo' />,
            id: '10'
            },
            {name: 'Yuiyui',
            image: <img src={Yuiyui} alt='Yuiyui' />,
            thumbNail: <img src={thumb12} alt='Yuiyui' />,
            id: '11'
            },

            {name: 'Arue',
            image: <img src={Arue} alt='Arue' />,
            thumbNail: <img src={thumb13} alt='Arue' />,
            id: '12'
            },
            {name: 'Funifura',
            image: <img src={Funifura} alt='Funifura' />,
            thumbNail: <img src={thumb14} alt='Funifura' />,
            id: '13'
            },
            {name: 'Dodonko',
            image: <img src={Dodonko} alt='Dodonko' />,
            thumbNail: <img src={thumb15} alt='Dodonko' />,
            id: '14'
            },
            {name: 'Bukkororii',
            image: <img src={Bukkororii} alt='Bukkororii' />,
            thumbNail: <img src={thumb16} alt='Bukkororii' />,
            id: '15'
            },

            {name: 'Soketto',
            image: <img src={Soketto} alt='Soketto' />,
            thumbNail: <img src={thumb17} alt='Soketto' />,
            id: '16'
            },
            {name: 'Hiropon',
            image: <img src={Hiropon} alt='Hiropon' />,
            thumbNail: <img src={thumb18} alt='Hiropon' />,
            id: '17'
            },
            {name: 'Sylvia',
            image: <img src={Sylvia} alt='Sylvia' />,
            thumbNail: <img src={thumb19} alt='Sylvia' />,
            id: '18'
            },
        ]
    };

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.SELECT_CHAR) {
        return {
            ...state,
            defaultImg: state.characters[action.index].image,
            name: state.characters[action.index].name
        }
    }
    return state
};

export default reducer;