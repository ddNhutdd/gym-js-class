class ThongTin {
    constructor(ten, moTa) {
        this.ten = ten;
        this.moTa = moTa;
    }

    tinhToan(x = 1) {
        return 3 * x;
    }
}


class HinhHoc extends ThongTin {
    constructor(ten, moTa, chieuDai) {
        super(ten, moTa);
        this.chieuDai = chieuDai;
    }
}

const test = new HinhHoc('hình vuông', 'hình học', 12)

console.log(test);
console.log(test.ten);
console.log(test.moTa);
console.log(test.chieuDai);
console.log(test.tinhToan(5));
