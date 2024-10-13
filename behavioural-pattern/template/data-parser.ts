abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "sample data";
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
  }

  protected loadData(): void {
    console.log("Loading data (could be from a file, database, etc.)");
  }

  protected abstract parse(data: string): any;

  protected validate(data: any): void {
    console.log("Validating the parsed data...");
  }

  protected useData(data: any): void {
    console.log("Using the parsed data (could be displaying, storing, etc.)");
  }
}

class JSONParser extends DataParser {
  protected parse(data: string): any {
    console.log("Parsing data as JSON...");
    return JSON.parse(data);
  }
}

class XMLParser extends DataParser {
  protected parse(data: string): any {
    console.log("Parsing data as XML...");
    // here we assume a parseXML function exists that can parse XML data
    // return parseXML(data);
  }
}

function clientCode(dataParser: DataParser): void {
  dataParser.parseData();
}

console.log("Parsing JSON data:");
clientCode(new JSONParser());
console.log("");

console.log("Parsing XML data:");
clientCode(new XMLParser());