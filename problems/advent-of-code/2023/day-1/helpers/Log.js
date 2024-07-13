class Log {
    constructor(fileName) {
        this.fs = require('fs');
        this.path = require('path');
        this.fileName = fileName;
        this.filePath = this.path.dirname(this.fileName);
    }

    Append(content) {
        try {
            this.fs.appendFile(this.fileName, content, (err) => {
                if (!err) {
                    console.log(`Log File ${this.fileName} appended successfully`);
                }
            });
        } catch (error) {
            console.error("Log File Error: ", error);
        }
    }

    Write(content) {
        try {
            if (!this.fs.existsSync(this.filePath)) {
                this.fs.mkdirSync(this.filePath);
            }

            this.fs.writeFile(this.fileName, content, (err) => {
                if (!err) {
                    console.log(`Log File ${this.fileName} written successfully`);
                }
            });
        } catch (error) {
            console.error("Log File Error: ", error);
        }
    }

    Clear() {
        this.Write("");
    }

    Create(content) {
        this.Clear();
        this.Append(content);
    }
}

module.exports = Log;