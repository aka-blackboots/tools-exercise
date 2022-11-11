import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import {proyectos} from "./proyectos.js"

const container = document.getElementById('viewer-container');
const containerName = document.getElementById('nombreModelo');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

const currenturl = window.location.href
const url = new URL(currenturl)
const idProperty = url.searchParams.get("id")

const projectObjArray=proyectos.filter((model) => {
    if (model.id === idProperty){
        return model
    }
});

const projectObj=projectObjArray[0]

containerName.textContent=projectObj.name;
loadIfc(projectObj.url);