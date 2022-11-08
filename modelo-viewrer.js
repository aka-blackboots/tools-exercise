import {proyectos} from "./proyectos.js"

const softIFCjs = document.getElementById("Modelo-BIM")

const currenturl = window.location.href
const url = new URL(currenturl)
const idProperty = url.searchParams.get("id")

const projectObjArray=proyectos.filter((model) => {
    if (model.id === idProperty){
        return model
    }
});

const projectObj=projectObjArray[0]

softIFCjs.src=projectObj.url

//<iframe id="Modelo-BIM" src="https://ifcjs.github.io/ifcjs-crash-course/exercises/WIV/hello-world/""></iframe>