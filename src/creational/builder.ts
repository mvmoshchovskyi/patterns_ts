enum ImgFormat {
    Jpg = 'jpg',
    Png = 'png',
}

interface ImgResolution {
    width: number;
    height: number;
}

interface ImgConversion extends ImgResolution {
    format: ImgFormat;
}

class ImgBuilder {
    private imgFormats: ImgFormat[] = [];
    private imgResolutions: ImgResolution[] = [];

    addPng() {
        if (this.imgFormats.includes(ImgFormat.Png)) return this;
        this.imgFormats.push(ImgFormat.Png);
        return this;
    }

    addJpg() {
        if (this.imgFormats.includes(ImgFormat.Jpg)) return this;
        this.imgFormats.push(ImgFormat.Jpg);
        return this;
    }

    addResolution(width: number, height: number) {
        this.imgResolutions.push({width, height});
        return this;
    }

    build(): ImgConversion[] {
        const res: ImgConversion[] = []
        for (const resolution of this.imgResolutions) {
            for (const format of this.imgFormats) {
                res.push({
                    format,
                    width: resolution.width,
                    height: resolution.height,
                })
            }
        }
        return res;
    }
}

console.log(new ImgBuilder()
    .addJpg()
    .addPng()
    .addResolution(200,300)
    .addResolution(100,200)
    .build()
);
