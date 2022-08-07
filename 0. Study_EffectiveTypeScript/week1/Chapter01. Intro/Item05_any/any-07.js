"use strict";
function renderSelector(props) { }
let selectedId = 0;
function handleSelectItem(item) {
    selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
