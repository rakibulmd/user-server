const data = [
    { id: 1, name: "rakib" },
    { id: 2, name: "xxx" },
];

const object = { id: 2, name: "rakib2" };

const props = Object.keys(object);

let objIndex = data.findIndex((obj) => obj.id == object.id);

console.log(data);

for (let prop of props) {
    data[objIndex][prop] = object[prop];
}

console.log(data);
