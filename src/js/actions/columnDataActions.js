export function fetchColumnData(d, keyList) {

    const select = [
        { key: '_select', text: 'Select'}
    ];

    const payload = select.concat(keyList.map(text => {
        const o = {
            key: text.split(/[\s]/).join("_"),
            text,
            sortable: true
        }
        // if(key === 2) o.sortable = true;
        return o
    }) );

    return {
        type: "COLUMN_DATA_FULFILLED",
        payload
    }

}
