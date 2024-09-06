function addTextLayerToComps() {
    var folder = app.project.selection[0];
    if (folder && folder.typeName === "Folder") {
        app.beginUndoGroup("Add Comp Name Text Layer to All Comps in Folder");

        for (var i = 1; i <= folder.numItems; i++) {
            var item = folder.item(i);

	// in the next line 
	// change Media to shared comp name 
	// (eg Video, Comp, etc)

            if (item instanceof CompItem && item.name.match(/^Media\s\d+$/i)) {
                addTextLayerToComp(item);
            }
        }

        app.endUndoGroup();
        alert("Text layers and Repetile effects added to all comps in folder.");
    } else {
        alert("Please select a folder containing the compositions.");
    }
}

function addTextLayerToComp(comp) {
    var textLayer = comp.layers.addText();
    var textProp = textLayer.property("Source Text");

    var textDocument = textProp.value;
    textDocument.font = "Verdana";
    textDocument.fontSize = 150;
    textDocument.lineSpacing = textDocument.autoLeading; // Line height is Auto
    textDocument.kerning = 0;
    textProp.setValue(textDocument);

    textProp.expression = 'thisComp.name + " "';

    var repetileEffect2 = textLayer.property("Effects").addProperty("CC Repetile");
    repetileEffect2.property("Tiling").setValue(11);
    repetileEffect2.property("Expand Right").setValue(200);
    repetileEffect2.property("Expand Left").setValue(0);
    repetileEffect2.property("Expand Up").setValue(0);
    repetileEffect2.property("Expand Down").setValue(100);

    var repetileEffect1 = textLayer.property("Effects").addProperty("CC Repetile");
    repetileEffect1.property("Tiling").setValue(17);
    repetileEffect1.property("Expand Right").setValue(2000);
    repetileEffect1.property("Expand Left").setValue(1000);
    repetileEffect1.property("Expand Up").setValue(1000);
    repetileEffect1.property("Expand Down").setValue(1000);

    textLayer.property("Position").setValue([comp.width / 2, comp.height / 2]);
}

addTextLayerToComps();
