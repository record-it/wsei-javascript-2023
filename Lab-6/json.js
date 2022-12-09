/**
 * Serializacja to zamiana obiektów JS na łańcuch, który znak po znaku może zostać przesłany strumieniem.
 * Deserializacja to zamiana łańcucha na obiekt JS.
 * JSON to łańcuch opisujący obiekt JS. 
 */

let obj = {
    content: "Hello from JavaScript",
    createdAt: new Date(),
    authors: ["Adam", "Ewa"]
};

const serializedObj = JSON.stringify(obj);
console.dir(serializedObj);
const serializedObjView = JSON.stringify(obj, ["content", "createdAt"]);
console.dir(serializedObjView);
const serializedObjLine = JSON.stringify(obj,null,"\t");
console.dir(serializedObjLine);

const objStr = '{"title": "JavaScript", "author": "Adam Adamski","published":"2020-10-10"}';

const parsedObj = JSON.parse(objStr);
console.dir(parsedObj);
console.log(typeof parsedObj.published);
const parsedObjWithDate = JSON.parse(objStr, (key, value) => {
    if (key === "published"){
        return new Date(value);
    }else {
        return value;
    }
});
console.dir(parsedObjWithDate);