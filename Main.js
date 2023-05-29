/*
Acciones por realizar:
1. Presiona las teclas de flecha del teclado una por una y muestra cómo se mueve el
jugador.
2. Presiona la tecla T del teclado y muestra cómo aparece un bloque del tronco, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Nosotros
lo hemos utilizado para hacer el árbol.
3. Presiona la tecla D del teclado y muestra cómo viene un bloque verde oscuro, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer el árbol.
4. Presiona la tecla L del teclado y muestra cómo aparece un bloque de color verde
claro, el cual puede usarse para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer el árbol.
5. Presiona la tecla G en el teclado y muestra cómo aparece un bloque de tierra, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer el suelo.
6. Presiona la tecla W en el teclado y muestra cómo aparece un bloque de pared, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer la pared de la casa.
7. Presiona la tecla Y del teclado y muestra cómo aparece un bloque de pared de
color amarillo, el cual puede ser utilizado para cualquier cosa según nuestra
imaginación. Lo hemos utilizado para hacer miCanvasla pared de la casa.
8. Presiona la tecla U en el teclado y muestra cómo aparece un bloque único, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer un animal.
9. Presiona la tecla R en el teclado y muestra cómo aparece un bloque de techo, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer el techo de una casa.
10.Presiona la tecla C en el teclado y muestra cómo aparece un bloque de nube, el
cual puede ser utilizado para cualquier cosa según nuestra imaginación. Lo
hemos utilizado para hacer una nube.
11. Presiona las teclas shift y P al mismo tiempo en el teclado, después presiona
cualquiera de las teclas anteriores y muestra cómo el tamaño de los bloques se
incrementa. También muestra que las etiquetas Ancho y Altura incrementan.
12.Presiona las teclas shift y M al mismo tiempo en el teclado, después presiona
cualquiera de las teclas anteriores y muestra cómo el tamaño de los bloques
disminuye. También muestra que las etiquetas Ancho y Altura disminuyen.

*/
var canvas=new fabric.Canvas("miCanvas");
var objetojugador="";
var objetobloque="";
jugadorx=10;
jugadory=10;
anchobloque=30;
altobloque=30;
function new_image(imagen)
{
	fabric.Image.fromURL(imagen, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(anchobloque);
        block_image_object.scaleToHeight(altobloque);
        block_image_object.set({
	top:jugadory,
	left:jugadorx
	});
	canvas.add(block_image_object);

	});

}
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:jugadory,
	left:jugadorx
	});
	canvas.add(player_object);

	});
}
window.addEventListener("keydown",mi_tecla);
function mi_tecla(e){
    teclapresionada=e.keyCode;
    console.log(teclapresionada);
    if(e.shiftKey == true && teclapresionada == '80'){
        anchobloque=anchobloque+10;
        altobloque=altobloque+10;
        console.log("Se presiona p y shift al mismo tiempo");
        document.getElementById("ancho_actual").innerHTML=anchobloque;
        document.getElementById("alto_actual").innerHTML=altobloque;
    }
    if(e.shiftKey == true && teclapresionada == '77'){
        anchobloque=anchobloque-10;
        altobloque=altobloque-10;
        console.log("Se presiona p y shift al mismo tiempo");
        document.getElementById("ancho_actual").innerHTML=anchobloque;
        document.getElementById("alto_actual").innerHTML=altobloque;
    }
    if(teclapresionada == '38')
	{
		arriba();
		console.log("Tecla no.38 Arriba presionada");
	}
    if(teclapresionada == '40')
	{
		abajo();
		console.log("Tecla no.40 Abajo presionada");
	}
    if(teclapresionada == '37')
	{
		izquierda();
		console.log("Tecla no.37 Izqiuerda presionada");
	}
    if(teclapresionada == '39')
	{
		derecha();
		console.log("Tecla no.39 Derecha presionada");
	}
    if(teclapresionada == '84')
	{
		new_image('trunk.jpg');
		console.log("Tecla T, 84: tronco");
	}
    if(teclapresionada == '68')
	{
		new_image('dark_green.png');
		console.log("Tecla D, 68: verde oscuro");
	}

	if(teclapresionada == '76')
	{
		new_image('light_green.png');
		console.log("Tecla L, 76: verde claro");
	}

	if(teclapresionada == '71')
	{
        new_image('ground.png'); 
		console.log("Tecla G, 71: suelo de tierra");
	}

	if(teclapresionada == '87')
	{
        new_image('wall.jpg');
		console.log("Tecla W, 87: pared");
	}

	if(teclapresionada == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("Tecla Y: 89 pared amarilla");
	}

	if(teclapresionada == '85')
	{
		new_image('unique.png');
		console.log("Tecla U: 85 bloque único, libre, un animal");
    }

	if(teclapresionada == '82')
	{
		new_image('roof.jpg');
		console.log("Tecla R: 82 techo");
	}

	if(teclapresionada == '67')
	{
		new_image('cloud.jpg'); 
		console.log("Tecla C: 67 nube");
	}

}
function arriba()
{
	if(jugadory >=0)
	{
		jugadory = jugadory - altobloque;
		console.log("altura del bloque = " + altobloque);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + jugadorx + " , Y = "+juegadory);
		canvas.remove(player_object);
		player_update();
	}
}

function abajo()
{
	if(jugadory <=500)
	{
		jugadory = jugadory + altobloque;
		console.log("altura del bloque = " + altobloque);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + jugadorx + " , Y = "+jugadory);
		canvas.remove(player_object);
		player_update();
	}
}

function izquierda()
{
	if(jugadorx >0)
	{
		jugadorx = jugadorx - anchobloque;
		console.log("ancho del bloque = " + anchobloque);
		console.log("Cuando se presiona la flecha izquierda, X =  " + jugadorx + " , Y = "+jugadory);
		canvas.remove(player_object);
		player_update();
	}
}

function derecha()
{
	if(jugadorx <=850)
	{
		jugadorx = jugadorx + anchobloque;
		console.log("ancho del bloque = " + anchobloque);
		console.log("Cuando se presiona la flecha derecha, X =  " + jugadorx + " , Y = ")(jugadory);
		canvas.remove(player_object);
		player_update();
	}
}