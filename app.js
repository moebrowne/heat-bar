
var heatBar = {
    context: null,
    canvas: null,

    // Set everything up
    init: function(canvasObject) {

        // Add the canvas object to the hexGrid object
        this.canvas = canvasObject;

        // Get a drawing context
        this.context = this.canvas.getContext('2d');

    },

    drawGradient: function(posX) {



        var gradient = this.context.createLinearGradient((posX-50),0,(posX+50),0);
        gradient.addColorStop(0,"rgba(255,0,0,0)");
        gradient.addColorStop(0.5,"rgba(255,0,0,0.2)");
        gradient.addColorStop(1,"rgba(255,0,0,0)");
        this.context.fillStyle = gradient;
        this.context.fillRect((posX-50),0,(posX+50),30);
    }

};