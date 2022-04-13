export function logarTempoDeExecucao( emSegundos: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`A função ${propertyKey}, levou ${emSegundos ? ((t2-t1)+' milissegundos') : (((t2-t1)/1000)+' segundos')} para executar.`);
            retorno;
        }
        return descriptor;
    }
}