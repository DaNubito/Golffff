class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter a power")
        this.input2 = createInput("").attribute("placeholder","Enter a y power")
        this.shootButton = createButton("Shoot!")
    }
    setElementsPosition(){
        this.input.position(windowWidth/5,windowHeight-700)
        this.input2.position(windowWidth/5,windowHeight-620)  
        this.shootButton.position(windowWidth/5,windowHeight-660)
    }
    display(){
        this.setElementsPosition();
        this.handleMousePressed();
    }
    handleMousePressed(){
        this.shootButton.mousePressed(()=>{
            xForce = this.input.value();
            yForce = this.input.value();
        })
    }
}