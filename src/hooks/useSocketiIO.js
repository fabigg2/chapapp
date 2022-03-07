export class SokectConection {
    static socketIO = null

}

export const  useSoketIO = ()=>{
    
    const listenEvent = (event, callback)=>{
        SokectConection.socketIO.on(event, callback);
    }

    const emitEvent = (event, data)=>{
        SokectConection.socketIO.emit(event, data);
    }


    return {listenEvent, emitEvent};

}

















