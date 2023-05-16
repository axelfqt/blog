import api from './index.js';

class FileServices {
    getFiles(url){
        api.get(url)
    }
}