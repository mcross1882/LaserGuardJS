
class ColorMapper {

    static color(index) {
        if (!ColorMapper.colors[index]) {
            throw Error("Color does not exist for index " + index);
        }
        return ColorMapper.colors[index].color;
    }

    static randomColor() {
        var index = Math.floor(Math.random() * ColorMapper.colors.length);
        return ColorMapper.colors[index];
    }

    static imageData(index) {
        if (!ColorMapper.colors[index]) {
            throw Error("Color does not exist for index " + index);
        }
        return ColorMapper.colors[index].bytes;
    }

    static findImageDataByName(name) {
        for (var index=0; index < ColorMapper.colors.length; index++) {
            if (ColorMapper.colors[index].name == name) {
                return ColorMapper.colors[index].bytes;
            }
        }
        return null;
    }

    static findImageDataByColor(color) {
        for (var index=0; index < ColorMapper.colors.length; index++) {
            if (ColorMapper.colors[index].color == color) {
                return ColorMapper.colors[index].bytes;
            }
        }
        return null;
    }

    static isBackground(color) {
        for (var index=0; index < color.length; index++) {
            if (0 != color[index]) {
                return false;
            }
        }
        return true;
    }
}

ColorMapper.colors = [
    {color: '#0000FF', bytes: [0, 0, 255, 255], name: 'blue'},
    {color: '#FF00FF', bytes: [255, 0, 255, 255], name: 'yellow'},
    {color: '#FF0000', bytes: [255, 0, 0, 255], name: 'red'},
    {color: '#00FF00', bytes: [0, 255, 0, 255], name: 'green'}
];


