## CSS(cascading style sheets)
is is used to style html documents.
CSS describes how HTML elements should be displayed.
 
![csssyntax](css%20syntax.jpg) 

# css Pseudo-class selectors?
A pseudo-class is used to define a special state of an element.
ex-  style an element when a user mouses over it , style visited and unvisited links differently , style  and element when it gets focus

>pseudo-class types --> :hover , :active , :visited , :focus , :nth-child() , :first-child , :last-child

```css
 button:hover{
    background-color: red;
    color:white;
 }

 button:active{
    background-color:blue;
 }

 a:visited{
    color:green;
 }

 input:focus{
    background-color: yellow;
    color: black;
 }

p:nth-child(2n){
    backgroud-color: green;
}

p:first-child{
    backgroud-color: green;
}

p:last-child{
    backgroud-color: green;
}
```

# CSS Units-
CSS units define how properties like width, height, margin, padding, and font sizes are measured.
They are classified into two main types:

>> Absolute Units (Fixed size) --
These do not change relative to other elements.

px (Pixels) – Most commonly used. Example: width: 100px;
cm (Centimeters) – Rarely used. Example: width: 10cm;
mm (Millimeters) – Example: width: 5mm;

>> Relative Units -- (Flexible, based on parent or viewport)
These adjust based on other elements or the viewport.

% (Percentage) – Relative to parent element. Example: width: 50%;
vw (Viewport Width) – 1vw = 1% of viewport width. Example: width: 50vw;
vh (Viewport Height) – 1vh = 1% of viewport height. Example: height: 100vh;



# CSS Float 
The float property is used for positioning and formating content .

eg - let an image float left to the text in a container.
```css 
 <style>
        img{
            float:left;
        }
        /* .cleared{
         clear:right;
        } */
    </style>   
```
inside the container there are a image and paragraphs --- as a result it will adjust image to left and right side paragraph


# CSS Display
The display preoperty specifies the display behavior (the type of rendering box) of an element.
-> block element
-> inline element
-> inline block element

-> for div contianer for multiple elements if we want to to display horizontally then we will do ```display: inline;```

-> and for multiple span container  if we want to display verticaly  then we will do ``` display: block; ```;

1 Key Behaviors of `` display: block ``
2 Takes up the full width available by default.
3 Starts on a new line, pushing content below it.
4 Respects width and height properties, meaning you can set width, height, margin, and padding. ``

-> inline-block  for adding height,margin,padding because it not support in inline so we will do inline-block ``` display:inline-block;```

# CSS Grid
allows you to create complex layout usign row and column.
<div style="max-height: 200px; overflow: auto; border: 1px solid #ccc; padding: 10px; background: #f5f5f5;">

```css
   *{
            margin: 0px;
            padding: 0px;
        }
        .grid-container{
            padding: 10px;
            background-color: aqua;
            display: grid;
            /* grid-template-columns:100px 100px; */
            grid-template-columns:repeat(3,1fr);
            /* grid-template-rows: 100px 100px 100px; */
            grid-auto-rows: minmax(200px, auto);
            /* grid-column-gap:10px;
            grid-row-gap:10px; */
            grid-gap:10px;
            /* grid-template-areas: 
            "header header header"  --* for header taking 3columns *
             "sidebar content content"
              "sidebar content content"; */
              /* for sidebar - i am taking two rows and , for content two rows and two cols  ,*/
             height: 100vh;
             /* justify-content: center;  aligning them horizontaly */
             /* justify-content: start;  it will at start part  */
             align-items: center; 
        }
        .grid-item{
            background-color: rgba(255, 255,255,0.8);
            border: 1px solid orange;
            padding: 20px;
            text-align:center;
        }
        /* .item-1{
            grid-area: header;
        }
        .item-2{
            grid-area:sidebar;
        }
        .item-3{
            grid-area:content; 
        }  */

         /* another mtd  */
         .item-1{
            grid-column-start: 1;
            grid-column-end:-1;
         }
         .item-2{
            grid-column-start: 1;
            grid-column-end:-1; 
             grid-row-start: 1;
            grid-row-end:3;
         }
         .item-3{
            grid-column-start: 2;
            grid-column-end:4;
            grid-row-start: 1;
            grid-row-end:3;
         }
         .item1{
            grid-column: 1/4;
            grid-row: span 2;
         }

    </style>  </div> ```
   ``` css 
</head>
<body>
    <div class="grid-container">
        <div class="grid-item item-1">1</div>
        <div class="grid-item item-2">2</div>
        <div class="grid-item item-3">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
    </div>
```
</div>

# Navbar

<div style="max-height: 200px; overflow: auto; border: 1px solid #ccc; padding: px; background: #f5f5f5;">

```css
* {
    margin: 0px;
    padding: 0px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
    position: fixed;
    top: 0;
    width: 100%;
}
li {
    float: left;
}
li a {
    display: block;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
}
.active1 {
    background-color: greenyellow;
    color: black;
}
li a:hover {
    background-color: bisque;
    color: black;
}
.random {
    height: 100px;
    background-color: aquamarine;
    border: 2px solid black;
}
.random:nth-child(1) {
    margin-top: 50px;
}
 </div>
<body>
    <div>
        <ul>
            <li><a href="#home" class="active1">Home</a></li>
            <li><a href="#about" >About</a></li>
            <li><a href="#contact" >Contact Us</a></li>
            <li><a href="#services">Services</a></li>
        </ul>
    </div>
</div>
 ```


 ##
 Property	Aligns Items Along	Affects	Example
justify-content	Main Axis (horizontal in row, vertical in column)	Item placement along the main axis	Distributes items left, center, or right in a row
align-items	Cross Axis (perpendicular to main axis)	Item alignment within their flex container	Aligns items at the top, center, or bottom

## positon: relative 
--> The position: relative property in CSS is used to position an element relative to its normal position. This means:

The element will stay in the document flow, ``but we can move it using top, left, right, or bottom.``
example code -   
```css
  .box {
    position: relative;
    top: 20px;
    left: 50px;
    width: 100px;
    height: 100px;
    background-color: red;
}

 ```