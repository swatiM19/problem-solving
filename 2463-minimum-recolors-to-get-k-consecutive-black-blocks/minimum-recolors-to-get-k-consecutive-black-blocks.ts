function minimumRecolors(blocks: string, k: number): number {
    let recolor = 0;
    let minOp = 0;
    for(let i=0;i < k ; i++){
        if(blocks[i] =='W'){
            recolor++;
        }
    }
    minOp = recolor;
    for(let i=k; i<blocks.length; i++){
        if(blocks[i] == 'W'){
            recolor++;
        }
        if(blocks[i-k] == 'W'){
            recolor--;
        }
        minOp = Math.min(minOp, recolor);
    }
    return minOp;  
};