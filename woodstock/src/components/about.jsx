import React from 'react';
import img from './assets/chaise.jpg';
import imgtable from './assets/table.jpg';



const about = () => {
    return (
        <div class="maindivabout">
            <div class="firstdivabout">
                <div class="imgfauteuil">
                    <img src={img} alt="Une chaise" />
                </div>
                <div class="aboutus">    
                    <h2>About us</h2>
                    <p>Chocolate bar I love powder croissant I love jelly fruitcake. Candy canes cupcake dessert pastry oat cake. 
                        Donut sweet I love. Candy canes cake fruitcake chocolate tiramisu cupcake caramels gummi bears.
                        Gummies candy canes bear claw bonbon cheesecake lollipop muffin cake sweet. Ice cream chocolate cake powder
                         pudding jelly-o icing toffee macaroon sweet roll. Bear claw chocolate bar jelly beans cupcake 
                         cupcake I love fruitcake cookie. Apple pie danish bonbon jelly sweet danish biscuit.</p>
                </div>
            </div>
            <div class="seconddivabout">
                <div class="shop">
                    <h2>Shop</h2>
                    <p>Cupcake ipsum dolor sit amet liquorice. Apple pie chocolate bar apple pie topping pudding chocolate bar. Pudding sugar plum oat cake. Gummi bears bonbon liquorice candy canes jelly beans.
                        Halvah I love marshmallow powder. Chocolate cake macaroon lollipop chocolate cake chocolate cake topping gummies. Toffee jelly jujubes oat cake.
                        Sweet dessert tiramisu candy cheesecake candy. Lollipop marshmallow tiramisu cake biscuit gingerbread sugar plum sweet roll chupa chups. Macaroon dragée tootsie roll bonbon cupcake I love. 
                        Ice cream I love marshmallow fruitcake fruitcake.</p>
                </div>
                <div className="imgtable">
                    <img src={imgtable} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default about;