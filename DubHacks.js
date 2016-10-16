(function() {
    
			var
				// Obtain a reference to the canvas element
				// using its id.
				htmlCanvas = document.getElementById('c'),
			
			  	// Obtain a graphics context on the
			  	// canvas element for drawing.
			  	context = htmlCanvas.getContext('2d');
 
			// Start listening to resize events and
			// draw canvas.
			initialize();
 
			function initialize() {
				// Register an event listener to
				// call the resizeCanvas() function each time 
				// the window is resized.
				window.addEventListener('resize', resizeCanvas, false);
				
				// Draw canvas border for the first time.
				resizeCanvas();
			}
            
			// Display custom canvas.
			// In this case it's a blue, 5 pixel border that 
			// resizes along with the browser window.					
			function redraw() {
                
				context.strokeStyle = 'white';
				context.lineWidth = '1';
                
                context.fillStyle = "#2E5DDF";
                
                // outer square
				context.fillRect(window.innerWidth / 9 , window.innerHeight / 9 , window.innerWidth * 7 / 9, window.innerHeight * 7 / 9);
                
                // inner square
                context.strokeRect(window.innerWidth / 9 , window.innerHeight / 9 , window.innerWidth * 7 / 9, window.innerHeight / 6);
                
                var fontsize = window.innerHeight / 20;
                var fontsizeString = fontsize.toString();
                context.font = fontsizeString.concat("px Comic Sans");
                
                context.fillStyle = "#FFFFFF";
                
                context.fillText("S", window.innerWidth / 9 + window.innerWidth * 1 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("M", window.innerWidth / 9 + window.innerWidth * 3 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("T", window.innerWidth / 9 + window.innerWidth * 5 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("W", window.innerWidth / 9 + window.innerWidth * 7 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("T", window.innerWidth / 9 + window.innerWidth * 9 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("F", window.innerWidth / 9 + window.innerWidth * 11 / 18 - fontsize, window.innerHeight / 4);
                context.fillText("S", window.innerWidth / 9 + window.innerWidth * 13 / 18 - fontsize, window.innerHeight / 4);
                
                context.fillStyle = "#DBDBDB";
                
                context.fillRect(window.innerWidth / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#FFFFFF";
                
                context.fillRect(window.innerWidth * 2 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#DBDBDB";
                
                context.fillRect(window.innerWidth * 3 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#FFFFFF";
                
                context.fillRect(window.innerWidth * 4 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#DBDBDB";
                
                context.fillRect(window.innerWidth * 5 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#FFFFFF";
                
                context.fillRect(window.innerWidth * 6 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
                
                context.fillStyle = "#DBDBDB";
                
                context.fillRect(window.innerWidth * 7 / 9, window.innerHeight / 9 + window.innerHeight / 6, innerWidth / 9, innerHeight - innerHeight / 6 - innerHeight * 2 / 9);
               
			}
		
			// Runs each time the DOM window resize event fires.
			// Resets the canvas dimensions to match window,
			// then draws the new borders accordingly.
			function resizeCanvas() {
				htmlCanvas.width = window.innerWidth;
				htmlCanvas.height = window.innerHeight;
				redraw();
			}
    
        
            
            // create an event with (string name, int start, int end)
            function events(name, start, end) {
                this.name = name;
                this.start = start;
                this.end = end;
            }
    
            // create a calender with (string name, RGB color)
            function calender(name, color) {
                this.name = name;
                this.color = color;
                
            }
    
            // Changes XML to JSON
            function parseJSON(json) {   
	           
            }
	      
		})();