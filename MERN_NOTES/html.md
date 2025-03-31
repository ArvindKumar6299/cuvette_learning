## HTML

# iframe tag  
An inline frame tag is used to embed another documnet  within the current HTML documnet.
 it is represented by 
 ```html
  <iframe src="linkofanyweb"  height="" width=""> </iframe>
  ```

 uses: -   embedding social media feeds  , creating an image gallery  or slideshow , display adds

# image tag
it is used to embed an image to webpage. 
```html
 <img src="" />
 ```

# video tag
it is used to embed video content to webpage .
you can control video like play, pause , etc.

```html
<video  controls width="400" height="400"  loop muted autoplay> 
   <source src="" />  
</video>
```

# audio tag
it is used to embed audio content to a webpage.
it is represented by <audio> tag and it has attributes like control, source etc.
 ```html
 <audio controls muted loop autoplay>
    <source src="" />
</audio>
```

# List tag
The list element is used to create lists of items on a web page.
HTML has multiple types of list tags.
There are multiple tags present to create lists in HTML  like <ul>-unorderd list, <ol> - ordered list, <li>,<dl>etc.
examples--
 ```html
 <h1>Ordered List</h1>
 <ol>
    <li>hii</li>
    <li>how</li>
    <li>wa</li>
 </ol>
 <h1>Unordered List</h1>
 <ul>
    <li>hey</li>
    <li>dude</li>
    <li>whatsup</li>
</ul>
 ```

# Table tag
 HTML tables allow web developers to arrange data into rows and columns.
 ```html
  <table border="1" width="500" cellspacing="0">
        <thead>
            <tr>
               <th align="center">Country</th>
               <th align="center">Literacy Rate</th> 
            </tr>  
        </thead>
        <tbody>
            <tr>
                <td align="center">India</td>
               <td align="center">70%</td>
            </tr>
            <tr>
                <td align="center">China</td>
                <td  align="center">80%</td>   
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td align="center">World</td>
                <td  align="center">76%</td>
            </tr>
        </tfoot>
    </table>
 ```

 # Meta tag
The ``` <meta>``` tag defines metadata about the HTML document . Metadata is data (information) about data\.
 it is always present inside head tag., it is not displayed.