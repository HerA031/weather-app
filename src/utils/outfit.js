export const getOutfit=(temp)=>{
    if(temp>=28) return '민소매, 반바지'
    if(temp>=22) return '민소매, 반바지'
    if(temp>=15) return '민소매, 7부바지'
    if(temp>=8) return '7부소매, 긴바지'
    return '긴소매, 긴바지'
}
