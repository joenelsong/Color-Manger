class ColorManager {
    constructor() {
        this.colors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8' , '#f58231' , '#911eb4' , '#46f0f0' , '#f032e6' , '#d2f53c' , '#fabebe' , '#008080'
            , '#e6beff' , '#aa6e28' , '#fffac8' , '#800000' , '#aaffc3' , '#808000' , '#ffd8b1' , '#000080' , '#808080' , '#FFFFFF', '#000000'
        ];
        this.next = 0;
        this.map = {};
    }
    getColor(id) {
        if (id in this.map) {
            return this.map[id]
        } else {
            let new_color = this.colors[this.next % this.colors.length];
            this.next += 1;
            this.map[id] = new_color;
            return new_color;
        }
    }
    setColor(id, color) {
        this.map[id] = color;
    }
}
export default new ColorManager();
