
           //Constructor function
           /*
           var canvas = document.getElementById("myCanvas");
           var c = canvas.getContext('2d');
           var wCanvas = new WebTuningsCanvas(c);
           */
           function WebTuningsCanvas(context){
                                this.context = context;
                            }

           //draws a grid of size rows x columns
           //cell dimenstion = width x height
           //x,y - top left coordinate of grid
           //wCanvas.grid(100,200,100,100,6,6);
           WebTuningsCanvas.prototype.grid = function(x,y,width,height,rows,columns){
                                    this.context.save();
                                    this.context.lineCap = "square";
                                    this.context.beginPath();
                                    for(var currentY=y; currentY <=y+rows*height;currentY+=height){
                                      this.context.moveTo(x,currentY);
                                      this.context.lineTo(x+columns*width,currentY);
                                    }
                                    for(var currentX=x;currentX <=x+columns*width;currentX+=width){
                                        this.context.moveTo(currentX,y);
                                        this.context.lineTo(currentX,y+rows*height);
                                    }

                                    this.context.stroke();
                                    this.closePath();
                                    this.context.restore();
                                };


