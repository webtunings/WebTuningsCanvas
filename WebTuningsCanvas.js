

           function WebTuningsCanvas(context){
                                this.context = context;
                            }

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


