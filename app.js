const {hello} = require("./helper")
const path = require("node:path");

hello()

const fs = require("node:fs/promises")


async function foo() {
    try {
        const basePath = path.join(process.cwd(), "baseFolder");
        await fs.mkdir(basePath, {recursive: true});

        const folderNames = ["folder1", "folder2", "folder3"]
        const fileNames = ["file1.text", "file2.text", "file3.text", "file4.text"]

        await Promise.all(
            folderNames.map(async (folderName) => {
                const folderPath = path.join(basePath, folderName);
                await fs.mkdir(folderPath, {recursive: true});

                await Promise.all(
                    fileNames.map(async (fileName) => {
                        await fs.writeFile(path.join(folderPath, fileName), "Yelloww")
                    })
                )
            })
        )

    }catch (e) {
        console.error(e)
    }
}
void foo()

