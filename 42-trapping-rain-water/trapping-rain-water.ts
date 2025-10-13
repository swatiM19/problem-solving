function trap(height: number[]): number {
    let totalWater:number = 0
    let leftMax:number[] = getLeftMax(height);
    let rightMax:number[] = getRightMax(height);
    for(let i=0; i<height.length; i++){
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return totalWater;
};

function getLeftMax(height: number[]): number[] {
    let leftMax = new Array(height.length).fill(0);
    leftMax[0] = height[0];
    for(let i=1; i<height.length; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }
    return leftMax;
}

function getRightMax(height: number[]) : number[] {
    let n = height.length;
    let rightMax = new Array(height.length).fill(0);
    rightMax[n-1] = height[n-1];
    for(let i=n-2; i>=0; i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i]);
    }
    return rightMax;
}