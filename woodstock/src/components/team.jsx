import React from 'react';
import img from './assets/bg.jpg';

const team = () => {
    return (
        <div class="teamsection">
            <img src={img} alt="bg 3eme div" class="bgthirdcadre"/>
            <h2 class="h2thirdsection">CREATIVE TEAM</h2>
            <h3>Wood</h3>
            <div class="contentteam">
                <p class="titletextteam">GooG mindset</p>
                    <p>Cupcake ipsum dolor sit amet I love sugar plum lemon drops. Dragée I love marshmallow cake I love cupcake cotton candy.
                    Pudding pudding biscuit. Bear claw toffee biscuit.
                    Lollipop cake jujubes cake lemon drops lollipop apple pie dessert. Sweet gummi bears donut tiramisu. Oat cake I love I love powder dragée.
                    Danish dragée chocolate bar halvah. Tiramisu chocolate bar pie cupcake macaroon. I love pie wafer jelly-o chocolate marshmallow cake.
                    Cookie liquorice bonbon bonbon. I love wafer pastry chupa chups lemon drops candy. I love chocolate cake oat cake pastry sweet roll macaroon I love I love dessert.
                    </p>
                <button>This team</button>
            </div>
        </div>
    )
}


export default team;