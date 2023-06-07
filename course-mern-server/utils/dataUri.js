import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) =>{

    const parser= new DataUriParser();
    const extName= path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);//file ka buffer mein store hoti hai video aur image

};

export default getDataUri;