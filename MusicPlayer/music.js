class Music {
    constructor(title, singer, img,file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName () {
        return this.title + "-" + this.singer;
    }
}


const musicList = [
    new Music("Antidepresan","Mabel Matiz","1.jpg","1.mp3"),
    new Music("Birakma Kendini","Kaan Boşnak","2.jpg","2.mp3"),
    new Music("Sarilirim Birine","Adamlar","3.jpeg","3.mp3"),
]