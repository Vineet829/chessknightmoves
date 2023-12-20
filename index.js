function graph(){
    return {
        chessBoard: new Map(),
    
addVertices(size = 8){
for(let i = 0; i<size; i++){
    for(let j = 0; j<size; j++){
this.chessBoard.set(`${[i,j]}`, []);
    
    }
}
},


addEdges(board = this.chessBoard){
    for(let [pos] of board){
    const posArr = pos.split(',')
    let x = posArr[0]
    let y = posArr[1]  
    const direction = {
        1: [ x + 1, y + 2 ],
        2: [ x + 2, y + 1 ],
        4: [ x + 2, y - 1 ],
        5: [ x + 1, y - 2 ],
        7: [ x - 1, y - 2 ],
        8: [ x - 2, y - 1 ],
        10: [ x - 2, y + 1 ],
        11: [ x - 1, y + 2 ],
      }
   for(let clock in direction){
    const move = direction[clock].toString()
    if(board.has(move) && (!(board.get(pos).includes(move))))
    this.chessBoard.get(pos).push(move)   

}         


}
},

knightMoves(start, end){
    const paths = [];
    const visited = new Set();
    const queue = [];
    queue.push([start, [start]])
    while(queue.length>0){
        let [current,path] = queue.shift()
        visited.add(current)
        if(current == end){
            paths.push(path)
        }
    let neighbours = this.chessBoard.get(current)
        for(let pos of neighbours){
       if(!(visited.has(pos))){
          queue.push([pos, [...path, pos]])
       }
    
    
        }
    
    }
    console.log(`Fastest Routes from ${start} to ${end}`)
    paths.forEach(element => console.log(element));
}



}

}
