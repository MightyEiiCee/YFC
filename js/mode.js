
    var icon = document.getElementById("Mode");
    var logo = document.getElementById("Logo");
    var menu = document.getElementById("Menu");
    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")){           
            icon.src = "images/mode/moon.png";
            logo.src = "images/logo/BlackYFC.png";
            menu.src = "images/mode/menu.png"
        }
        else{
            icon.src = "images/mode/sun.png";
            logo.src="images/logo/WhiteYFC.png";
            menu.src = "images/mode/menu-w.png"
        }
    }   
    
