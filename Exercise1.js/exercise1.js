class cine{
    constructor(row, seatNumber){
        this.row = row;
        this.seatNumber = seatNumber;
        this.isFree=true;
    }

    displayStatus(){
        return `Seat ${this.row}-${this.seatNumber}: ${this.isFree ? 'Free' : 'Available'}`; 
    }

    reserve(){
        if (!this.isFree){
            console.log(`Seat ${this.row}-${this.seatNumber} is already occupied`); 
        }else{
            console.log(`Seat ${this.row}-${this.seatNumber} has been reserved`); 
        }
    }
}

class Cinema{
    constructor(row, seatNumber){
        this.row = row;
        this.seatPerRow = seatPerRow;
        this.seats =[];

        for (let i=1; i<=rows; i++){
            for (let j=1; j<=  this.seatPerRow; j++){
                this.seats,push(new seatNumber(i,j));
        }
    }
}
};
showRoomStatus(){
    console.log('Current room status:');
    this.seats.forEach(seat => console.log(seat,displayStatus()));
    console.log();
}

reserveSeat(row, seatNumber){
    if(row < 1 || row > this.row || seatNumber < 1 || seatNumber> this.seatPerRow){
        console.log('Invalid seat selection')
        return;
    }
}

function testCinema(){
    const cinema = new Cinema(5.10);
    cinema.showRoomStatus();
    cinema.reserveSeat(3,7);
    cinema.reserve(2,3);
    cinema,showRoomStatus();
}

testCinema();