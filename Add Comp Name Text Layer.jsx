function addTextLayerToCompsOrFolder() {
    var selectedItems = app.project.selection;

    if (selectedItems.length === 0) {
        alert("Please select either a folder or one or more compositions.");
        return;
    }

    // Check if the first selected item is a folder
    var firstItem = selectedItems[0];
    if (firstItem instanceof FolderItem) {
        app.beginUndoGroup("Add Comp Name Text Layer to All Comps in Folder");

        // Process all compositions in the folder
        for (var i = 1; i <= firstItem.numItems; i++) {
            var item = firstItem.item(i);
            if (item instanceof CompItem) {
                addTextLayerToComp(item);
            }
        }

        app.endUndoGroup();
        alert("Text layers and Repetile effects added to all comps in the selected folder.");
    } else {
        // Process only the selected compositions
        app.beginUndoGroup("Add Comp Name Text Layer to Selected Comps");

        for (var i = 0; i < selectedItems.length; i++) {
            var item = selectedItems[i];
            if (item instanceof CompItem) {
                addTextLayerToComp(item);
            }
        }

        app.endUndoGroup();
        alert("Text layers and Repetile effects added to selected comps.");
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

    // Set the text to the name of the composition
    textProp.expression = 'thisComp.name + " "';

    // Set the text layer's name to the composition's name
    textLayer.name = comp.name;

    // First CC Repetile Effect for extra padding around text
    var repetileEffect2 = textLayer.property("Effects").addProperty("CC Repetile");
    repetileEffect2.property("Tiling").setValue(11); // Tiling set to None
    repetileEffect2.property("Expand Right").setValue(200);
    repetileEffect2.property("Expand Left").setValue(0);
    repetileEffect2.property("Expand Up").setValue(0);
    repetileEffect2.property("Expand Down").setValue(100);

    // Second CC Repetile Effect for text tiling
    var repetileEffect1 = textLayer.property("Effects").addProperty("CC Repetile");
    repetileEffect1.property("Tiling").setValue(17); // Brick tiling
    repetileEffect1.property("Expand Right").setValue(2000);
    repetileEffect1.property("Expand Left").setValue(1000);
    repetileEffect1.property("Expand Up").setValue(1000);
    repetileEffect1.property("Expand Down").setValue(1000);

    // Position the text layer in the center of the composition
    textLayer.property("Position").setValue([comp.width / 2, comp.height / 2]);
}

// Run the function for selected comps or comps in a folder
addTextLayerToCompsOrFolder();
