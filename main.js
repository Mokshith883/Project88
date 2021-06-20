
// Create canvas variable

ball_width = 120;
ball_height = 70;
ball_x = 10;
ball_y = 10;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	new_image(ball.png);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		if(ball_y >= 0)
		{
			ball_y = ball_y - 10;
			console.log("when up arrow key is pressed,x = " + ball_x + " y = " + ball_y);
			uploadBackground();
			
		}
	}

	function down()
	{
		if(ball_y <= 500)
		{
			ball_y = ball_y + 10;
			console.log("when up arrow key is pressed,x = " + ball_x + " y = " + ball_y);
			uploadBackground();
			
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - 10;
        console.log("when up arrow key is pressed,x = " + ball_x + " y = " + ball_y);
        uploadBackground();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + 10;
        console.log("when up arrow key is pressed,x = " + ball_x + " y = " + ball_y);
        uploadBackground();
		}
	}
	
}

