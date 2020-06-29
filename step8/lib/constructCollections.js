class constructCollections {
    constructor(serviceName, description) {
        this.serviceName = serviceName;
        this.description = description;
    }
}
  
class constructCollection {
    constructor(serviceName, description) {
        this.serviceName = serviceName;
        this.description = description;
    }

}

export function constructItem(serviceName, type, title) {
    var item = {};
    item.href = util.format('http://localhost/%s', serviceName);
    item.rel = "self";
    item.type = type; //"application/json";
    item.title = title;
    return item;
}

  export default constructCollections;
  