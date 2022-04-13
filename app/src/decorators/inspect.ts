/*
Exemplo de simplificação do decorator.
Fazendo dessa forma não é possível passar um parâmetro para o decorator.
Sua chamada ao invés de ser @inspect() será @inspect.
Para uma melhor prática em um projeto real deve-se escolher entre essa forma mais simples ou a anterior, com o fim de evitar irregularidades no código.
*/
export function inspect( target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno =  metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);

        return retorno;
    }
    return descriptor;
}